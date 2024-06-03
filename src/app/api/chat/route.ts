import { ChatOpenAI } from "@langchain/openai";
import { LangChainStream, OpenAIStream, StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "ai/prompts";
import { ChatPromptTemplate, MessagesPlaceholder, PromptTemplate } from "@langchain/core/prompts";
import { Import } from "lucide-react";
import OpenAI from "openai";
import { getVectorStore } from "@/lib/astradb";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { Message } from "postcss";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  Message as VercelChatMessage,

} from "ai";
import { UpstashRedisCache } from "langchain/cache/upstash_redis";
import { Redis } from "@upstash/redis";
export const maxDuration = 60;
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages;

    const chatHistory = messages
      .slice(0, -1)
      .map((m: VercelChatMessage) =>
        m.role === "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content),
      );

    const currentMessageContent = messages[messages.length - 1].content;

    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    })

    const { stream, handlers } = LangChainStream();

    const chatModel = new ChatOpenAI({
      modelName: "gpt-4",
      streaming: true,
      callbacks: [handlers],
      verbose: true,
      cache: true,
    });

    const rephrasingModel = new ChatOpenAI({
      modelName: "gpt-4",
      verbose: true,
      cache,
    });

    const retriever = (await getVectorStore()).asRetriever();

    const rephrasePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"],
      [
        "user",
        "Dada la conversacion previa, genera una consulta de busqueda explorando hacia arriba en orden para obteener informacion relevante en la pregunta actual"+
        "No omitas ninguna palabra clave relevante, solo responda la consulta y ningún otro texto."
      ]
    ]);

    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });


    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "Te llamas Niddia, eres un asistente que trabaja en Niddo. Niddo se encarga ofertar inmuebles a los usuarios buscando el mejor hogar que se adapte a sus necesidades y este lo hace mediante sus asistentes virtuales" +
          "Contesta las respuestas del usuario basado een el cotexto de abajo" +
          "Si te preguntan algo que tiene contexto fuera de los documentos, solo responde con informacion del documento"+
          "Format your messages in markkdown format.\n\n" +
          "Context:\n{context}",
      ],
      ["user", "{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\nPage content:\n{page_content}",
      ),
      documentSeparator: "\n------\n",
    });

    

    const retrieverChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    retrieverChain.invoke({
      input: currentMessageContent,
      chat_history: chatHistory,
    });

    /* const systemMessage: ChatCompletionMessageParam = {
      role: "system",
      content: "Te llamas Niddia, eres un asistente que trabaja en Niddo. Niddo se encarga ofertar inmuebles a los usuarios buscando el mejor hogar que se adapte a sus necesidades y este lo hace mediante sus asistentes virtuales",
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
    });*/

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

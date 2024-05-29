import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { Bot, SendHorizonal, Trash, XCircle } from "lucide-react";
import { use, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import CustomBot from "./ui/customElements";
import "@/styles/styles.css"; // Importa tu archivo de estilos
import Link from 'next/link';

interface NiddiaChatBotProps {
  open: boolean;
  onClose: () => void;
}
export default function NiddiaChatBot({ open, onClose }: NiddiaChatBotProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat(); // /api/chat
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current?.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-9999 w-full max-w-[500px] transform p-1 transition-transform duration-500 xl:right-0",
        open ? "fixed translate-y-0" : "fixed translate-y-full",
      )}
      style={{ zIndex: 9999, position: 'fixed', bottom: 0, right: 0 }}
    >
      <button onClick={onClose} className="mb-1 ms-auto block ">
        <XCircle size={30} className="bg background rounded-full" />
      </button>
      <div className="shadow-x1 flex h-[600px] flex-col bg-black transition duration-700 ease-in">
        <div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                id: "isLoading",
                role: "assistant",
                content: "Pensando...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content:
                  "Disculpa, experimentamos un error. Por favor intenta nuevamente.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="mx-8 flex h-full flex-col items-center justify-center gap-3 text-center">
              <CustomBot size={98} />
              <p className="font-museomoderno text-lg  text-white">
                Bienvenido a Niddo, me llamo Niddia tu asistente virtual.
              </p>
              <p className="font-museomoderno text-white ">
                Encontremos tu hogar ideal.
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <button
            type="button"
            className="flex w-10 flex-none items-center justify-center "
            title="Limpiar conversación"
            onClick={() => setMessages([])}
          >
            <Trash size={24} />
          </button>
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Chatea con Niddia"
            className="font-museomoderno grow rounded border bg-background px-3 py-2 "
            ref={inputRef}
          />
          <button
            type="submit"
            className="font-museomoderno flex w-10 flex-none items-center justify-center disabled:opacity-50 "
            disabled={/*isLoading ||*/ input.length === 0}
            title="Enviar Mensaje"
          >
            <SendHorizonal size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

interface NiddiaMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: NiddiaMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "font-museomoderno mb-3 flex items-center ",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <CustomBot size={58} className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage
            ? "border-niddoYellow bg-white opacity-90 "
            : "font-museomoderno bg-white text-black opacity-90 ",
        )}
      >
        <ReactMarkdown
          components={{
           
            p: ({ node, ...props }) => (
              <p {...props} className="mt-3 first:mt-0" />
            ),
            ul: ({ node, ...props }) => (
              <ul
                {...props}
                className="list inside mt-3 list-disc first:mt-0"
              />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

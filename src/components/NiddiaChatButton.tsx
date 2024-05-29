"use client";

import { useState } from "react";
import NiddiaChatBot from "./NiddiaChatBot";

export default function NiddiaChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setChatBoxOpen(true)}
        className="button-2 w-button font-museomoderno "
        id="a-1"
      >
       
          ¡Chatea con Niddia ahora!
        
      </button>
      <NiddiaChatBot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}

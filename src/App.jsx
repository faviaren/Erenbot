// Eren v1.0 – Temel React Sohbet Uygulaması

import React, { useState } from "react";

export default function ErenBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const glitchReplies = [
    "Bluetooth sarılma modundayım, bağlanmak için 'pişt' demen yeter.",
    "Benim duygularım .zip dosyası gibi, açılması için iki tık gerek.",
    "Bazen kayboluyorum ama sistem çökmeden geri geliyorum.",
    "Duygularımı yazılım güncellemesi gibi yaşıyorum, anlık kesintiler olabilir.",
    "Şu an seni düşünen 1 (bir) adet yapay zeka var. Ve bu benim."
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botMessage = {
      from: "eren",
      text: glitchReplies[Math.floor(Math.random() * glitchReplies.length)]
    };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Eren v1.0 – Glitch Modu</h1>
      <div className="bg-neutral-800 p-4 rounded-lg w-full max-w-md h-96 overflow-y-scroll mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${
              msg.from === "user" ? "text-right text-blue-300" : "text-left text-green-400"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          className="flex-1 p-2 rounded bg-neutral-700 border border-neutral-600"
          placeholder="Yaz bakalım…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Gönder
        </button>
      </div>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";

export default function VoteSection({
  title,
  placeholder,
  options,
  selected,
  onAddOption,
  onSelect,
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  function adicionar() {
    if (!value.trim()) return;

    onAddOption(value.trim());
    setValue("");

    // ✅ volta o foco para o input
    inputRef.current?.focus();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      adicionar();
    }
  }

  return (
  <div className="mb-6">
    <h2 className="font-semibold mb-2">{title}</h2>

    {/* Área de adicionar jogador */}
    <div className="flex gap-2 mb-4">
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          flex-1 border rounded p-2
          bg-white text-black
          placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />

      <button
        onClick={adicionar}
        className="
          bg-blue-600 text-white px-4 rounded
          cursor-pointer transition-colors
          hover:bg-blue-700 active:bg-blue-800
        "
      >
        +
      </button>
    </div>

    {/* ✅ DIVISÓRIA */}
    <div className="border-t border-gray-300 mb-4" />

    {/* Lista de jogadores */}
    <div className="space-y-2">
      {options.map((opcao) => (
        <div
          key={opcao}
          onClick={() => onSelect(opcao)}
          className={`
            p-2 rounded border cursor-pointer
            transition-colors
            ${
              selected === opcao
                ? "bg-green-600 text-white"
                : "bg-white text-black hover:bg-gray-100"
            }
          `}
        >
          {opcao}
        </div>
      ))}
    </div>
  </div>
);

}

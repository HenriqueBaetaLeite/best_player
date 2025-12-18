"use client";

import { useEffect, useState } from "react";
import { getVotos, clearVotos } from "@/utils/storage";
import { useRouter } from "next/navigation";

export default function Resultado() {
  const [votos, setVotos] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setVotos(getVotos());
  }, []);

  function contar() {
    return votos.reduce((acc, voto) => {
      if (!voto.melhorJogador) return acc;
      acc[voto.melhorJogador] = (acc[voto.melhorJogador] || 0) + 1;
      return acc;
    }, {});
  }

  function zerarVotos() {
    const ok = confirm("Deseja zerar os votos desta partida?");
    if (!ok) return;

    clearVotos();
    setVotos([]);
  }

  const resultado = contar();

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Resultado da Partida</h1>

      <p className="text-sm text-gray-500 mb-4">
        Total de votos: {votos.length}
      </p>

      {Object.entries(resultado).length === 0 && (
        <p className="text-gray-600">Nenhum voto registrado.</p>
      )}

      {Object.entries(resultado).map(([nome, qtd]) => (
        <div
          key={nome}
          className="
            flex justify-between items-center
            bg-gray-200 text-gray-900
            p-3 rounded mb-2
          "
        >
          <span className="font-medium">{nome}</span>
          <strong className="text-lg">{qtd}</strong>
        </div>
      ))}

      <button
        onClick={zerarVotos}
        className="
          w-full mt-6 p-3 rounded mb-3
          bg-red-600 text-white font-semibold
          cursor-pointer transition-colors
          hover:bg-red-700 active:bg-red-800
        "
      >
        Zerar votos / Nova partida
      </button>

      <button
        onClick={() => router.push("/votacao")}
        className="mt-5 w-full border p-3 rounded cursor-pointer
          transition-colors hover:bg-gray-600 active:bg-gray-600"
      >
        Voltar para votação
      </button>
    </div>
  );
}

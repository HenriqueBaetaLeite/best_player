"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VoteSection from "@/components/VoteSection";
import { addVoto, getVotos } from "@/utils/storage";

export default function Votacao() {
  const router = useRouter();

  const [jogadores, setJogadores] = useState([]);
  const [melhorJogador, setMelhorJogador] = useState("");
  const [totalVotos, setTotalVotos] = useState(0);

  // Carrega a contagem inicial
  useEffect(() => {
    const votos = getVotos();
    setTotalVotos(votos.length);
  }, []);

  function votar() {
    if (!melhorJogador) {
      alert("Selecione um jogador");
      return;
    }

    addVoto({ melhorJogador });

    // Atualiza apenas o total de votos
    const votosAtualizados = getVotos();
    setTotalVotos(votosAtualizados.length);

    setMelhorJogador("");
    alert("Voto registrado! Próximo jogador.");
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Votação – Melhor Jogador</h1>

      {/* ✅ CONTADOR SIMPLES */}
      <p className="text-sm text-gray-600 mb-4">
        Pessoas que já votaram: <strong>{totalVotos}</strong>
      </p>

      <VoteSection
        title="🏆 Melhor jogador em campo"
        placeholder="Adicionar jogador"
        options={jogadores}
        selected={melhorJogador}
        onAddOption={(v) => setJogadores([...jogadores, v])}
        onSelect={setMelhorJogador}
      />

      <button
        onClick={votar}
        className="
          w-full bg-green-600 text-white p-3 rounded font-semibold mb-3
          cursor-pointer transition-colors
          hover:bg-green-700 active:bg-green-800
        "
      >
        Confirmar voto
      </button>

      <button
        onClick={() => router.push("/resultado")}
        className="mt-5 w-full border p-3 rounded cursor-pointer
          transition-colors hover:bg-gray-600 active:bg-gray-600"
      >
        Ver resultado
      </button>
    </div>
  );
}

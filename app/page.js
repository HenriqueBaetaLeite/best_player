import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Siga para /votacao</h1>
      <Link href="/votacao" className="ml-4 text-blue-600 underline">
        Ir para votação
      </Link>
    </div>
  );
}

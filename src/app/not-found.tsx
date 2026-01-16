import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        404
      </p>
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
        Pagina nao encontrada.
      </h1>
      <p className="text-sm text-muted">
        O caminho que voce tentou acessar nao existe. Volte para a home ou
        explore nossos projetos.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button asChild variant="accent">
          <Link href="/">Voltar para a home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/works">Ver trabalhos</Link>
        </Button>
      </div>
    </div>
  );
}

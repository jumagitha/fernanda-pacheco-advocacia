import Link from "next/link";
import { ShineBorder } from "@/components/magicui/shine-border";
import { CONTATO } from "@/lib/conteudo";
import { cn } from "@/lib/utils";

/** Para onde vão as chamadas principais: WhatsApp (quando confirmado) ou a seção de contato. */
export function linkContato(mensagem = "Olá, gostaria de falar com a advogada Fernanda Pacheco.") {
  return CONTATO.whatsapp
    ? `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`
    : "#contato";
}

export function Seta({ dir = "→" }: { dir?: "→" | "↓" }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
    >
      {dir}
    </span>
  );
}

/** Botão principal bordô com brilho dourado (Magic UI Shine Border). */
export function BotaoPrincipal({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const externo = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener" } : {})}
      className={cn(
        "group relative inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[2px] border border-dourado/60 bg-bordo px-7 text-[15px] font-semibold text-offwhite no-underline transition-colors hover:bg-bordo-hover",
        className
      )}
    >
      <ShineBorder borderWidth={1.5} duration={9} shineColor={["#C4A484", "#E9C9A6", "#C4A484"]} />
      {children} <Seta />
    </Link>
  );
}

/** Link discreto sublinhado em dourado. */
export function LinkSeta({
  children,
  href,
  dir = "→",
  className,
}: {
  children: React.ReactNode;
  href: string;
  dir?: "→" | "↓";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 border-b border-dourado pb-1 text-[15px] font-semibold no-underline",
        className
      )}
    >
      {children} <Seta dir={dir} />
    </Link>
  );
}

export function Sobretitulo({
  children,
  className,
  linha = "bg-dourado",
}: {
  children: React.ReactNode;
  className?: string;
  linha?: string;
}) {
  return (
    <p className={cn("sobretitulo m-0", className)}>
      {children}
      <span aria-hidden="true" className={cn("inline-block h-px w-8", linha)} />
    </p>
  );
}

export function Pendente({ children }: { children: React.ReactNode }) {
  return <em className="not-italic opacity-80">[{children}]</em>;
}

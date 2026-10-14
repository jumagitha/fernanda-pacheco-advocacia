import { CONTATO, PERGUNTAS, REGIOES, SERVICOS, SITE } from "@/lib/conteudo";

/**
 * Dados estruturados (schema.org) para o Google e assistentes de IA entenderem
 * quem é a advogada, a área e as cidades atendidas. Só entram dados confirmados.
 */
export function DadosEstruturados() {
  const servico = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}/#escritorio`,
    name: SITE.nome,
    url: SITE.url,
    description: SITE.descricao,
    slogan: SITE.frase,
    logo: `${SITE.url}/logos/fp-vertical-principal-fundo-claro.svg`,
    image: `${SITE.url}/opengraph-image.png`,
    knowsLanguage: "pt-BR",
    areaServed: REGIOES.map((r) => ({
      "@type": "City",
      name: `${r.cidade}, ${r.uf === "DF" ? "Distrito Federal" : "Goiás"}`,
    })),
    knowsAbout: ["Direito Penal", "Processo Penal", "ANPP", "Audiência de custódia", "Prisão em flagrante", ...SERVICOS],
    founder: { "@type": "Person", name: SITE.advogada, jobTitle: "Advogada" },
    ...(CONTATO.whatsapp ? { telephone: `+${CONTATO.whatsapp}` } : {}),
    ...(CONTATO.email ? { email: CONTATO.email } : {}),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PERGUNTAS.map((q) => ({
      "@type": "Question",
      name: q.p,
      acceptedAnswer: { "@type": "Answer", text: q.r },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servico) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

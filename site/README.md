# Site — Fernanda Pacheco Advocacia

Página única de Direito Criminal (versão B com o hero da C), feita em Next.js com os componentes Shine Border e Border Beam do Magic UI.

## Ver o site no seu Mac

Abra o Terminal e cole, uma linha por vez:

```
cd /Users/fernanda/PROJETOS/CLAUDE/SITE_FP_CLAUDE_GPT/site
npm install
npm run dev
```

Depois abra **http://localhost:3000** no navegador. Para parar, volte ao Terminal e aperte `Control + C`.

## Onde mudar cada coisa

| O que | Arquivo |
|---|---|
| Textos, serviços, cidades, perguntas frequentes | `lib/conteudo.ts` |
| **Telefone/WhatsApp, e-mail, OAB** (hoje "a confirmar") | `lib/conteudo.ts`, bloco `CONTATO` |
| Domínio oficial | `lib/conteudo.ts`, campo `url` |
| Layout da página | `app/page.tsx` |
| Cores e fontes | `app/globals.css` (espelha o design system) |
| Logos | `public/logos/` |

Quando o WhatsApp for preenchido, todos os botões "Falar com a advogada" passam a abrir o WhatsApp sozinhos.

## Gerar a versão para publicar

```
npm run build
```

O site pronto fica na pasta `out/` (arquivos estáticos, servem em Vercel, Netlify ou qualquer hospedagem). **Não publicar antes da aprovação.**

## Antes de publicar (checklist)

- [ ] Preencher OAB, WhatsApp e e-mail confirmados em `lib/conteudo.ts`
- [ ] Definir o domínio e trocar o campo `url`
- [ ] Foto autoral e texto "Sobre" escritos pela Fernanda
- [ ] Revisar as perguntas frequentes (texto jurídico)
- [ ] Conferir regras de publicidade da OAB (Provimento 205/2021)
- [ ] Depois de publicar: cadastrar no Google Search Console e enviar o `sitemap.xml`

## O que já está pronto para Google e IAs

- Título e descrição com "advogada criminal" e as 6 cidades
- Dados estruturados (LegalService com cidades atendidas + FAQ)
- `sitemap.xml`, `robots.txt` e `llms.txt` (resumo para assistentes de IA)
- Imagem de compartilhamento, favicon e ícones de celular
- Fontes hospedadas no próprio site (sem Google Fonts), boa velocidade e acessibilidade (teclado, contraste, "reduzir movimento")

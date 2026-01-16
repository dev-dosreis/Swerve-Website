# SWERVE Website

Site institucional premium da SWERVE, construido com Next.js, TailwindCSS e shadcn/ui.

## Rodar local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Editar conteudo

Todo o texto e links principais ficam em `src/content/site.ts`.

- WhatsApp: altere `siteContent.whatsapp.href`
- CTA da home: `siteContent.hero`
- Projetos/Works: `siteContent.works`
- FAQ e textos gerais: `siteContent.faq`, `siteContent.finalCta`

## Formulario de contato

O formulario usa Formspree por padrao. Troque o endpoint em:

`src/content/site.ts` -> `siteContent.contact.formspreeEndpoint`

Se preferir Resend, substitua o form por um endpoint de API e atualize o action.

## Deploy na Vercel

1. Suba o repo no GitHub
2. Importe o projeto na Vercel
3. Configure as variaveis necessarias (se usar Resend)
4. Deploy

## SEO / OpenGraph

Metadados base estao em `src/app/layout.tsx`. Atualize `siteContent.url` para o dominio final.

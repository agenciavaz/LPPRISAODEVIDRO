# Rael — A Prisão de Vidro

Landing page em Next.js App Router, React, TypeScript e Tailwind CSS 4. Fontes Cormorant Garamond e Inter hospedadas junto do projeto. Foto original incluída em `public/images/rael.png`. Animações CSS, suporte a movimento reduzido e layout responsivo.

## Executar

Requer Node.js 22 ou superior e pnpm. Na pasta do projeto:

```sh
npm install -g pnpm
pnpm install
pnpm dev
```

Abra http://127.0.0.1:3000. Para produção: `pnpm build` e `pnpm start`. Verificação TypeScript: `pnpm typecheck`.

## Personalização

- `lib/site.ts`: links HTTPS reais de compra, Instagram, YouTube e WhatsApp. Campos vazios mostram um aviso e não navegam. WhatsApp deve receber seu endereço oficial completo com o número autorizado.
- `lib/site.ts`, campo `cover`: coloque a capa autorizada em `public/images/` e informe o caminho, por exemplo `/images/capa-real.jpg`. Até lá, o mockup permanece explicitamente ilustrativo.
- `app/page.tsx`: textos editoriais. Biografia, trajetória, sinopse, formato e edição aguardam confirmação. Não há depoimentos, datas biográficas ou alegações de conteúdo inventadas.
- `app/globals.css`: paleta, layout, efeitos e pontos de adaptação de tela.
- `.env.example`: copie para `.env.local` e configure a URL pública real. A variável `NEXT_PUBLIC_CONTENT_APPROVED` mantém o modelo fora da indexação até a aprovação do conteúdo. Somente após a revisão completa, altere para `true` e faça um novo deploy.
- Ao finalizar os textos e links, revise também os avisos de modelo e de confirmação no conteúdo da página.

Compartilhamento usa o recurso nativo do aparelho; quando indisponível, copia o endereço da página. Se a cópia não for permitida, exibe um campo selecionável. Na prévia local, o endereço compartilhado é local; publique para compartilhar com outras pessoas.

## GitHub e Vercel

1. Crie um repositório no GitHub e envie esta pasta, incluindo `pnpm-lock.yaml`. Não envie `node_modules`, `.next` ou arquivos `.env.local`.
2. Na Vercel, importe o repositório. O framework é Next.js; mantenha os padrões de build e saída.
3. Configure `NEXT_PUBLIC_SITE_URL` com o domínio real e `NEXT_PUBLIC_CONTENT_APPROVED=false` enquanto o conteúdo estiver em revisão.
4. Publique, teste os links e o compartilhamento em um telefone. Após aprovação, configure `NEXT_PUBLIC_CONTENT_APPROVED=true` e publique novamente.

O projeto não depende de banco de dados, contas externas, chaves secretas ou APIs pagas. A publicação na Vercel é feita separadamente da publicação do código no GitHub.

## Créditos

LP Desenvolvida por Agência Vaz Comunicação e Marketing - 2026

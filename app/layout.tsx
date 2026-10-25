import type { Metadata } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import './globals.css';
import { site, safeUrl } from '@/lib/site';
const url = safeUrl(site.url);
export const metadata: Metadata = {
  title: 'Rael | A Prisão de Vidro',
  description: 'Conheça A Prisão de Vidro e o escritor Rael. Explore a apresentação do livro, o espaço do autor e seus canais de contato.',
  ...(url ? { metadataBase: new URL(url), alternates: { canonical: url } } : {}),
  robots: { index: site.approved, follow: site.approved },
  openGraph: { title: 'Rael | A Prisão de Vidro', description: 'Uma nova leitura começa aqui. Conheça o livro e seu autor.', locale: 'pt_BR', type: 'website', ...(url ? {url, images: [{url:'/images/rael.png', width:1086, height:1448, alt:'Escritor Rael'}]} : {}) },
  twitter: { card: 'summary', title: 'Rael | A Prisão de Vidro' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }

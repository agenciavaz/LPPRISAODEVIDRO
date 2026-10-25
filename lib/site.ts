// Preencha somente com destinos reais. Strings vazias exibem um aviso, sem navegar.
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || '',
  approved: process.env.NEXT_PUBLIC_CONTENT_APPROVED === 'true',
  links: { compra: '', instagram: '', youtube: '', whatsapp: '' },
  // Exemplo após adicionar a capa: '/images/capa-real.jpg'
  cover: '',
};
export function safeUrl(value: string) {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : undefined; } catch { return undefined; }
}

import type { MetadataRoute } from 'next';
import { site, safeUrl } from '@/lib/site';
export default function robots(): MetadataRoute.Robots { const url = safeUrl(site.url); return {rules:{userAgent:'*',allow:site.approved ? '/' : undefined,disallow:site.approved ? undefined : '/'},...(url && site.approved ? {sitemap: `${url.replace(/\/$/, '')}/sitemap.xml`} : {})}; }

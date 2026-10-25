import type { MetadataRoute } from 'next';
import { site, safeUrl } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap { const url=safeUrl(site.url); return url && site.approved ? [{url, changeFrequency:'monthly', priority:1}] : []; }

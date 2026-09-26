// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE ON DEPLOYMENT
// Served from the custom domain yashchheda.is-a.dev (see public/CNAME).
// yashchheda.github.io 301-redirects to it, so `site` must name the custom
// domain: canonical URLs, og:url, og:image and the sitemap are all derived
// from it, and pointing them at a redirect splits SEO signals and breaks
// share-card scrapers that do not follow redirects for images.
//
// Still a GitHub *user* site, so `base` stays at '/'. If you ever move to a
// project page, set base: '/repo-name/'.
//
// To change domain, three files carry the origin — this one is not enough:
//   1. `site` below
//   2. public/CNAME        (the bare domain, must match Pages settings)
//   3. public/robots.txt   (absolute Sitemap: URL)
// A fourth, scripts/og-card.html, renders the domain as visible text into
// public/og.png and needs re-rendering (see README).
export default defineConfig({
  site: 'https://yashchheda.is-a.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Default 'directory' format (/resume/index.html) is deliberate over 'file'
  // (/resume.html): extensionless links like /resume then resolve on GitHub
  // Pages *and* on any plain static server. 'file' relies on the host trying
  // an implicit .html, which GitHub Pages does but most local servers do not.
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE ON DEPLOYMENT
// This is configured for a GitHub *user* site (yashchheda.github.io), so `base`
// stays at '/'. If you ever move to a project page, set base: '/repo-name/'.
//
// To move to a custom domain later (e.g. yashchheda.dev), the change is:
//   1. add `public/CNAME` containing the bare domain
//   2. update `site` below
// Nothing else in the codebase hardcodes the origin.
export default defineConfig({
  site: 'https://yashchheda.github.io',
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

# yashchheda.github.io

Personal site and résumé. Astro + Tailwind, static output, no client framework.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
npm run preview  # serve the built output
npm run check    # astro check (type-checks .astro templates too)
```

## Where the content lives

**`src/data/resume.ts` is the single source of truth.** Roles, bullets, metrics,
skills, education and the terminal hero all read from it. Edit that file, not the
markup — the previous version of this site drifted four years out of date because
facts were pasted into HTML by hand.

The PDF résumé at `public/Yash_Chheda_Resume.pdf` is generated separately from
the LaTeX sources in `~/resume-latex/` (`tectonic -X compile main.tex`). If you
change a fact, change it in both places.

## Social share card

`public/og.png` is the Open Graph image — the preview shown when the site is
linked in Slack, LinkedIn, iMessage and similar. It is referenced by `og:image`
in `src/layouts/Base.astro`, which builds an absolute URL from `site`, so a
domain move needs no edit there.

Note the card also renders the domain as **visible text** in its footer, so a
domain move does require editing `scripts/og-card.html` and re-rendering.

The image is rendered from `scripts/og-card.html`, committed so the card stays
editable instead of being an unexplained binary. To regenerate after editing:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --allow-file-access-from-files \
  --force-device-scale-factor=1 --window-size=1200,630 \
  --screenshot="$PWD/public/og.png" "file://$PWD/scripts/og-card.html"
```

1200×630 is the Open Graph standard; keep it. The card duplicates the palette
and fonts from `src/styles/global.css` because it renders outside Astro and
cannot import the theme tokens — if the brand colour changes there, change it
in the card too and re-render.

## Publishing notes

- The internal GitLab host must never appear in this repo. Platform scale
  figures and the Stratus programme name are cleared for publication; the
  internal repo URL and hostname are not.
- No phone number: this site is indexed, and a public number attracts spam.

## Deployment

Deployed by `.github/workflows/deploy.yml` on push to `master` (or manual
`workflow_dispatch`). Pages source is set to "GitHub Actions"; nothing built is
committed. The workflow runs `npm ci`, then `npm run check`, then
`npm run build`, and uploads `dist/` as the Pages artifact.

Feature branches deliberately do not deploy — a branch build would publish
unreviewed content to the live site.

## Custom domain

Live on **https://yashchheda.is-a.dev** (a free `.is-a.dev` subdomain, granted
via the `is-a-dev/register` repo). `yashchheda.github.io` 301-redirects to it.

Four files carry the origin. `site` alone is not enough:

1. `site` in `astro.config.mjs` — derives canonical, `og:url`, `og:image`, sitemap
2. `public/CNAME` — the bare domain. **Must match the Pages setting exactly**, or
   the deploy can change or clear the custom domain
3. `public/robots.txt` — the absolute `Sitemap:` URL
4. `scripts/og-card.html` — renders the domain as visible text into `public/og.png`,
   so the card must be re-rendered (see above)

Verify after any domain change:

```bash
gh api repos/yashchheda/yashchheda.github.io/pages --jq '{cname,https_enforced,status}'
curl -sI https://yashchheda.is-a.dev/ | head -1
curl -s https://yashchheda.is-a.dev/ | grep -o '<link rel="canonical"[^>]*>'
```

`.is-a.dev` is HSTS-preloaded, so HTTPS is mandatory — GitHub Pages handles that.

## Notes / writing

`src/content/notes/` holds three post outlines with `draft: true`, so they are
committed but excluded from the build. Remove the flag to publish, then
uncomment the Notes link in `src/components/SiteHeader.astro`.

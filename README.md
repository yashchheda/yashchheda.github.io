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

## Publishing notes

- The internal GitLab host (`gitlab.appian-stratus.com`) must never appear in
  this repo. Platform scale figures and the Stratus programme name are cleared
  for publication; the internal repo URL is not.
- No phone number: this site is indexed, and a public number attracts spam.

## Deployment

Not wired up yet — `npm run build` produces `dist/`, which is what GitHub Pages
needs to serve. Two options when you're ready:

1. **GitHub Actions** (recommended): add the `withastro/action` workflow and set
   Pages source to "GitHub Actions". Nothing built gets committed.
2. **Commit the output**: build locally and commit `dist/` contents to the branch
   Pages serves. Remove `dist/` from `.gitignore` first.

## Custom domain

`.dev` domains are **not** free (~$12–15/year). When you buy one:

1. add `public/CNAME` containing the bare domain, e.g. `yashchheda.dev`
2. update `site` in `astro.config.mjs`

Nothing else hardcodes the origin. `.dev` is HSTS-preloaded, so HTTPS is
mandatory — GitHub Pages handles that.

## Notes / writing

`src/content/notes/` holds three post outlines with `draft: true`, so they are
committed but excluded from the build. Remove the flag to publish, then
uncomment the Notes link in `src/components/SiteHeader.astro`.

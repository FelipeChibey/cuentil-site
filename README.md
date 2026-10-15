# traki-site

Public website for the Traki Android app: landing page, privacy policy and account deletion. Built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

## Development

```sh
cp .env.example .env   # fill in PUBLIC_SUPABASE_ANON_KEY
npm install
npm run dev            # http://localhost:4321/traki-site/
npm run build          # type-checks, then builds to dist/
```

The account deletion form signs in against Supabase and calls the `delete-account` Edge Function. To try it without touching production, point `PUBLIC_SUPABASE_URL`/`PUBLIC_SUPABASE_ANON_KEY` at a local stack (`supabase start` in the backend repo) and add `http://localhost:4321` to that function's `ALLOWED_ORIGINS`.

## Structure

| Path | What lives there |
| --- | --- |
| `src/i18n/config.ts` | Supported locales and the default one |
| `src/i18n/locales/*.ts` | UI strings; `es.ts` must define every key in `en.ts` or the build fails |
| `src/content/legal/<locale>/*.md` | Long-form legal pages, one Markdown file per locale; each becomes `/<locale>/<file>/` |
| `src/pages/[lang]/` | Pages generated once per locale |
| `src/site.ts` | App name, developer name and contact email |

**Adding a language:** add it to `locales` and `localeNames`/`localeTags` in `src/i18n/config.ts`, add `src/i18n/locales/<code>.ts` and register it in `src/i18n/index.ts`, and translate every file under `src/content/legal/`. The build fails if a legal page is missing in any locale.

**Adding a legal page** (e.g. terms): add `src/content/legal/<locale>/terms.md` for every locale.

## Deployment

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`. Pull requests only build. The workflow reads these repository variables (Settings → Secrets and variables → Actions → Variables):

| Variable | Value |
| --- | --- |
| `PUBLIC_SUPABASE_URL` | `https://<project-ref>.supabase.co` |
| `PUBLIC_SUPABASE_ANON_KEY` | The project's anon key (public by design, also shipped in the app) |
| `SITE_URL` | Optional. Full public URL; defaults to `https://felipechibey.github.io/traki-site/` |

**Moving to a custom domain:** set `SITE_URL` to the new URL (e.g. `https://traki.app/`), configure the domain under Settings → Pages, and add the new origin to the `delete-account` function's `ALLOWED_ORIGINS` secret in Supabase.

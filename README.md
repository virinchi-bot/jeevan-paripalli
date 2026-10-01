# Jeevan Paripelli – Personal Profile

A minimal, mobile-first personal profile site built with Next.js 14 (App Router) and TypeScript. No client-side JavaScript beyond what Next.js itself ships; animations are CSS only.

## Run

```powershell
npm install
npm run dev
```

Open http://localhost:3000

Production:

```powershell
npm run build
npm run start
```

## Replace before deploying

1. **Domain** – edit `app/site.ts` and change `SITE_URL` from `https://YOUR-DOMAIN.com` to your real domain. It feeds the canonical URL, Open Graph, sitemap, robots and JSON-LD.
2. **Profile photo** – replace `public/profile.jpeg` with a real portrait (4:5, at least 1200×1500px, keep the filename). It is also the social share image.
3. **About copy** – edit the text in `app/page.tsx`. Only publish facts Jeevan wants public.

## SEO included

- Next.js Metadata API: title, description, keywords, canonical, Open Graph, Twitter/X, robots
- Schema.org `Person` JSON-LD (name, URL, image, `sameAs` → Instagram)
- `robots.txt` and `sitemap.xml` (via `app/robots.ts`, `app/sitemap.ts`)
- Semantic HTML, single H1, H2 sections, descriptive alt text, accessible links
- Server-rendered, static, fast

## After deploying (legitimate steps that actually help)

- Add the site in Google Search Console, verify it, and submit `/sitemap.xml`.
- Add the website URL to the Instagram bio so the `sameAs` link is reciprocal.
- Link to the site from other profiles you genuinely own.

No hidden text, keyword stuffing or fake links are used. Rankings are never guaranteed, and a brand-new site can take weeks to appear.

# Flame — Multi-page Site (Next.js + Tailwind)

A dark, minimalist, high-authority site designed for "quiet power" energy.

## Pages
- `/` Home
- `/mission`
- `/impact`
- `/library` (books)
- `/workshops`
- `/watch` (YouTube embeds)
- `/contact`

## Edit your content (fastest way)
Open: `content/site.json`

Update:
- taglines
- books
- workshops
- YouTube video IDs
- email + channel link

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy (Vercel)
1. Push this repo to GitHub
2. Import to Vercel
3. Deploy

## Domain + email
- Replace `metadataBase` in `app/layout.tsx` with your real domain
- Update `content/site.json` email and YouTube link

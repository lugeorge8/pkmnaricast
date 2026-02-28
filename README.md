# pkmnaricast

Pokémon card investments site.

- Public homepage: market thesis + investor login
- Investor portal (auth-gated): vetted cards, holdings, lots, weekly price history (manual entry MVP)

## Local dev

1) Create a `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

2) Fill in Supabase env vars:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL` (for redirects; default is localhost)

3) Run:

```bash
npm i
npm run dev
```

## Supabase

MVP schema: `supabase/schema.sql`

Auth:
- email + password

## Routes

- `/` public thesis
- `/login` investor login
- `/investor/*` protected by middleware
  - `/investor` dashboard
  - `/investor/investments` vetted cards (demo)
  - `/investor/holdings` holdings (placeholder)
  - `/investor/prices` manual weekly entry spec

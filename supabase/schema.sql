-- pkmnaricast (MVP) schema
-- Designed for: Supabase Postgres + Supabase Auth (email/password)

-- Cards the admin has vetted as investments
create table if not exists public.cards (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  notes text,
  created_at timestamptz not null default now()
);

-- Weekly price points (manual entry MVP)
create table if not exists public.price_points (
  id uuid primary key default gen_random_uuid(),
  card_id uuid not null references public.cards (id) on delete cascade,
  source text not null check (source in ('tcgplayer', 'ebay', 'other')),
  price numeric(12,2) not null,
  as_of date not null,
  created_at timestamptz not null default now(),
  unique (card_id, source, as_of)
);

-- Each purchase lot for an investor (ties to Supabase Auth user)
create table if not exists public.lots (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  card_id uuid not null references public.cards (id) on delete restrict,
  qty integer not null default 1,
  unit_cost numeric(12,2) not null,
  fees numeric(12,2) not null default 0,
  purchased_at date,
  notes text,
  created_at timestamptz not null default now()
);

-- Recommended RLS ideas (not enabled here):
-- - investors can only read their own lots
-- - investors can read all cards + price_points
-- - only admin can insert/update cards + price_points

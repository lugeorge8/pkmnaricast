import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              pkmnaricast
            </div>
            <div className="mt-1 text-xl font-semibold tracking-tight">
              Pokémon card investments
            </div>
          </div>
          <Link
            href="/login"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-white/10"
          >
            Investor login
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300/80">
              Thesis
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              Pokémon is an inefficiently priced market.
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-300">
              Compared to traditional equities, Pokémon cards trade in a fragmented
              marketplace with uneven liquidity, noisy condition data, and
              inconsistent comps. That creates repeated pockets of mispricing we
              can target for strong risk-adjusted returns.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-sm font-semibold">Fragmented pricing</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Different venues (TCGplayer / eBay / auctions) clear at
                  different prices, and spreads widen under low attention.
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-sm font-semibold">Condition dispersion</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Real value depends on grade/condition; listings often misprice
                  this (especially in mid-tier grades).
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-sm font-semibold">Liquidity pockets</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Prices move in jumps. When sellers need liquidity, we can buy
                  below fair value.
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6">
                <div className="text-sm font-semibold">Information edge</div>
                <div className="mt-2 text-sm text-zinc-300">
                  Pop reports, set narratives, and auction cadence are not fully
                  reflected in weekly pricing.
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-zinc-400">
              Disclaimer: informational only — not investment advice.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Investor portal
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">
              Cards we&apos;ve vetted
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Private list of cards + weekly price history tracking (manual entry
              MVP), plus your holdings, cost basis, lots, and market value.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-teal-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90"
            >
              Sign in
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

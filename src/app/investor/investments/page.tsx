import { InvestorShell } from "@/components/investor-shell";
import { Pill, SectionTitle } from "@/components/ui";

const demo = [
  {
    name: "Base Set Charizard (Shadowless) PSA 8",
    set: "Base Set",
    grade: "PSA 8",
    horizon: "12–24 months",
    tags: ["blue-chip", "low float", "auction comps"],
    thesis:
      "Demand stays persistent while liquidity is episodic. We target mispriced listings when spreads widen and comp anchor points lag.",
  },
  {
    name: "1st Edition Neo Genesis Lugia PSA 9",
    set: "Neo Genesis",
    grade: "PSA 9",
    horizon: "6–18 months",
    tags: ["condition scarcity", "cyclical", "high attention"],
    thesis:
      "Condition scarcity + narrative cycles. We look for dips during low attention periods and re-rate as liquidity returns.",
  },
  {
    name: "Gold Star Rayquaza PSA 8",
    set: "EX Deoxys",
    grade: "PSA 8",
    horizon: "9–18 months",
    tags: ["icon card", "thin supply", "volatility"],
    thesis:
      "Thin supply + iconic demand can create overshoots in both directions. We buy into volatility when comps dislocate.",
  },
];

export default async function VettedInvestmentsPage() {
  return (
    <InvestorShell title="Vetted Cards">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Vetted cards"
          subtitle="Example list layout with thesis + tags."
        />
        <div className="text-xs text-zinc-400">(demo)</div>
      </div>

      <div className="mt-6 grid gap-4">
        {demo.map((c) => (
          <div
            key={c.name}
            className="rounded-3xl border border-white/10 bg-black/25 p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-base font-semibold tracking-tight text-zinc-50">
                  {c.name}
                </div>
                <div className="mt-1 text-xs text-zinc-400">
                  {c.set} • {c.grade} • Horizon: {c.horizon}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>

            <div className="mt-4 text-sm leading-6 text-zinc-200">
              {c.thesis}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Entry
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  Target spread dislocation
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Risk
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  Condition / authenticity
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                  Catalyst
                </div>
                <div className="mt-2 text-sm text-zinc-200">
                  Auction comps / narrative
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-xs text-zinc-400">
        Next: each card gets a detail page with weekly price chart + your notes.
      </div>
    </InvestorShell>
  );
}

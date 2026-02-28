import { InvestorShell } from "@/components/investor-shell";

const demo = [
  {
    name: "Base Set Charizard (Shadowless) PSA 8",
    thesis: "High demand, low float; pricing lags relative to pop + auction comps.",
    horizon: "12–24 months",
  },
  {
    name: "1st Edition Neo Genesis Lugia PSA 9",
    thesis: "Condition scarcity + cyclical attention; look for liquidity pockets.",
    horizon: "6–18 months",
  },
];

export default async function VettedInvestmentsPage() {
  return (
    <InvestorShell title="Vetted Cards">
      <div className="space-y-4">
        {demo.map((c) => (
          <div
            key={c.name}
            className="rounded-3xl border border-white/10 bg-black/30 p-5"
          >
            <div className="text-base font-semibold tracking-tight text-zinc-50">
              {c.name}
            </div>
            <div className="mt-2 text-sm text-zinc-300">{c.thesis}</div>
            <div className="mt-3 text-xs text-zinc-400">
              Target horizon: {c.horizon}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-xs text-zinc-400">
        (Demo data) — will be replaced with Supabase `cards` + `price_points`.
      </div>
    </InvestorShell>
  );
}

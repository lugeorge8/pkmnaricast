import { InvestorShell } from "@/components/investor-shell";
import { Pill, SectionTitle, StatCard } from "@/components/ui";

const demoHoldings = [
  {
    card: "Base Set Charizard (Shadowless) PSA 8",
    qty: 1,
    lots: 1,
    cost: 9200,
    mkt: 10450,
    tags: ["PSA", "blue-chip"],
  },
  {
    card: "1st Edition Neo Genesis Lugia PSA 9",
    qty: 2,
    lots: 2,
    cost: 13600,
    mkt: 15280,
    tags: ["PSA", "cycle"],
  },
  {
    card: "Gold Star Rayquaza PSA 8",
    qty: 1,
    lots: 1,
    cost: 5800,
    mkt: 6450,
    tags: ["PSA", "thin supply"],
  },
];

function usd(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default async function HoldingsPage() {
  const costBasis = demoHoldings.reduce((a, h) => a + h.cost, 0);
  const marketValue = demoHoldings.reduce((a, h) => a + h.mkt, 0);
  const pl = marketValue - costBasis;

  return (
    <InvestorShell title="Holdings">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Holdings"
          subtitle="Example holdings table with lots + market value."
        />
        <div className="text-xs text-zinc-400">(demo)</div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <StatCard label="Cost basis" value={usd(costBasis)} sub="demo" />
        <StatCard label="Market value" value={usd(marketValue)} sub="demo" />
        <StatCard
          label="Unrealized P/L"
          value={`${pl >= 0 ? "+" : "-"}${usd(Math.abs(pl))}`}
          sub="demo"
        />
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/15">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            <tr>
              <th className="px-4 py-3">Card</th>
              <th className="px-4 py-3">Qty</th>
              <th className="px-4 py-3">Lots</th>
              <th className="px-4 py-3">Cost basis</th>
              <th className="px-4 py-3">Market value</th>
              <th className="px-4 py-3">P/L</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-zinc-200">
            {demoHoldings.map((h) => {
              const plRow = h.mkt - h.cost;
              return (
                <tr key={h.card} className="hover:bg-white/5">
                  <td className="px-4 py-4">
                    <div className="font-semibold text-zinc-50">{h.card}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {h.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4">{h.qty}</td>
                  <td className="px-4 py-4">{h.lots}</td>
                  <td className="px-4 py-4">{usd(h.cost)}</td>
                  <td className="px-4 py-4">{usd(h.mkt)}</td>
                  <td
                    className={`px-4 py-4 font-semibold ${
                      plRow >= 0 ? "text-teal-300" : "text-rose-300"
                    }`}
                  >
                    {plRow >= 0 ? "+" : "-"}
                    {usd(Math.abs(plRow))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-sm leading-6 text-zinc-300">
        Next: add lot dropdown per card (each lot has purchase date, unit cost,
        fees, notes).
      </div>
    </InvestorShell>
  );
}

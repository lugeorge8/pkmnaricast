import { InvestorShell } from "@/components/investor-shell";
import { PurchaseLotsDropdown } from "@/components/purchase-lots";
import { Pill, SectionTitle } from "@/components/ui";

function usd(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

const demo = [
  {
    setName: "Twilight Masquerade",
    cardName: "Eevee",
    serial: "188/167",
    tags: ["alt art", "high demand", "modern"],
    costBasis: 1240,
    qty: 4,
    marketValue: 1480,
    lots: [
      {
        id: "LOT-001",
        purchasedAt: "2026-02-10",
        qty: 2,
        unitCost: 290,
        notes: "2 copies via eBay — clean corners",
      },
      {
        id: "LOT-002",
        purchasedAt: "2026-02-24",
        qty: 2,
        unitCost: 330,
        notes: "TCGplayer verified seller",
      },
    ],
  },
  {
    setName: "Base Set",
    cardName: "Charizard (Shadowless)",
    serial: "4/102",
    tags: ["blue-chip", "low float"],
    costBasis: 9200,
    qty: 1,
    marketValue: 10450,
    lots: [
      {
        id: "LOT-003",
        purchasedAt: "2025-11-03",
        qty: 1,
        unitCost: 9200,
        notes: "PSA 8 — strong eye appeal",
      },
    ],
  },
];

export default async function VettedInvestmentsPage() {
  return (
    <InvestorShell title="Vetted Cards">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Investments"
          subtitle="Premium deck layout. Each row is a position view."
        />
        <div className="flex flex-wrap gap-2">
          <Pill>demo</Pill>
          <Pill>manual weekly pricing</Pill>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-black/15">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
            <tr>
              <th className="px-4 py-3">Investment</th>
              <th className="px-4 py-3">Cost basis</th>
              <th className="px-4 py-3">Qty held</th>
              <th className="px-4 py-3">Purchase lots</th>
              <th className="px-4 py-3">Market value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 text-zinc-200">
            {demo.map((c) => (
              <tr key={`${c.setName}-${c.cardName}-${c.serial}`} className="align-top hover:bg-white/5">
                <td className="px-4 py-4">
                  <div className="font-semibold text-zinc-50">
                    {c.setName} {c.cardName} {c.serial}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-4 font-semibold text-zinc-50">
                  {usd(c.costBasis)}
                </td>
                <td className="px-4 py-4">{c.qty}</td>
                <td className="px-4 py-4">
                  <PurchaseLotsDropdown lots={c.lots} />
                </td>
                <td className="px-4 py-4 font-semibold text-zinc-50">
                  {usd(c.marketValue)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-xs text-zinc-400">
        Next: add a detail page per investment (price history chart + admin thesis).
      </div>
    </InvestorShell>
  );
}

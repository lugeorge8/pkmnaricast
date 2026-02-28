import { InvestorShell } from "@/components/investor-shell";

export default async function HoldingsPage() {
  return (
    <InvestorShell title="Holdings">
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            <tr>
              <th className="px-4 py-3">Card</th>
              <th className="px-4 py-3">Lots</th>
              <th className="px-4 py-3">Cost basis</th>
              <th className="px-4 py-3">Market value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 bg-black/20 text-zinc-200">
            <tr>
              <td className="px-4 py-4">(coming soon)</td>
              <td className="px-4 py-4">—</td>
              <td className="px-4 py-4">—</td>
              <td className="px-4 py-4">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-sm text-zinc-300">
        This page will show: investor&apos;s current holding, cost basis, purchase
        lots (dropdown), and latest market value.
      </div>
    </InvestorShell>
  );
}

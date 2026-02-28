import Link from "next/link";

import { InvestorShell } from "@/components/investor-shell";
import { MiniSparkline, SectionTitle, StatCard } from "@/components/ui";

export default async function InvestorDashboardPage() {
  // Static demo content for now (no auth/data wiring).
  const demoTrend = [0.22, 0.28, 0.26, 0.34, 0.38, 0.44, 0.48, 0.53, 0.58];

  return (
    <InvestorShell title="Investor Dashboard">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Overview"
          subtitle="Example portal UI (data wiring later)."
        />
        <div className="flex flex-wrap gap-2">
          <Link
            href="/investor/investments"
            className="rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90"
          >
            View vetted cards
          </Link>
          <Link
            href="/investor/prices"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10"
          >
            Weekly price update
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <StatCard label="Portfolio value" value="$42,180" sub="demo" />
        <StatCard label="Cost basis" value="$36,900" sub="demo" />
        <StatCard label="Unrealized P/L" value="+$5,280" sub="demo" />
        <StatCard label="Positions" value="7" sub="demo" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
            8-week trend (demo)
          </div>
          <div className="mt-4">
            <MiniSparkline points={demoTrend} />
          </div>
          <div className="mt-3 text-xs text-zinc-400">
            Weekly points from TCGplayer/eBay (manual entry MVP).
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
            What you’ll see here
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-200">
            <li>Cards we’ve vetted + thesis notes</li>
            <li>Weekly price history by source</li>
            <li>Your holdings, lots, and cost basis</li>
            <li>Current market value (latest point)</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Next build steps
          </div>
          <div className="mt-3 text-sm leading-6 text-zinc-200">
            Add real auth, admin-only CSV upload, and a holdings calculator.
          </div>
          <div className="mt-4 text-xs text-zinc-400">
            For now, everything is UI-only.
          </div>
        </div>
      </div>
    </InvestorShell>
  );
}

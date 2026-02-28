import { InvestorShell } from "@/components/investor-shell";

export default async function InvestorDashboardPage() {
  // MVP: static dashboard. Next: query holdings + latest price points.
  return (
    <InvestorShell title="Investor Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Pipeline
          </div>
          <div className="mt-2 text-sm text-zinc-200">
            Weekly manual updates (CSV) from TCGplayer/eBay.
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Vetted List
          </div>
          <div className="mt-2 text-sm text-zinc-200">
            Cards the admin believes are mispriced (thesis + notes).
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Holdings
          </div>
          <div className="mt-2 text-sm text-zinc-200">
            Cost basis + lots + current market value (latest weekly point).
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm leading-6 text-zinc-300">
        Next build step: connect Supabase tables and show real holdings + charts.
      </div>
    </InvestorShell>
  );
}

import { InvestorShell } from "@/components/investor-shell";
import { Pill, SectionTitle } from "@/components/ui";

export default async function PriceUpdatesPage() {
  return (
    <InvestorShell title="Weekly Price Updates">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          title="Weekly price updates"
          subtitle="Manual entry MVP (UI scaffold)."
        />
        <div className="flex flex-wrap gap-2">
          <Pill>tcgplayer</Pill>
          <Pill>ebay</Pill>
          <Pill>weekly</Pill>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
          <div className="text-sm font-semibold text-zinc-50">CSV format</div>
          <div className="mt-2 text-sm text-zinc-300">
            One row per card per source per week.
          </div>
          <pre className="mt-4 overflow-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-zinc-200">
            {`date,card_slug,source,price
2026-02-28,shadowless-charizard-psa8,tcgplayer,1234.56
2026-02-28,shadowless-charizard-psa8,ebay,1199.00`}
          </pre>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
          <div className="text-sm font-semibold text-zinc-50">Upload (soon)</div>
          <div className="mt-2 text-sm leading-6 text-zinc-300">
            We&apos;ll add an upload widget that validates and previews rows before
            writing into the database.
          </div>

          <div className="mt-5 rounded-2xl border border-dashed border-white/15 bg-white/5 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Drop CSV here
            </div>
            <div className="mt-2 text-sm text-zinc-300">
              Not active yet — UI only.
            </div>
          </div>

          <div className="mt-5 text-xs text-zinc-400">
            Next: admin-only upload + parser + insert.
          </div>
        </div>
      </div>
    </InvestorShell>
  );
}

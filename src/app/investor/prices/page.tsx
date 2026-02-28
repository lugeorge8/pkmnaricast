import { InvestorShell } from "@/components/investor-shell";

export default async function PriceUpdatesPage() {
  return (
    <InvestorShell title="Weekly Price Updates">
      <div className="prose prose-invert max-w-none">
        <h2>Manual weekly entry (MVP)</h2>
        <p>
          For now, we&apos;ll upload weekly prices manually (CSV). Later we can
          automate pulls (TCGplayer/eBay APIs) if needed.
        </p>

        <h3>CSV format</h3>
        <pre>
          {`date,card_slug,source,price
2026-02-28,shadowless-charizard-psa8,tcgplayer,1234.56
2026-02-28,shadowless-charizard-psa8,ebay,1199.00`}
        </pre>

        <p>
          Next build step: implement an upload form + server action that parses
          CSV and writes to <code>price_points</code>.
        </p>
      </div>
    </InvestorShell>
  );
}

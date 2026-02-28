"use client";

import { useMemo, useState } from "react";

export type PurchaseLot = {
  id: string;
  purchasedAt: string;
  qty: number;
  unitCost: number;
  notes?: string;
};

function usd(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function PurchaseLotsDropdown({ lots }: { lots: PurchaseLot[] }) {
  const [selectedId, setSelectedId] = useState(lots[0]?.id ?? "");

  const selected = useMemo(
    () => lots.find((l) => l.id === selectedId) ?? lots[0],
    [lots, selectedId]
  );

  if (!lots.length) return <span className="text-zinc-400">—</span>;

  return (
    <div className="space-y-2">
      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-100 outline-none focus:border-teal-400/60"
      >
        {lots.map((l) => (
          <option key={l.id} value={l.id}>
            {l.purchasedAt} • {l.qty} @ {usd(l.unitCost)}
          </option>
        ))}
      </select>

      {selected ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <span className="text-zinc-400">Lot</span>
            <span className="font-semibold">{selected.id}</span>
            <span className="text-zinc-400">Qty</span>
            <span className="font-semibold">{selected.qty}</span>
            <span className="text-zinc-400">Unit</span>
            <span className="font-semibold">{usd(selected.unitCost)}</span>
          </div>
          {selected.notes ? (
            <div className="mt-2 text-zinc-300">{selected.notes}</div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

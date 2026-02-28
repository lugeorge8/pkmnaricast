import { type ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
      {children}
    </span>
  );
}

export function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-5 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50">
        {value}
      </div>
      {sub ? <div className="mt-1 text-xs text-zinc-400">{sub}</div> : null}
    </div>
  );
}

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="text-lg font-semibold tracking-tight text-zinc-50">
        {title}
      </div>
      {subtitle ? (
        <div className="mt-1 text-sm leading-6 text-zinc-400">{subtitle}</div>
      ) : null}
    </div>
  );
}

export function MiniSparkline({ points }: { points: number[] }) {
  // lightweight sparkline (no chart lib). Points are 0..1 scaled.
  const w = 160;
  const h = 40;
  const pad = 3;
  if (points.length < 2) return null;
  const xs = points.map((_, i) => pad + (i * (w - pad * 2)) / (points.length - 1));
  const ys = points.map((p) => pad + (1 - p) * (h - pad * 2));
  const d = xs
    .map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${ys[i]!.toFixed(1)}`)
    .join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <path d={d} fill="none" stroke="rgba(45,212,191,0.9)" strokeWidth="2" />
      <path
        d={`${d} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`}
        fill="rgba(45,212,191,0.12)"
      />
    </svg>
  );
}

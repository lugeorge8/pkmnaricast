import Link from "next/link";

export function InvestorShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-white/10 bg-zinc-950/40 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              pkmnaricast
            </div>
            <div className="mt-1 text-lg font-semibold tracking-tight">{title}</div>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            <Link
              href="/investor"
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10"
            >
              Dashboard
            </Link>
            <Link
              href="/investor/investments"
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10"
            >
              Vetted Cards
            </Link>
            <Link
              href="/investor/holdings"
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10"
            >
              Holdings
            </Link>
            <Link
              href="/investor/prices"
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10"
            >
              Price Updates
            </Link>

            <Link
              href="/"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-white/10"
            >
              Log out
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 py-10">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-6 shadow-sm">
          <div className="mt-1">{children}</div>
        </div>
      </main>
    </div>
  );
}

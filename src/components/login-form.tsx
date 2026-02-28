import Link from "next/link";

export function LoginForm() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-300">
        Login is a scaffold right now. Clicking below takes you to an example
        investor portal.
      </div>

      <Link
        href="/investor"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-teal-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:opacity-90"
      >
        Continue to investor portal
      </Link>

      <div className="text-xs text-zinc-400">
        (Auth + database wiring will be added later.)
      </div>
    </div>
  );
}

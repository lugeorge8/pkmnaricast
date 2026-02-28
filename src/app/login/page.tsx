import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-5 py-16">
        <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            pkmnaricast
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Investor Login
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Email + password login. If you don&apos;t have access yet, contact the
            admin.
          </p>

          <div className="mt-8">
            <LoginForm />
          </div>

          <div className="mt-8 text-xs text-zinc-400">
            Powered by Supabase Auth.
          </div>
        </div>
      </div>
    </div>
  );
}

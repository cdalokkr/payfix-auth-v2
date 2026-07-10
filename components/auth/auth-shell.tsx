import type { ReactNode } from 'react';
import Link from 'next/link';

export function AuthShell({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <main className="container-auth">
      <div className="auth-grid">
        <section className="hero-panel hidden lg:flex flex-col justify-between gap-10">
          <div className="relative z-10 flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-blue-200/90">PayFix</p>
              <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Premium authentication for modern SaaS teams.
              </h1>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 md:text-lg">
                Smooth login and registration flows, built for responsiveness, clarity, and premium onboarding.
              </p>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4">
              {[
                ['99.9%', 'Uptime'],
                ['1.5M', 'Sessions'],
                ['320+', 'Teams'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/8 p-4 backdrop-blur-md">
                  <div className="text-2xl font-semibold text-white">{value}</div>
                  <div className="mt-1 text-sm text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 rounded-[28px] border border-white/10 bg-slate-950/40 p-5 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Dashboard Preview</div>
                <div className="mt-1 text-lg font-semibold text-white">Attendance • Payroll • Tickets</div>
              </div>
              <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                Live
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-200">
              {['Attendance 96%', 'Payroll Ready', 'Open Leaves 14', 'Tickets 08'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center py-6 lg:py-0">
          <div className="glass-card w-full max-w-md rounded-[30px] p-6 sm:p-8 lg:p-10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-slate-500">PayFix</div>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
              </div>
              <Link
                href="/"
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Home
              </Link>
            </div>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

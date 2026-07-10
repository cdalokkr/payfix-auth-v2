import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container-auth flex items-center justify-center">
      <div className="glass-card w-full max-w-3xl rounded-[28px] p-8 md:p-12">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium text-slate-500">PayFix Auth UI v2</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Premium authentication UI for Next.js
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Responsive login, register, and onboarding screens with a polished SaaS look, soft glassmorphism, and room for premium motion.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Open Login
            </Link>
            <Link
              href="/register"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Open Register
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

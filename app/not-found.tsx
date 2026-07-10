import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-auth flex items-center justify-center">
      <div className="glass-card w-full max-w-lg rounded-[30px] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-700">
          404
        </div>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-2xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}

export default function Loading() {
  return (
    <main className="container-auth flex items-center justify-center">
      <div className="glass-card w-full max-w-md rounded-[30px] p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-20 rounded bg-slate-200" />
          <div className="h-8 w-40 rounded bg-slate-200" />
          <div className="h-4 w-full rounded bg-slate-200" />
          <div className="h-12 w-full rounded-2xl bg-slate-200" />
          <div className="h-12 w-full rounded-2xl bg-slate-200" />
          <div className="h-11 w-full rounded-2xl bg-slate-200" />
        </div>
      </div>
    </main>
  );
}

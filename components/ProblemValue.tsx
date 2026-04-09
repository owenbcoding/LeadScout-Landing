import { painPoints } from "@/components/site-content";

export function ProblemValue() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
            The problem
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Cold calling fails when your lead list is bad
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/8 bg-slate-950/70 p-6"
            >
              <p className="text-xl font-semibold text-white">{item.title}</p>
              <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

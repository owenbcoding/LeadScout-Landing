import { steps } from "@/components/site-content";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8 lg:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
          How it works
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          How LeadScout works
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-[1.5rem] border border-white/8 bg-slate-950/70 p-6"
            >
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
                Step {index + 1}
              </p>
              <p className="mt-4 text-xl font-semibold text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

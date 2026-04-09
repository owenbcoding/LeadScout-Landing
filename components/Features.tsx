import { featureCards } from "@/components/site-content";

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
            Solution
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Lead generation built for outbound sales
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            LeadScout helps you search an area, surface businesses, score
            opportunities, and keep track of outreach so you can spend more time
            selling.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featureCards.map((feature, index) => (
            <div
              key={feature}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-400/10 text-sm font-semibold text-emerald-300">
                0{index + 1}
              </div>
              <p className="mt-5 text-xl font-semibold text-white">{feature}</p>
              <p className="mt-3 leading-7 text-slate-300">
                Keep local prospecting, context, and next actions together so
                your team can move from research to outreach faster.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { targetUsers } from "@/components/site-content";

export function TargetUsers() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
            Social proof
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for teams doing outbound
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Be one of the first teams to try LeadScout and shape a workflow built
            around better local prospecting.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {targetUsers.map((user) => (
            <div
              key={user}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 px-6 py-7 text-lg font-medium text-white"
            >
              {user}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

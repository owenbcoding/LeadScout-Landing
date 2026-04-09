import Link from "next/link";

import { Button } from "@/components/ui/button";
import { appUrl } from "@/components/site-content";

function ProductPreview() {
  const businesses = [
    { name: "Northside Dental", score: 92, tag: "High fit" },
    { name: "Greenline HVAC", score: 84, tag: "Call today" },
    { name: "Bright Path Roofing", score: 76, tag: "Follow up" },
  ];

  return (
    <div
      id="demo"
      className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-slate-950/80 p-4 shadow-[0_0_80px_rgba(16,185,129,0.12)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.15),transparent_35%)]" />
      <div className="relative grid gap-4 lg:grid-cols-[1.25fr_0.9fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">Austin, Texas</p>
              <p className="text-xs text-slate-400">Local services, 15 mile radius</p>
            </div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              126 leads found
            </div>
          </div>
          <div className="grid min-h-[320px] grid-cols-6 gap-2 rounded-[1.25rem] bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px] p-4">
            <div className="col-span-4 rounded-[1.25rem] border border-white/8 bg-slate-950/60 p-4">
              <div className="grid h-full grid-cols-3 gap-3">
                <div className="rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(74,222,128,0.75)]" />
                <div className="rounded-full bg-emerald-300/80 shadow-[0_0_18px_rgba(74,222,128,0.45)]" />
                <div className="rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(34,211,238,0.35)]" />
                <div className="rounded-full bg-emerald-300/90 shadow-[0_0_22px_rgba(74,222,128,0.55)]" />
                <div className="rounded-full bg-slate-600" />
                <div className="rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.6)]" />
                <div className="rounded-full bg-cyan-300/70 shadow-[0_0_16px_rgba(34,211,238,0.35)]" />
                <div className="rounded-full bg-emerald-300/80 shadow-[0_0_18px_rgba(74,222,128,0.45)]" />
                <div className="rounded-full bg-slate-600" />
              </div>
            </div>
            <div className="col-span-2 rounded-[1.25rem] border border-white/8 bg-slate-900/90 p-4">
              <p className="text-sm font-semibold text-white">Lead score breakdown</p>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs text-slate-400">
                    <span>Nearby fit</span>
                    <span>91%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[91%] rounded-full bg-emerald-400" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-slate-400">
                    <span>Website quality</span>
                    <span>76%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[76%] rounded-full bg-cyan-300" />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-slate-400">
                    <span>Outbound readiness</span>
                    <span>88%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[88%] rounded-full bg-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">Priority leads</p>
              <p className="text-xs text-slate-400">Best businesses to call first</p>
            </div>
            <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
              Live queue
            </div>
          </div>
          <div className="space-y-3">
            {businesses.map((business) => (
              <div
                key={business.name}
                className="rounded-[1.25rem] border border-white/8 bg-slate-950/70 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{business.name}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Website found, phone verified, strong local presence.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-emerald-400/10 px-3 py-2 text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                      Score
                    </p>
                    <p className="text-lg font-semibold text-white">{business.score}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span>{business.tag}</span>
                  <span>Export ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_45%)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-28">
        <div className="relative z-10 flex max-w-2xl flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
            Launching soon for outbound teams
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Find local businesses worth calling
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            LeadScout helps you discover nearby businesses, prioritize the best
            leads, and organize your cold outreach in one place.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-6 text-base font-semibold">
              <Link href={appUrl}>Join Waitlist</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10"
            >
              <Link href="/#demo">See Demo</Link>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

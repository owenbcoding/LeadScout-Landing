import Link from "next/link";

import { appUrl } from "@/components/site-content";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(15,23,42,0.85))] px-8 py-12 text-center shadow-[0_0_80px_rgba(16,185,129,0.08)] lg:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
          Final CTA
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Start building a better cold calling pipeline
        </h2>
        <p className="mt-4 text-lg text-slate-300">Launching soon on web</p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="rounded-full px-6 text-base font-semibold">
            <Link href={appUrl}>Get Early Access</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

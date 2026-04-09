import Link from "next/link";

import { pricingTiers, appUrl } from "@/components/site-content";
import { Button } from "@/components/ui/button";

type PricingPreviewProps = {
  standalone?: boolean;
};

export function PricingPreview({ standalone = false }: PricingPreviewProps) {
  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
              Pricing
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Simple pricing
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Pricing coming soon. Join the waitlist to get early access and be
              first to hear when plans go live.
            </p>
          </div>
          {!standalone ? (
            <Button asChild size="lg" className="rounded-full px-6 font-semibold">
              <Link href={appUrl}>Join the waitlist</Link>
            </Button>
          ) : null}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className="rounded-[1.5rem] border border-white/8 bg-slate-950/70 p-6"
            >
              <p className="text-xl font-semibold text-white">{tier.name}</p>
              <p className="mt-3 leading-7 text-slate-300">{tier.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

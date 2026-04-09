import type { Metadata } from "next";

import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PricingPreview } from "@/components/PricingPreview";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Preview LeadScout pricing plans and join the waitlist for early access.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main className="pb-10 pt-10">
        <PricingPreview standalone />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

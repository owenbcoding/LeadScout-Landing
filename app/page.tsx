import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PricingPreview } from "@/components/PricingPreview";
import { ProblemValue } from "@/components/ProblemValue";
import { TargetUsers } from "@/components/TargetUsers";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main className="flex flex-col pb-10">
        <Hero />
        <ProblemValue />
        <Features />
        <HowItWorks />
        <TargetUsers />
        <PricingPreview />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

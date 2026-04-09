import type { Metadata } from "next";

import { CTA } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about LeadScout and early access.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <main className="pb-10 pt-10">
        <Faq standalone />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

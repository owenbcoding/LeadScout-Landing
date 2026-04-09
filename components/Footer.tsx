import Link from "next/link";

import { appUrl, loginUrl } from "@/components/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>LeadScout is the sales front door for better local outbound.</p>
        <div className="flex gap-6">
          <Link href={appUrl} className="transition hover:text-white">
            Get access
          </Link>
          <Link href={loginUrl} className="transition hover:text-white">
            Login
          </Link>
          <Link href="/faq" className="transition hover:text-white">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}

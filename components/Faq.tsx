import { faqs } from "@/components/site-content";

type FaqProps = {
  standalone?: boolean;
};

export function Faq({ standalone = false }: FaqProps) {
  return (
    <section id="faq" className="mx-auto w-full max-w-5xl px-6 py-10 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8 lg:p-10">
        <div className={standalone ? "max-w-3xl" : undefined}>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-300">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-white/8 bg-slate-950/70 px-6 py-5"
            >
              <summary className="cursor-pointer list-none text-lg font-medium text-white">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-emerald-300 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-7 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

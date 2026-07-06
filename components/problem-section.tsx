import { Briefcase, Flame, Receipt } from "lucide-react";

const problems = [
  {
    icon: Briefcase,
    title: "The Middle Management Trap",
    description:
      "You didn't start using AI to become a middle manager for silicon. Stop writing handoff docs just to keep agents aligned.",
  },
  {
    icon: Flame,
    title: "Confident Wrongness",
    description:
      "End the cycle of agents confidently handing you a burning deploy.",
  },
  {
    icon: Receipt,
    title: "The Verification Tax",
    description:
      "Stop burning $200+/mo in API credits just to spend 40% of your day reviewing broken diffs.",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          &ldquo;Done&rdquo; isn&apos;t a verifiable state.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glow-border group rounded-xl bg-zinc-900/40 p-8 transition-all duration-300"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-200">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2, Monitor, Shield, Terminal } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Visual Diffs for UI",
    description:
      "Force a screenshot comparison before accepting frontend code.",
  },
  {
    icon: Terminal,
    title: "Terminal Proof for Backend",
    description:
      "Require cURL or status code validation before the API commit.",
  },
  {
    icon: Shield,
    title: "Silent Background Gate",
    description:
      'StrictAgent absorbs complex verification logic so you get a simple "Go / No-Go".',
  },
] as const;

export function SolutionSection() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium tracking-widest text-zinc-500 uppercase">
          The &ldquo;Nah, prove it&rdquo; Gate
        </p>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Proof before progress.
        </h2>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Terminal / diff mockup */}
          <div className="glow-border overflow-hidden rounded-xl bg-zinc-950 font-mono text-sm">
            <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="h-3 w-3 rounded-full bg-zinc-700" />
              <span className="ml-2 text-xs text-zinc-500">
                strictagent — verification gate
              </span>
            </div>

            <div className="space-y-4 p-5">
              <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <p className="font-medium text-emerald-400">
                        Task Complete!
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Agent marked PR #847 as ready for merge.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="shrink-0 rounded-md border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-400 shadow-[0_0_20px_-4px_rgba(249,115,22,0.5)] transition-all hover:border-orange-400 hover:bg-orange-500/20 hover:shadow-[0_0_28px_-4px_rgba(249,115,22,0.6)]"
                  >
                    Nah, prove it.
                  </button>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <p className="text-zinc-600">
                  <span className="text-red-400/80">−</span>{" "}
                  <span className="text-zinc-600 line-through">
                    tests skipped — &quot;looks good to me&quot;
                  </span>
                </p>
                <p className="text-zinc-600">
                  <span className="text-emerald-400/80">+</span>{" "}
                  <span className="text-zinc-400">
                    screenshot diff: 0px delta ✓
                  </span>
                </p>
                <p className="text-zinc-600">
                  <span className="text-emerald-400/80">+</span>{" "}
                  <span className="text-zinc-400">
                    curl /api/health → 200 OK ✓
                  </span>
                </p>
                <p className="text-zinc-600">
                  <span className="text-emerald-400/80">+</span>{" "}
                  <span className="text-zinc-400">
                    e2e suite: 14/14 passed ✓
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2 border-t border-zinc-800/80 pt-4">
                <span className="text-zinc-600">$</span>
                <span className="text-zinc-500">
                  awaiting verification...
                  <span className="animate-pulse">▌</span>
                </span>
              </div>
            </div>
          </div>

          {/* Feature list */}
          <ul className="space-y-8">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="group flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

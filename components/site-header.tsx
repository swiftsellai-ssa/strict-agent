import { Shield } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900">
            <Shield className="h-3.5 w-3.5 text-zinc-300" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            StrictAgent
          </span>
        </div>
        <span className="hidden text-xs text-zinc-600 sm:block">
          Verification infrastructure for AI agents
        </span>
      </div>
    </header>
  );
}

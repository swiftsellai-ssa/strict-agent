"use client";

import { joinWaitlist } from "@/app/actions/waitlist";
import { ArrowRight, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const result = await joinWaitlist(email);

    setStatus(result.ok ? "success" : "error");
    setMessage(result.message);
  }

  const isSuccess = status === "success";

  return (
    <section className="relative flex flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-zinc-800/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-6 text-sm font-medium tracking-widest text-zinc-500 uppercase">
          Stop babysitting your AI.
        </p>

        <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.08]">
          Autonomy without verification is just faster chaos.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          AI coding agents are lying to you. Stop paying the &ldquo;verification
          tax&rdquo; and chasing silent bugs. Force your agents to prove their
          work before they mark a task as done.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 flex w-full max-w-md flex-col gap-3 sm:max-w-lg sm:flex-row"
        >
          <input
            type="email"
            required
            disabled={status === "loading" || isSuccess}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 text-sm text-white placeholder:text-zinc-600 transition-colors outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading" || isSuccess}
            className="group flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting
              </>
            ) : isSuccess ? (
              "You're on the list"
            ) : (
              <>
                Request Early Access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-sm ${status === "error" ? "text-red-400" : "text-emerald-400"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

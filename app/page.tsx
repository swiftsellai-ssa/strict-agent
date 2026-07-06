import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionSection } from "@/components/solution-section";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 text-white">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
      </main>
      <SiteFooter />
    </div>
  );
}

import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Education } from "@/components/main/education";
import { Achievements } from "@/components/main/achievements";
import { Certifications } from "@/components/main/certifications";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
      </div>
    </main>
  );
}

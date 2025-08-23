import Experience from "@/components/sections/Home/Experience";
import Hero from "@/components/sections/Home/Hero";
import Skills from "@/components/sections/Home/Skills";
import Work from "@/components/sections/Home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Work />
      <Experience />
      <div className="min-h-screen" />
    </>
  );
}

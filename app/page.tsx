import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import { BlogSection } from "@/components/BlogSection";
import { Reveal } from "@/components/Reveal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen px-8 md:px-4 pt-8  relative ">
      <Header />
      <Reveal className="" stagger={0.1}>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
      </Reveal>
      <Footer />
    </main>
  );
}

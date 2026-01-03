import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Writeups } from "@/components/Writeups";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <BackToTop />
      <main className="max-w-[720px] mx-auto px-6 pt-36 pb-8">
        <Hero />
        <Experience />
        <Certifications />
        <Writeups />
        <Education />
        <Footer />
      </main>
    </div>
  );
};

export default Index;

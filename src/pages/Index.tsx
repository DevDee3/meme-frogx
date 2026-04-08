import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowToBuySection from "@/components/HowToBuySection";
import SocialsSection from "@/components/SocialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowToBuySection />
      <SocialsSection />
      <Footer />
    </div>
  );
};

export default Index;

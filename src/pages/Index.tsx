import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowToBuySection from "@/components/HowToBuySection";
import SocialsSection from "@/components/SocialsSection";
import Footer from "@/components/Footer";
import swampBg from "@/assets/swamp-bg.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/* Site-wide swamp background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${swampBg})` }}
      />
      <div className="fixed inset-0 -z-10 bg-background/75" />

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


import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FeaturesSection from "@/components/FeaturesSection";
import BuilderWall from "@/components/BuilderWall";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Set the document body to dark mode
    document.body.classList.add('bg-space-dark');
    
    return () => {
      document.body.classList.remove('bg-space-dark');
    };
  }, []);

  return (
    <div className="min-h-screen bg-space-dark text-white">
      {/* Background stars effect */}
      <div className="fixed inset-0 z-0 stars"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <MissionSection />
        <FeaturesSection />
        <BuilderWall />
        <CommunitySection />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;

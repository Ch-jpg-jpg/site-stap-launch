import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <HowItWorks />
        <Features />
        <TargetAudience />
        <Testimonials />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

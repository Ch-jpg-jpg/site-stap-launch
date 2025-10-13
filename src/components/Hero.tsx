import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center gradient-mesh pt-20 pb-8 overflow-hidden">
      {/* Background decoration - with lower z-index */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up relative z-20">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Binnen 1 week een{" "}
                <span className="text-primary font-bold">
                  professionele website
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                Voor slechts €10 per maand. Geen gedoe, geen technische kennis nodig.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contact")}
                className="group"
              >
                Start vandaag voor €10/maand
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("#portfolio")}
              >
                Bekijk voorbeelden
              </Button>
            </div>

            {/* Quick benefits */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {[
                "Binnen 1 week online",
                "Inclusief hosting",
                "Stop wanneer je wilt",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative animate-fade-in lg:-mt-12">
            <div className="relative animate-float">
              <img
                src={heroMockup}
                alt="Professionele website mockup"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

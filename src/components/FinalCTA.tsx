import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Binnen 1 week online",
    "Inclusief domein & hosting",
    "Stop wanneer je wilt",
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Content */}
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Klaar om online te gaan?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 lg:mb-10 text-balance">
            Start vandaag nog en groei met een professionele website
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Button
              variant="accent"
              size="xl"
              onClick={scrollToContact}
              className="group bg-white text-primary hover:bg-white/90 shadow-2xl"
            >
              Start nu voor €10 per maand
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">Heb je vragen? Neem direct contact op!</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
              <a
                href="tel:+31612345678"
                className="hover:text-white/80 transition-colors font-medium"
              >
                📞 +31 6 12 34 56 78
              </a>
              <span className="hidden sm:inline text-white/40">|</span>
              <a
                href="mailto:info@sitestap.nl"
                className="hover:text-white/80 transition-colors font-medium"
              >
                ✉️ info@sitestap.nl
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

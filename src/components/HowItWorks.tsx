import { FileText, Upload, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Abonnement starten",
      description:
        "Klik op de knop, vul een bedrijf en email in, start je abonnement. Binnen enkele minuten ben je klaar.",
    },
    {
      icon: Upload,
      number: "02",
      title: "Foto's versturen (optioneel)",
      description:
        "Heb je foto's? Stuur ze naar ons! We zetten ze op je website. Geen foto's? Geen probleem, we regelen het.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Binnen een week live",
      description:
        "We bouwen je website, regelen het domein en maken alles live. Jij hoeft niets te doen.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 gradient-mesh">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Hoe werkt het?
          </h2>
          <p className="text-lg text-muted-foreground">
            In 3 eenvoudige stappen naar jouw professionele website
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row gap-8 items-center animate-fade-in-up ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    Stap {step.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full gradient-primary flex items-center justify-center shadow-glow">
                    <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>

                {/* Spacer for layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

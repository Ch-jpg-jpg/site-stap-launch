import { DollarSign, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Onverslaanbaar goedkoop",
      description:
        "Voor €10 per maand krijg je een volledig werkende website. Geen verborgen kosten, geen verrassingen.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Zap,
      title: "Supersimpel",
      description:
        "Wij regelen alles voor je, van hosting tot snelheid. Jij hoeft alleen maar je content aan te leveren.",
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: Users,
      title: "Geen technische kennis nodig",
      description:
        "Geef ons de inhoud, wij bouwen de website. Zo simpel is het. Perfect voor ondernemers die zich willen focussen op hun business.",
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <section id="diensten" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Waarom SiteStap?
          </h2>
          <p className="text-lg text-muted-foreground">
            Wij maken het bouwen van een professionele website ontzettend simpel en betaalbaar
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

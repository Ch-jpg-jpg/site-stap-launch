import { Scissors, UtensilsCrossed, Briefcase, Store, Rocket, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TargetAudience = () => {
  const audiences = [
    { icon: Scissors, label: "Kappers" },
    { icon: UtensilsCrossed, label: "Restaurants" },
    { icon: Briefcase, label: "ZZP'ers" },
    { icon: Store, label: "Lokale winkels" },
    { icon: Rocket, label: "Startups" },
    { icon: GraduationCap, label: "Coaches" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Perfect voor
          </h2>
          <p className="text-lg text-muted-foreground">
            Of je nu een kapsalon, restaurant of startup hebt - wij maken voor iedereen een website
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {audiences.map((audience, index) => (
            <Card
              key={audience.label}
              className="group hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-semibold text-foreground">{audience.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

import { Globe, Palette, FileText, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Domein + Hosting",
      description:
        "Zowel eigen als nieuw domein mogelijk, hosting op onze razendsnelle servers",
    },
    {
      icon: Palette,
      title: "Professioneel Design",
      description:
        "Een modern website design, volledig passend bij jouw bedrijf",
    },
    {
      icon: FileText,
      title: "AI-geschreven teksten",
      description:
        "Professionele SEO geoptimaliseerde AI geschreven teksten",
    },
    {
      icon: Wrench,
      title: "Onderhoud & Updates",
      description:
        "Wij houden je website up to date, veilig en onderhouden",
    },
  ];

  return (
    <section id="prijzen" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Wat krijg je?
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles wat je nodig hebt voor een succesvolle online aanwezigheid
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 animate-fade-in-up bg-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

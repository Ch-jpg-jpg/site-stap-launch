import { X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Comparison = () => {
  const comparisons = [
    {
      feature: "Prijs",
      traditional: "€2000+ eenmalig",
      sitestap: "€10/maand",
    },
    {
      feature: "Levertijd",
      traditional: "4-8 weken",
      sitestap: "1 week",
    },
    {
      feature: "Onderhoud",
      traditional: "Extra kosten",
      sitestap: "Inbegrepen",
    },
    {
      feature: "Hosting",
      traditional: "Zelf regelen",
      sitestap: "Inbegrepen",
    },
    {
      feature: "Updates",
      traditional: "€50-150 per update",
      sitestap: "Gratis",
    },
    {
      feature: "Support",
      traditional: "Beperkt",
      sitestap: "Inclusief",
    },
  ];

  return (
    <section className="py-16 lg:py-24 gradient-mesh">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Traditionele webdesigner vs SiteStap
          </h2>
          <p className="text-lg text-muted-foreground">
            Het verschil is duidelijk
          </p>
        </div>

        {/* Comparison Card */}
        <Card className="max-w-4xl mx-auto overflow-hidden animate-fade-in-up">
          <CardContent className="p-0">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/50 border-b border-border">
              <div className="text-sm font-semibold text-muted-foreground">
                {/* Empty for feature column */}
              </div>
              <div className="text-center">
                <div className="font-bold text-foreground">Traditioneel</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-primary">
                  SiteStap
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 gap-4 p-6 items-center ${
                  index !== comparisons.length - 1 ? "border-b border-border" : ""
                } hover:bg-secondary/20 transition-colors`}
              >
                <div className="font-semibold text-foreground">{item.feature}</div>
                <div className="text-center flex items-center justify-center gap-2 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <span className="text-sm">{item.traditional}</span>
                </div>
                <div className="text-center flex items-center justify-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-sm">{item.sitestap}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Comparison;

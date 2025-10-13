import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lisa van den Berg",
      role: "Eigenaar, Kapsalon Bella",
      rating: 5,
      quote:
        "Binnen een week had ik een prachtige website. Mijn klanten kunnen nu online afspraken maken en ik krijg veel meer nieuwe klanten binnen!",
      image: "👩",
    },
    {
      name: "Jan Smits",
      role: "Eigenaar, Restaurant De Smaak",
      rating: 5,
      quote:
        "Voor €10 per maand krijg je echt een top website. Het menu staat online, klanten kunnen reserveren, en het ziet er professioneel uit. Aanrader!",
      image: "👨",
    },
    {
      name: "Sophie Janssen",
      role: "ZZP'er Marketing",
      rating: 5,
      quote:
        "Als ZZP'er wilde ik snel online staan zonder gedoe. SiteStap heeft perfect geleverd. Mijn portfolio staat er mooi op en ik krijg nu veel meer aanvragen!",
      image: "👩‍💼",
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Wat zeggen onze klanten?
          </h2>
          <p className="text-lg text-muted-foreground">
            Honderden tevreden ondernemers gingen je voor
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

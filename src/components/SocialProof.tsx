import { useEffect, useState } from "react";
import { Shield, Lock, Server } from "lucide-react";

const SocialProof = () => {
  const [count, setCount] = useState(0);
  const targetCount = 250;

  useEffect(() => {
    const duration = 2000;
    const increment = targetCount / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const trustBadges = [
    {
      icon: Lock,
      label: "SSL Beveiligd",
    },
    {
      icon: Shield,
      label: "GDPR Compliant",
    },
    {
      icon: Server,
      label: "Nederlandse hosting",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Counter */}
          <div className="text-center lg:text-left relative z-10">
            <div className="flex items-baseline justify-center lg:justify-start gap-2">
              <span className="text-5xl lg:text-6xl font-bold text-primary">
                {count}+
              </span>
            </div>
            <p className="text-lg text-muted-foreground mt-2">
              Websites succesvol gemaakt
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

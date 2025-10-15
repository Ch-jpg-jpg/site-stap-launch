import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Diensten", href: "#diensten" },
    { label: "Prijzen", href: "#prijzen" },
    { label: "Ervaringen", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
<a href="#" className="flex items-center space-x-2">
  <img
    src="/assets/logo.svg"
    alt="SiteStap logo"
    className="h-10 w-auto object-contain"
  />
  <span className="font-bold text-xl text-gray-900">SiteStap</span>
</a>
            <span className="font-bold text-xl text-foreground">SiteStap</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="default" asChild>
              <a href="tel:+31612345678" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Bel ons</span>
              </a>
            </Button>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Start nu
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-fade-in">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="space-y-2 pt-4">
              <Button
                variant="outline"
                size="default"
                className="w-full"
                asChild
              >
                <a
                  href="tel:+31612345678"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Bel ons</span>
                </a>
              </Button>
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={() => scrollToSection("#contact")}
              >
                Start nu
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;

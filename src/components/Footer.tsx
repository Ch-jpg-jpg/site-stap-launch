import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    {
      title: "Navigatie",
      links: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Diensten", href: "#diensten" },
        { label: "Prijzen", href: "#prijzen" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Informatie",
      links: [
        { label: "Over ons", href: "#" },
        { label: "Veelgestelde vragen", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Algemene Voorwaarden", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "+31 6 12 34 56 78", href: "tel:+31612345678" },
        { label: "info@sitestap.nl", href: "mailto:info@sitestap.nl" },
        { label: "Amsterdam, Nederland", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-foreground">SiteStap</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professionele websites voor €10 per maand. Binnen 1 week online, zonder gedoe.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              © {new Date().getFullYear()} SiteStap. Alle rechten voorbehouden.
            </div>
            <div className="text-center md:text-right">
              KvK: 12345678 | BTW: NL123456789B01
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

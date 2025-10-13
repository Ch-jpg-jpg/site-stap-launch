import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Kan ik mijn eigen domein gebruiken?",
      answer:
        "Ja, je kunt zowel je eigen domein gebruiken als een nieuw domein via ons aanschaffen. Wij regelen alles voor je, van de technische configuratie tot de koppeling.",
    },
    {
      question: "Wat gebeurt er als ik stop met het abonnement?",
      answer:
        "Je kunt altijd stoppen wanneer je wilt. Na opzegging blijft je website nog 30 dagen online, zodat je eventueel kunt overstappen naar een andere partij.",
    },
    {
      question: "Hoeveel pagina's krijg ik?",
      answer:
        "Standaard bouwen we een website met 3-5 pagina's (bijv. home, over, diensten, contact). Heb je meer pagina's nodig? Dat bespreken we vooraf en kan tegen een kleine meerprijs.",
    },
    {
      question: "Kan ik zelf aanpassingen doen?",
      answer:
        "Kleine tekstuele aanpassingen kun je gewoon naar ons mailen en we passen het aan. Voor grotere wijzigingen kun je contact met ons opnemen en bespreken we de mogelijkheden.",
    },
    {
      question: "Is de website geoptimaliseerd voor mobiel?",
      answer:
        "Ja! Alle websites die wij maken zijn volledig responsive en geoptimaliseerd voor mobiel, tablet en desktop. Ook zorgen we voor snelle laadtijden en SEO-optimalisatie.",
    },
    {
      question: "Hoe werkt de betaling?",
      answer:
        "Je betaalt eenvoudig €10 per maand via automatische incasso. De eerste maand kun je ook via iDEAL betalen. Er zijn geen verborgen kosten of verrassingen.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-muted-foreground">
            Alles wat je moet weten over SiteStap
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border-2 rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

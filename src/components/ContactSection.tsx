import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "amjad.qano3@gmail.com",
      icon: "✉️",
      action: () => window.open("mailto:amjad.qano3@gmail.com")
    },
    {
      type: "Phone",
      value: "+970 594 835475",
      icon: "📞",
      action: () => window.open("tel:+970594835475")
    },
    {
      type: "Location",
      value: "Gaza, Palestine",
      icon: "📍",
      action: () => {}
    }
  ];

  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Contact Me</h2>
          <h3 className="text-2xl font-semibold text-primary-foreground/90 mb-4">Get In Touch</h3>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <div 
                key={index}
                className="bg-card/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-card/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">
                  {contact.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary-foreground mb-2">
                  {contact.type}
                </h4>
                <p className="text-primary-foreground/80 mb-4">
                  {contact.value}
                </p>
                {contact.type !== "Location" && (
                  <Button 
                    onClick={contact.action}
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Contact
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="section-title block">
              Innovative Front-to-Back-End Developer
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Full Stack Architect of the Digital Universe
          </h2>
          
          {/* Tech Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <span className="text-accent">&lt;/&gt;</span>
              <span>Frontend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <span className="text-accent">⚙️</span>
              <span>Backend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
              <span className="text-accent">🚀</span>
              <span>DevOps</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Building scalable applications that orbit beyond conventional limits.<br />
            Specializing in React, Node.js, and cloud-native constellations.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full"
            >
              View My Galaxy (Projects)
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg rounded-full"
            >
              Beam Me a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
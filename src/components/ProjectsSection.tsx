import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React.js, ASP.NET, and SQL Server",
      technologies: ["React.js", "ASP.NET", "SQL Server", "CSS"],
      link: "#",
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "Modern task management application with real-time updates",
      technologies: ["React.js", "Node.js", "JavaScript"],
      link: "#",
      image: "📋"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis",
      technologies: ["React.js", "C#", "SQL Server"],
      link: "#",
      image: "📊"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing development skills",
      technologies: ["React.js", "HTML", "CSS", "JavaScript"],
      link: "#",
      image: "💼"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects that showcase my development skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  onClick={() => window.open(project.link, '_blank')}
                  className="w-full bg-hero-gradient hover:opacity-90 text-primary-foreground"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", color: "skill-js", icon: "⚡" },
    { name: "React.js", color: "skill-react", icon: "⚛️" },
    { name: "ASP.NET", color: "skill-dotnet", icon: "🔷" },
    { name: "HTML & CSS", color: "skill-html", icon: "🎨" },
    { name: "Node.js", color: "skill-node", icon: "🟢" },
    { name: "SQL Server", color: "skill-sql", icon: "💾" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-card-foreground text-sm">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
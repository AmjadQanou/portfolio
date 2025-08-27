const SkillsSection = () => {
  const skills = [
    { name: "React.js", level: 95, color: "hsl(var(--skill-react))" },
    { name: "JavaScript", level: 90, color: "hsl(var(--skill-js))" },
    { name: "Asp.net", level: 90, color: "hsl(var(--skill-dotnet))" },
    { name: "Node.js", level: 80, color: "hsl(var(--skill-node))" },
    { name: "UI/UX Design", level: 75, color: "hsl(var(--skill-ui))" },
    { name: "Web Api", level: 85, color: "hsl(var(--skill-api))" },
    { name: "HTML/CSS", level: 95, color: "hsl(var(--skill-html))" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title">My Skills</h2>
          <div className="section-underline"></div>
        </div>
        
        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress rounded-full"
                    style={{ 
                      backgroundColor: skill.color,
                      width: `${skill.level}%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
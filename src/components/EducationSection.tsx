const EducationSection = () => {
  const education = [
    {
      degree: "Diploma in Advanced Programming",
      institution: "GTC University",
      period: "2022 - 2024",
      description: "Learned to code in different programming languages including JavaScript, C#, and Asp.net.",
      side: "left"
    },
    {
      degree: "Diploma in Data analysis",
      institution: "Data Camp Academy",
      period: "2025",
      description: "Completed an intensive diploma focused on data analysis techniques, including data cleaning, visualization, statistical methods.",
      side: "right"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title">My Education</h2>
          <div className="section-underline"></div>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
          
          <div className="space-y-16">
            {education.map((edu, index) => (
              <div key={index} className={`flex items-center ${edu.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-card rounded-full"></div>
                </div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${edu.side === 'left' ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-card p-6 rounded-xl shadow-card-hover border border-border">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      {edu.institution}
                    </h4>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {edu.period}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
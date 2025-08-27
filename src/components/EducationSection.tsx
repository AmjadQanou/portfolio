const EducationSection = () => {
  const education = [
    {
      degree: "Diploma in Advanced Programming",
      institution: "GTC University",
      period: "2022 - 2024",
      description: "Learned to code in different programming languages including JavaScript, C#, and ASP.NET."
    },
    {
      degree: "Diploma in Data Analysis",
      institution: "Data Camp Academy",
      period: "2025",
      description: "Completed an intensive diploma focused on data analysis techniques, including data cleaning, visualization, and statistical methods."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my technical expertise
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary">
                      {edu.institution}
                    </h4>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
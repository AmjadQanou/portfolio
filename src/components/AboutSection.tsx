import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="section-title">About Me</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left side - About text */}
          <div className="flex-1 space-y-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Who Am I?</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate full-stack developer with expertise in C#, ASP.NET, React.js, Node.js, and SQL Server. 
                I specialize in building efficient, scalable web applications that solve real-world problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong background in data analysis, I bring a detail-oriented and analytical approach to every project, 
                ensuring that solutions are not only functional but also optimized for performance and user experience.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy combining clean code with modern technologies to create seamless digital experiences that help businesses grow.
              </p>
            </div>
            
            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div>
                <h4 className="font-semibold mb-2">
                  <span className="text-primary">Name:</span>
                </h4>
                <p className="text-muted-foreground">Amjad Qanou</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <span className="text-primary">Origin:</span>
                </h4>
                <p className="text-muted-foreground">Gaza, Palestine</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <span className="text-primary">Email:</span>
                </h4>
                <p className="text-muted-foreground">amjad.qano3@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <span className="text-primary">Languages:</span>
                </h4>
                <p className="text-muted-foreground">JavaScript, C#, Asp.net, React.js, Node.js</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-card-hover border-2 border-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="Amjad Qanou - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
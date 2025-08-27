import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - About text */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">About Me</h2>
              <h3 className="text-2xl font-semibold text-primary">Who Am I?</h3>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Name:</h4>
                <p className="text-muted-foreground">Amjad Qanou</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Origin:</h4>
                <p className="text-muted-foreground">Gaza, Palestine</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email:</h4>
                <p className="text-muted-foreground">amjad.qano3@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Languages:</h4>
                <p className="text-muted-foreground">JavaScript, C#, ASP.NET, React.js, Node.js</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-card-hover">
                <img 
                  src={profilePhoto} 
                  alt="Amjad Qanou - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-hero-gradient opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
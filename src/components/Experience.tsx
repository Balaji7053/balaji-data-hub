const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Deloitte South Asia LLP",
      period: "April 2025 – Present",
      description: "Leading data warehouse development and cloud migration projects.",
      technologies: ["Snowflake", "DBT", "SQL", "AWS", "Python"],
      current: true
    },
    {
      title: "Data Engineer",
      company: "Applitech Solutions Pvt. Ltd.",
      period: "Feb 2023 – April 2025",
      description: "Developed ETL workflows and data lake solutions for enterprise clients.",
      technologies: ["Snowflake", "Informatica", "ETL", "Data Modeling"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              My professional journey in data engineering and cloud technologies
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.current ? 'bg-primary glow-effect' : 'bg-accent'
                  }`}>
                    <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-primary' : 'bg-accent'}`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card-glass p-8 rounded-xl hover-glow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold gradient-text">{exp.title}</h3>
                        <h4 className="text-lg text-foreground/80">{exp.company}</h4>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-background/50 text-sm rounded-full border border-primary/20 text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
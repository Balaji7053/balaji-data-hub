const Portfolio = () => {
  const projects = [
    {
      title: "Pfizer Data Lake (eCPU)",
      description: "Comprehensive ETL workflows in Snowflake, integrating data lake from AWS S3 with DBT transformations, optimized for advanced analytics in pharmaceutical research.",
      technologies: ["Snowflake", "DBT", "AWS S3", "ETL", "Data Lake", "Analytics"],
      category: "Data Lake",
      industry: "Life Sciences",
      highlights: [
        "Reduced data processing time by 60%",
        "Integrated 50+ data sources",
        "Automated reporting workflows",
        "Implemented data quality checks"
      ]
    },
    {
      title: "Banking Data Warehouse",
      description: "Designed and implemented a scalable data warehouse solution for financial reporting and compliance, handling high-volume transaction data with real-time analytics capabilities.",
      technologies: ["Snowflake", "Informatica", "SQL", "Power BI", "Compliance"],
      category: "Data Warehouse",
      industry: "Financial Services",
      highlights: [
        "Processed 1M+ daily transactions",
        "Regulatory compliance ready",
        "Real-time dashboard integration",
        "Cost optimization of 40%"
      ]
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Led cloud migration project from on-premises infrastructure to AWS, implementing modern data engineering practices with improved performance and cost efficiency.",
      technologies: ["AWS", "Python", "Airflow", "Migration", "Optimization"],
      category: "Cloud Migration",
      industry: "Enterprise",
      highlights: [
        "Migrated 500+ GB of data",
        "Zero downtime migration",
        "Improved query performance by 3x",
        "Reduced infrastructure costs"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Real-world data engineering solutions that drive business value
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="card-glass p-8 rounded-xl hover-glow">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold gradient-text mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                            {project.category}
                          </span>
                          <span className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                            {project.industry}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground/90">Key Achievements:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-foreground/80">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-foreground/90">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-background/50 text-sm rounded-full border border-primary/20 text-foreground/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 bg-background/30 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl mb-2">📊</div>
                        <p className="text-sm text-muted-foreground">
                          Detailed case study available upon request
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card-glass p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Want to See More?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects. Let's discuss how I can help with your data challenges.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium hover-glow transition-all"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
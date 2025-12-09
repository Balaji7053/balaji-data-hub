const Services = () => {
  const services = [
    {
      icon: "🏗️",
      title: "Cloud Data Warehousing",
      description: "Design and implement scalable data warehouses using Snowflake, optimized for performance and cost-efficiency.",
      features: ["Architecture Design", "Performance Tuning", "Cost Optimization", "Migration Planning"]
    },
    {
      icon: "🔄",
      title: "ETL Development & Automation",
      description: "Build robust ETL pipelines that transform raw data into actionable insights with automated workflows.",
      features: ["Pipeline Development", "Data Transformation", "Workflow Automation", "Error Handling"]
    },
    {
      icon: "📊",
      title: "SQL Data Modeling",
      description: "Create efficient data models and complex SQL queries that deliver fast, reliable business intelligence.",
      features: ["Dimensional Modeling", "Query Optimization", "Data Quality", "Documentation"]
    },
    {
      icon: "⚙️",
      title: "Workflow Orchestration",
      description: "Implement Airflow-based orchestration for complex data workflows with monitoring and alerting.",
      features: ["Task Scheduling", "Dependency Management", "Monitoring", "Alert Systems"]
    },
    {
      icon: "🎯",
      title: "Domain-Specific Solutions",
      description: "Specialized data engineering for banking, financial services, and life sciences industries.",
      features: ["Compliance Ready", "Industry Standards", "Regulatory Reporting", "Security First"]
    },
    {
      icon: "🛠️",
      title: "Production Support",
      description: "24/7 monitoring, maintenance, and optimization of production data systems.",
      features: ["System Monitoring", "Performance Analysis", "Issue Resolution", "Capacity Planning"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Comprehensive data engineering solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-glass p-8 rounded-xl hover-glow group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="card-glass p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Ready to Transform Your Data?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help optimize your data infrastructure and unlock valuable insights.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium hover-glow transition-all"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
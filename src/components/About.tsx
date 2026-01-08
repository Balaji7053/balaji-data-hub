const About = () => {
  return <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Balaji Narapusetty, a Data Warehousing professional with over 2+ years of experience specializing in Snowflake, DBT, Informatica PowerCenter, and cloud-based data integration.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about building efficient and scalable data solutions that empower business insights. 
                My interests lie in developing SQL-based models, working with both structured and semi-structured data, 
                and automating workflows using AWS and Python.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Work Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passion for real-world data challenges, clean architecture, and automation. 
                  I believe in building solutions that not only solve today's problems but scale for tomorrow's growth.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="card-glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-medium">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-muted-foreground">Saveetha Institute of Medical and Technical Sciences, Chennai</p>
                  <p className="text-sm text-accent">Graduated June 2024</p>
                </div>
              </div>

              <div className="card-glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">SQL</div>
                    <div className="text-xs text-muted-foreground">Advanced</div>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">Python</div>
                    <div className="text-xs text-muted-foreground">Proficient</div>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">Snowflake</div>
                    <div className="text-xs text-muted-foreground">Expert</div>
                  </div>
                  <div className="text-center p-3 bg-background/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">DBT</div>
                    <div className="text-xs text-muted-foreground">Advanced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
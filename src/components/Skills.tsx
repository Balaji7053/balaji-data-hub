const Skills = () => {
  const skillCategories = [{
    title: "Data Warehousing",
    icon: "🏗️",
    skills: [{
      name: "Snowflake",
      level: 95
    }, {
      name: "DBT",
      level: 90
    }, {
      name: "ETL",
      level: 85
    }, {
      name: "Data Modeling",
      level: 88
    }]
  }, {
    title: "Programming",
    icon: "💻",
    skills: [{
      name: "SQL",
      level: 95
    }, {
      name: "Python",
      level: 80
    }, {
      name: "UNIX",
      level: 75
    }, {
      name: "Shell Scripting",
      level: 70
    }]
  }, {
    title: "Cloud & Integration",
    icon: "☁️",
    skills: [{
      name: "AWS S3",
      level: 85
    }, {
      name: "Airflow",
      level: 82
    }, {
      name: "Informatica",
      level: 88
    }, {
      name: "Cloud Migration",
      level: 80
    }]
  }, {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [{
      name: "Power BI",
      level: 75
    }, {
      name: "ServiceNow",
      level: 70
    }, {
      name: "Jira",
      level: 85
    }, {
      name: "Git",
      level: 90
    }]
  }];
  return <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Expertise across the modern data engineering stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => <div key={index} className="card-glass p-8 rounded-xl hover-glow">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="space-y-2">
                      
                      <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out" style={{
                    width: `${skill.level}%`
                  }}></div>
                      </div>
                    </div>)}
                </div>
              </div>)}
          </div>

          {/* Certifications placeholder */}
          <div className="mt-16 text-center">
            <div className="card-glass p-8 rounded-xl inline-block">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Currently pursuing advanced certifications in Snowflake and AWS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;
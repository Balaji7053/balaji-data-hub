import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-5xl lg:text-7xl font-bold">
              Narapusetty <span className="gradient-text">Balaji</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/80">
              Snowflake &amp; Data Engineering
              <br />
              <span className="gradient-text">Specialist</span>
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Building scalable, cloud-native data solutions that empower insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover-glow" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg" onClick={() => window.open('https://drive.google.com/file/d/1UZt4pIWN-hGoq5Z1yeeEv_563UEqomTc/view?usp=drive_link', '_blank')}>
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Get In Touch
            </Button>
          </div>

          {/* Social Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold gradient-text">​2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">3</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 hover-glow">
              <img src="https://i.postimg.cc/MTN6srRk/picture.jpg" alt="Narapusetty Balaji - Data Engineering Specialist" className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">
              Narapusetty Balaji
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Snowflake & Data Engineering Specialist building scalable, 
              cloud-native data solutions that empower insights.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:narapusettybalaji@gmail.com"
                className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-glow"
                aria-label="Email"
              >
                📧
              </a>
              <a 
                href="tel:+919392342314"
                className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors hover-glow"
                aria-label="Phone"
              >
                📱
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a 
                  href="mailto:narapusettybalaji@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  narapusettybalaji@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <a 
                  href="tel:+919392342314"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9392342314
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span className="text-muted-foreground">Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Narapusetty Balaji. All rights reserved. | 
            Built with passion for data engineering excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
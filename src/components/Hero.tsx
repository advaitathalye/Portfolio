import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 gradient-hero opacity-60" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-data-green/20 rounded-full blur-2xl animate-glow" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Advait Athalye</span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-foreground/90 leading-relaxed">
              Saved 140+ hrs/month through automation | Built dashboards for Big 4 vendors | Data Analyst specializing in Business Intelligence & Marketing Analytics | Master's grad May '25
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Recent MIS Master's grad with 3+ years experience in BI dashboards, marketing analytics, and statistical modeling. 
              I love taking messy, complex datasets and turning them into insights that actually make sense to people.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-scale flex flex-col sm:flex-row gap-4 justify-center mb-16" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="lg">
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in flex justify-center space-x-6 mb-16" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/advaitathalye"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-medium group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="https://www.linkedin.com/in/advaitathalye"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-medium group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
            <a
              href="mailto:advaiitathalye@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-medium group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <a href="#about" className="inline-block">
              <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce hover:text-primary transition-smooth" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
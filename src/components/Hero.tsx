
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import heroBackground from '@/assets/hero-background.jpg';
import profilePhoto from '/lovable-uploads/9e2b1fbd-2eb2-428e-8c5a-28617ae454ff.png';
import FadeIn from './FadeIn';


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [lottieData, setLottieData] = useState(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Try to load Lottie animation
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(() => console.log('Lottie file not found, using static image'));
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!photoRef.current || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = photoRef.current!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const rotateX = deltaY * -2.5;
      const rotateY = deltaX * 2.5;
      
      photoRef.current!.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      photoRef.current!.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    photoRef.current.addEventListener('mousemove', handleMouseMove);
    photoRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      if (photoRef.current) {
        photoRef.current.removeEventListener('mousemove', handleMouseMove);
        photoRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animated-gradient-bg absolute inset-0" />
        <div className="animated-gradient-overlay absolute inset-0" />
      </div>
      
      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl animate-glow" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8">
            {/* Profile Photo - Left Side */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 lg:w-1/2">
              <FadeIn delay={0.9} className="relative w-full max-w-xs mx-auto">
                <div 
                  ref={photoRef}
                  className={`w-full h-auto rounded-2xl ${isMobile ? 'sm:rounded-2xl' : 'sm:rounded-3xl'} overflow-hidden shadow-2xl transition-all duration-500 ease-out`}
                >
                  {lottieData ? (
                    <Player
                      autoplay
                      loop
                      src="/loop-header.lottie"
                      className="w-full h-auto"
                    />
                  ) : (
                    <img 
                      src={profilePhoto} 
                      alt="Advait Athalye - Data Analyst" 
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-glow" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" />
              </FadeIn>
            </div>

            {/* Content - Right Side */}
            <div className="text-center lg:text-left order-1 lg:order-2">

              {/* Greeting */}
              <FadeIn>
                <p className="text-lg text-muted-foreground mb-4">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-accent">
                  <span className="text-primary-emphasis animate-text-reveal">Advait Athalye</span>
                </h1>
              </FadeIn>

              {/* Title */}
              <FadeIn delay={0.2} className="stagger-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-foreground/90 leading-relaxed">
                  Growth-Focused Data Analyst | Saved 140+ hours/month
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                  Master's grad, Data analyst with 3+ years solving the problem every company faces: drowning in data but starving for insights.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  SF-based • Authorized to work in the US
                </p>
              </FadeIn>


              {/* CTA Buttons */}
              <FadeIn delay={0.6} className="stagger-3">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a href="#projects">
                    <Button variant="hero" size="lg">
                      View Projects
                    </Button>
                  </a>
                  <a href="#contact">
                    <Button variant="outline" size="lg">
                      <Mail className="w-5 h-5 mr-2" />
                      Let's Connect
                    </Button>
                  </a>
                  <a href="/Advait_Athalye_Resume.pdf" download="Advait_Athalye_Resume.pdf">
                    <Button variant="secondary" size="lg">
                      <Download className="w-5 h-5 mr-2" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </FadeIn>

              {/* Social Links */}
              <FadeIn delay={0.8}>
                <div className="flex justify-center lg:justify-start space-x-6">
                  <a
                    href="https://github.com/advaitathalye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-panel hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-medium group"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/advaitathalye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-panel hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-medium group"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                  <a
                    href="mailto:advaiitathalye@gmail.com"
                    className="p-3 rounded-full glass-panel hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-medium group"
                  >
                    <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in text-center mt-16" style={{ animationDelay: '1s' }}>
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

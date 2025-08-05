import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const SectionNavigation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'experience', name: 'Experience' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (direction: 'up' | 'down') => {
    let targetIndex;
    
    if (direction === 'up') {
      targetIndex = Math.max(0, currentSection - 1);
    } else {
      targetIndex = Math.min(sections.length - 1, currentSection + 1);
    }
    
    const targetElement = document.getElementById(sections[targetIndex].id);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground shadow-medium"
        onClick={() => navigateToSection('up')}
        disabled={currentSection === 0}
      >
        <ChevronUp className="w-5 h-5" />
      </Button>
      
      <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
        <span className="text-xs font-medium text-muted-foreground">
          {currentSection + 1}/{sections.length}
        </span>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground shadow-medium"
        onClick={() => navigateToSection('down')}
        disabled={currentSection === sections.length - 1}
      >
        <ChevronDown className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default SectionNavigation;
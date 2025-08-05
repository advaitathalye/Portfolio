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
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border-border/30 hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300"
        onClick={() => navigateToSection('up')}
        disabled={currentSection === 0}
      >
        <ChevronUp className="w-4 h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border-border/30 hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-medium transition-all duration-300"
        onClick={() => navigateToSection('down')}
        disabled={currentSection === sections.length - 1}
      >
        <ChevronDown className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default SectionNavigation;
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Database, Brain, PieChart } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import ParallaxSection from '@/components/ParallaxSection';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: '140+ hrs saved',
      description: 'Monthly automation impact through ETL pipelines and dashboard optimization for Big 4 vendors'
    },
    {
      icon: Database,
      title: 'ETL Automation',
      description: 'Built automated pipelines saving 30+ hrs/week and cut time-to-fill from 45 to 31 days for enterprise roles'
    },
    {
      icon: Brain,
      title: 'Statistical Analysis',
      description: 'Expert in A/B testing, geo-lift experiments, and causal inference for marketing attribution modeling'
    },
    {
      icon: PieChart,
      title: 'BI Dashboards',
      description: 'Created Power BI and Tableau dashboards cutting review time from 3 hours to under 10 minutes'
    }
  ];

  const technologies = [
    'Power BI', 'Python', 'SQL', 'Tableau', 'R', 'DAX', 'M Query',
    'Pandas', 'NumPy', 'Matplotlib', 'PostgreSQL', 'BigQuery', 'dbt',
    'A/B Testing', 'Statistical Modeling', 'ETL Workflows', 'API Integration'
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      <ParallaxSection speed={0.3} className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/10" />
      </ParallaxSection>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-emphasis">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master's grad. 3 years experience. From HR firms (handling enterprise-scale chaos) to cybersecurity startups (where every optimization can make or break the quarter), my focus has been the same, building analytics that don't just inform, but transform how teams make decisions.
            </p>
          </FadeIn>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger-fade-in">
            {highlights.map((highlight, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="glass-card hover-lift hover-glow transition-all duration-500 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:pulse-glow transition-all duration-300 hover:scale-110">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <FadeIn direction="left" delay={0.2}>
              <div className="glass-panel p-6 rounded-xl hover-lift">
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Analytics clicked for me during Computer Science in India, data isn't just numbers, it's the foundation of every smart business decision. That insight drove me to Cleveland State for my MIS Master's, and now I'm in San Francisco solving a problem every scaling company faces: turning data chaos into clear action.
                  </p>
                  <p>
                    3+ years across enterprise operations and high-growth companies taught me this: organizations have tons of data but struggle with actionable insights.
                  </p>
                  <p>
                    <strong>Key wins:</strong> Automated KPI reporting (saved 140+ hours monthly) • Improved enrollment conversion 34% → 38% with intuitive dashboards • Cut reporting delays from 6 hours to real-time
                  </p>
                  <p>
                    My approach: Build analytics that turn complexity into clarity. When teams stop asking "What does this mean?" and start asking "What do we do next?" that's when you know it's working.
                  </p>
                  <p>
                    If your data creates more questions than answers, let's fix that.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="glass-panel p-6 rounded-xl hover-lift">
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="px-3 py-1 hover:bg-primary/10 hover:border-primary/30 hover:scale-105 hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Current Focus</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 hover:shadow-[0_0_10px_hsl(var(--primary))] transition-shadow" />
                      Advanced marketing attribution and incrementality measurement
                    </li>
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 hover:shadow-[0_0_10px_hsl(var(--primary))] transition-shadow" />
                      Automated BI dashboard development and ETL optimization
                    </li>
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 hover:shadow-[0_0_10px_hsl(var(--primary))] transition-shadow" />
                      Statistical modeling for business decision optimization
                    </li>
                    <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 hover:shadow-[0_0_10px_hsl(var(--primary))] transition-shadow" />
                      Building data-driven cultures in high-growth startups
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
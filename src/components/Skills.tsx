import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, BarChart3, Brain } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import FadeIn from '@/components/FadeIn';
import ParallaxSection from '@/components/ParallaxSection';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Visualization & BI',
      icon: BarChart3,
      skills: [
        { name: 'Power BI (DAX, M Query)', description: 'Advanced dashboards, automation' },
        { name: 'Tableau', description: 'Interactive visualizations, storytelling' },
        { name: 'Looker', description: 'Business intelligence, SQL modeling' },
        { name: 'Excel (Advanced)', description: 'Complex formulas, pivot tables, VBA' }
      ]
    },
    {
      title: 'Programming & Analytics',
      icon: Code2,
      skills: [
        { name: 'Python (Pandas, NumPy)', description: 'Data analysis, statistical modeling' },
        { name: 'SQL (PostgreSQL, MySQL)', description: 'Complex queries, database design' },
        { name: 'R', description: 'Statistical analysis, data mining' },
        { name: 'BigQuery', description: 'Cloud data warehousing' }
      ]
    },
    {
      title: 'Marketing & Statistical Analysis',
      icon: Brain,
      skills: [
        { name: 'A/B Testing', description: 'Experimental design, hypothesis testing' },
        { name: 'Marketing Attribution', description: 'Multi-touch, incrementality measurement' },
        { name: 'Geo-Lift Testing', description: 'Causal inference, regional analysis' },
        { name: 'Statistical Modeling', description: 'Regression, forecasting, MMM' }
      ]
    },
    {
      title: 'Data Engineering & Tools',
      icon: Database,
      skills: [
        { name: 'dbt', description: 'Data transformation, modeling' },
        { name: 'ETL Workflows', description: 'Pipeline automation, optimization' },
        { name: 'API Integration', description: 'n8n, data connectors' },
        { name: 'Data Validation', description: 'Quality assurance, monitoring' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <ParallaxSection speed={0.4} className="absolute inset-0 opacity-25">
        <div className="w-full h-full bg-gradient-to-bl from-primary/10 to-secondary/5" />
      </ParallaxSection>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-emphasis">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience with cutting-edge data technologies and methodologies.
            </p>
          </FadeIn>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="glass-card hover-lift hover-glow border-2 border-primary/20 shadow-soft hover:shadow-medium transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-xl">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-primary/20 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="group-hover:text-primary transition-colors">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 hover:translate-x-1 transition-all duration-200">
                          <h4 className="font-medium mb-1 hover:text-primary transition-colors">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
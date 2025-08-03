import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, BarChart3, Brain, Cloud, Users } from 'lucide-react';

const Skills = () => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const skillCategories = [
    {
      title: 'Visualization & BI',
      icon: BarChart3,
      color: 'data-blue',
      skills: [
        { name: 'Power BI (DAX, M Query)', level: 92, description: 'Advanced dashboards, automation' },
        { name: 'Tableau', level: 88, description: 'Interactive visualizations, storytelling' },
        { name: 'Looker', level: 75, description: 'Business intelligence, SQL modeling' },
        { name: 'Excel (Advanced)', level: 90, description: 'Complex formulas, pivot tables, VBA' }
      ]
    },
    {
      title: 'Programming & Analytics',
      icon: Code2,
      color: 'data-purple',
      skills: [
        { name: 'Python (Pandas, NumPy)', level: 88, description: 'Data analysis, statistical modeling' },
        { name: 'SQL (PostgreSQL, MySQL)', level: 90, description: 'Complex queries, database design' },
        { name: 'R', level: 82, description: 'Statistical analysis, data mining' },
        { name: 'BigQuery', level: 78, description: 'Cloud data warehousing' }
      ]
    },
    {
      title: 'Marketing & Statistical Analysis',
      icon: Brain,
      color: 'data-green',
      skills: [
        { name: 'A/B Testing', level: 90, description: 'Experimental design, hypothesis testing' },
        { name: 'Marketing Attribution', level: 85, description: 'Multi-touch, incrementality measurement' },
        { name: 'Geo-Lift Testing', level: 88, description: 'Causal inference, regional analysis' },
        { name: 'Statistical Modeling', level: 87, description: 'Regression, forecasting, MMM' }
      ]
    },
    {
      title: 'Data Engineering & Tools',
      icon: Database,
      color: 'data-orange',
      skills: [
        { name: 'dbt', level: 80, description: 'Data transformation, modeling' },
        { name: 'ETL Workflows', level: 88, description: 'Pipeline automation, optimization' },
        { name: 'API Integration', level: 82, description: 'n8n, data connectors' },
        { name: 'Data Validation', level: 85, description: 'Quality assurance, monitoring' }
      ]
    }
  ];

  const tools = [
    'Power BI', 'Tableau', 'Python', 'SQL', 'R', 'Excel', 'dbt', 'n8n',
    'BigQuery', 'PostgreSQL', 'Chart.js', 'Supabase', 'Git', 'Jupyter'
  ];

  const softSkills = [
    { skill: 'Marketing Analytics', description: 'Incrementality measurement, attribution modeling, budget optimization' },
    { skill: 'Business Intelligence', description: 'Dashboard development, ETL automation, executive reporting' },
    { skill: 'Statistical Modeling', description: 'A/B testing, experimental design, causal inference' },
    { skill: 'Data Storytelling', description: 'Translating complex analytics into actionable business insights' },
    { skill: 'Process Automation', description: 'Workflow optimization, reducing manual effort through technology' },
    { skill: 'Cross-functional Collaboration', description: 'Working with technical teams, executives, and stakeholders' }
  ];

  useEffect(() => {
    // Animate progress bars on component mount
    const timer = setTimeout(() => {
      const values: Record<string, number> = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          values[skill.name] = skill.level;
        });
      });
      setAnimatedValues(values);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience with cutting-edge data technologies and methodologies.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-${category.color}/20`}>
                      <category.icon className={`w-5 h-5 text-${category.color}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={animatedValues[skill.name] || 0} 
                          className="h-2 mb-1"
                        />
                        <p className="text-xs text-muted-foreground">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tools & Technologies */}
          <Card className="gradient-card shadow-soft mb-16">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Cloud className="w-6 h-6 mr-3 text-primary" />
                Tools & Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-3 py-2 hover:bg-primary/10 hover:border-primary/30 transition-smooth cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Users className="w-6 h-6 mr-3 text-primary" />
                Professional Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkills.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <h4 className="font-semibold mb-2">{item.skill}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">140+</div>
              <div className="text-sm text-muted-foreground">Hours Saved Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Big 4</div>
              <div className="text-sm text-muted-foreground">Vendor Dashboards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Tools Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, BarChart3, Brain, Cloud, Users } from 'lucide-react';

const Skills = () => {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'data-blue',
      skills: [
        { name: 'Python', level: 95, description: 'Data analysis, ML, automation' },
        { name: 'R', level: 90, description: 'Statistical analysis, visualization' },
        { name: 'SQL', level: 92, description: 'Complex queries, optimization' },
        { name: 'JavaScript', level: 75, description: 'Web dashboards, D3.js' }
      ]
    },
    {
      title: 'Data Analysis & ML',
      icon: Brain,
      color: 'data-purple',
      skills: [
        { name: 'Machine Learning', level: 90, description: 'Supervised/unsupervised learning' },
        { name: 'Statistical Analysis', level: 95, description: 'Hypothesis testing, regression' },
        { name: 'Time Series', level: 85, description: 'Forecasting, trend analysis' },
        { name: 'Deep Learning', level: 80, description: 'Neural networks, TensorFlow' }
      ]
    },
    {
      title: 'Visualization & BI',
      icon: BarChart3,
      color: 'data-green',
      skills: [
        { name: 'Tableau', level: 92, description: 'Advanced dashboards, storytelling' },
        { name: 'Power BI', level: 88, description: 'Executive reporting, DAX' },
        { name: 'D3.js', level: 75, description: 'Custom interactive visualizations' },
        { name: 'Plotly', level: 85, description: 'Python/R interactive charts' }
      ]
    },
    {
      title: 'Databases & Cloud',
      icon: Database,
      color: 'data-orange',
      skills: [
        { name: 'AWS', level: 85, description: 'S3, Redshift, EMR, Lambda' },
        { name: 'Snowflake', level: 80, description: 'Data warehousing, optimization' },
        { name: 'PostgreSQL', level: 88, description: 'Database design, performance' },
        { name: 'MongoDB', level: 75, description: 'NoSQL, aggregation pipelines' }
      ]
    }
  ];

  const tools = [
    'Jupyter Notebooks', 'Git/GitHub', 'Docker', 'Airflow', 'dbt', 'Spark',
    'Kafka', 'Redis', 'Elasticsearch', 'Jenkins', 'Kubernetes', 'Terraform'
  ];

  const softSkills = [
    { skill: 'Problem Solving', description: 'Breaking down complex business problems into analytical solutions' },
    { skill: 'Communication', description: 'Translating technical insights into business language' },
    { skill: 'Project Management', description: 'Leading cross-functional analytics projects' },
    { skill: 'Stakeholder Management', description: 'Working with executives and technical teams' },
    { skill: 'Mentoring', description: 'Training junior analysts and data scientists' },
    { skill: 'Business Acumen', description: 'Understanding industry trends and business metrics' }
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
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$25M+</div>
              <div className="text-sm text-muted-foreground">Business Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
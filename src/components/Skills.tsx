import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, BarChart3, Brain, Cloud, Users } from 'lucide-react';

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
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-primary/20">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="border-l-2 border-primary/20 pl-4">
                        <h4 className="font-medium mb-1">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
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

          {/* Professional Skills */}
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
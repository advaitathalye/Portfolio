import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Database, Brain, PieChart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: '$33.6M Impact',
      description: 'Delivered marketing budget optimization revealing 52-61% attribution bias through statistical modeling'
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
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Recent MIS Master's graduate from Cleveland State University with 3+ years of hands-on experience 
              transforming complex data into business-driving insights. I specialize in turning messy datasets 
              into clear, actionable strategies that executives actually understand and implement.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <Card key={index} className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My analytics journey began during my Computer Science studies in India, where I discovered the 
                  power of data to solve real business problems. This passion led me to pursue an MIS Master's 
                  at Cleveland State University, focusing on business intelligence and statistical analysis.
                </p>
                <p>
                  Over the past 3+ years, I've helped companies from Big 4 consulting to tech startups optimize 
                  their operations through data. From automating ETL pipelines that save 30+ hours weekly to 
                  revealing $33.6M in marketing inefficiencies, I've consistently delivered measurable business impact.
                </p>
                <p>
                  What excites me most is making data accessible to everyone. Whether it's cutting loan portfolio 
                  reviews from 3 hours to 10 minutes or helping executives make faster hiring decisions, I believe 
                  great analytics should simplify complexity, not add to it.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-3 py-1 hover:bg-primary/10 hover:border-primary/30 transition-smooth"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Current Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Advanced marketing attribution and incrementality measurement
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Automated BI dashboard development and ETL optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Statistical modeling for business decision optimization
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Building data-driven cultures in high-growth startups
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
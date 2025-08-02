import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Database, Brain, PieChart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: 'Business Impact',
      description: 'Delivered data-driven solutions that increased revenue by 25% and reduced operational costs by 30%'
    },
    {
      icon: Database,
      title: 'Data Expertise',
      description: 'Proficient in SQL, Python, R, and modern BI tools with experience handling datasets of 100M+ records'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Built predictive models with 95%+ accuracy for customer segmentation and demand forecasting'
    },
    {
      icon: PieChart,
      title: 'Visualization',
      description: 'Created interactive dashboards that transformed how stakeholders interact with data'
    }
  ];

  const technologies = [
    'Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Excel', 'Jupyter',
    'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'AWS', 'Snowflake'
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate data analytics professional with 5+ years of experience turning raw data into strategic insights. 
              I thrive on solving complex business problems through analytical thinking and innovative data solutions.
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
              <h3 className="text-2xl font-semibold mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into data analytics began during my economics studies, where I discovered the power of 
                  statistical analysis to uncover hidden patterns in market behavior. This fascination led me to pursue 
                  advanced studies in data science and machine learning.
                </p>
                <p>
                  Over the past 5 years, I've worked with Fortune 500 companies and innovative startups, helping them 
                  leverage data to drive strategic decisions. From optimizing marketing campaigns to building predictive 
                  models for supply chain management, I've seen firsthand how the right data insights can transform businesses.
                </p>
                <p>
                  What excites me most about data analytics is its endless potential to solve real-world problems. 
                  Every dataset tells a story, and I'm passionate about uncovering those narratives that drive meaningful change.
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
                    Advanced machine learning techniques for time series forecasting
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Real-time data processing and streaming analytics
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    Building scalable data infrastructure on cloud platforms
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
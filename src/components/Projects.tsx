import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react';
import marketingIncrementalityChart from '@/assets/marketing-incrementality-chart.png';
import companyHiringDashboard from '@/assets/company-hiring-dashboard.png';
import britishAirwaysDashboard from '@/assets/british-airways-dashboard.png';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Marketing Incrementality Analysis & Budget Optimization',
      description: 'Conducted data analysis on 19,656 marketing touchpoints to reveal 52–61% attribution bias through statistical modeling and causal inference.',
      image: marketingIncrementalityChart,
      technologies: ['Python', 'Statistical Analysis', 'Geo-Lift Testing', 'A/B Testing', 'Causal Inference'],
      metrics: [
        { label: 'Marketing Touchpoints', value: '19,656', icon: DollarSign },
        { label: 'Attribution Bias', value: '52-61%', icon: TrendingUp },
        { label: 'Email vs TV ROI', value: '1.71x vs 0.21x', icon: BarChart3 }
      ],
      highlights: [
        'Analyzed 19,656 marketing touchpoints with advanced statistical modeling',
        'Implemented A/B testing and Geo-Lift experimental design',
        'Developed Multi-Touch Attribution models revealing Email ROI 1.71x vs TV ROI 0.21x',
        'Automated budget reallocation algorithm using Python for channel optimization'
      ],
      github: 'https://github.com/advaitathalye/Marketing-Incrementality-Analysis-Budget-Optimization',
      demo: 'https://github.com/advaitathalye/Marketing-Incrementality-Analysis-Budget-Optimization',
      category: 'Marketing Analytics'
    },
    {
      title: 'LendingClub BI Dashboard',
      description: 'Cut loan portfolio review time from 3 hours to under 10 mins by automating interactive dashboards, supporting faster credit-risk evaluation scenarios.',
      image: companyHiringDashboard,
      technologies: ['n8n', 'Supabase', 'Chart.js', 'API Integration', 'SQL'],
      metrics: [
        { label: 'Time Saved', value: '3hrs → 10min', icon: TrendingUp },
        { label: 'Process', value: 'Automated', icon: BarChart3 },
        { label: 'Risk Analysis', value: 'Enhanced', icon: Users }
      ],
      highlights: [
        'Automated queries with n8n workflows eliminating manual chart generation',
        'Built loan segmentation visuals highlighting high-risk categories',
        'Improved data accessibility and credit-risk evaluation speed',
        'Created interactive dashboards with real-time loan approval trends'
      ],
      github: 'https://github.com/advaitathalye/LendingClub-BI-Dashboard',
      demo: 'https://github.com/advaitathalye/LendingClub-BI-Dashboard',
      category: 'Business Intelligence'
    },
    {
      title: 'Company Hiring Trends 2025 Dashboard',
      description: 'Developed a BI dashboard from 1000+ LinkedIn job posts to reveal hiring spikes, recruiter hotspots, and geographic demand patterns.',
      image: companyHiringDashboard,
      technologies: ['Power BI', 'DAX', 'SQL', 'Excel', 'Data Mining'],
      metrics: [
        { label: 'Job Posts Analyzed', value: '1000+', icon: BarChart3 },
        { label: 'Time Saved', value: '3hrs/week', icon: TrendingUp },
        { label: 'Users Helped', value: '20+', icon: Users }
      ],
      highlights: [
        'Integrated filters and KPI cards reducing manual job search effort by 3+ hours/week',
        'Identified hiring velocity patterns and geographic demand trends',
        'Enhanced dashboard usability based on feedback from 20+ job seekers',
        'Revealed recruiter hotspots and optimal application timing strategies'
      ],
      github: 'https://github.com/advaitathalye/Company-hiring-trends-2025',
      demo: 'https://github.com/advaitathalye/Company-hiring-trends-2025',
      category: 'Business Intelligence'
    },
    {
      title: 'CX Trends Analysis - Airline Reviews',
      description: 'Designed Tableau dashboard visualizing 20K+ airline reviews, revealing 5 route-cabin combos with 15–25% NPS decline, enabling targeted service improvements.',
      image: britishAirwaysDashboard,
      technologies: ['Tableau', 'Excel', 'Data Cleaning', 'NPS Analysis'],
      metrics: [
        { label: 'Reviews Analyzed', value: '20K+', icon: BarChart3 },
        { label: 'NPS Decline Found', value: '15-25%', icon: TrendingUp },
        { label: 'Route-Cabin Issues', value: '5', icon: Users }
      ],
      highlights: [
        'Cleaned and merged multi-source data enabling metric filtering by traveler type',
        'Identified 5 specific route-cabin combinations with significant NPS decline',
        'Created interactive dashboard with seat class and review category filters',
        'Enabled targeted service improvements through data-driven insights'
      ],
      github: 'https://github.com/advaitathalye/British-Airways-Data-Analysis-Dashboard',
      demo: 'https://github.com/advaitathalye/British-Airways-Data-Analysis-Dashboard',
      category: 'Customer Analytics'
    }
  ];

  const categories = ['All', 'Marketing Analytics', 'Business Intelligence', 'Customer Analytics'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of data-driven solutions that have delivered measurable business impact across various industries.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group gradient-card shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-background/80 text-foreground border-0">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                          <metric.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-lg font-semibold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button size="sm" className="w-full">
                        <Github className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a href="https://github.com/advaitathalye" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="shadow-soft hover:shadow-medium transition-all duration-300">
                View All Projects
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
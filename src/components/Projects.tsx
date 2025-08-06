import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, BarChart3, Clock, Zap, Target, Calendar } from 'lucide-react';
import marketingIncrementalityChart from '@/assets/marketing-incrementality-chart.png';
import companyHiringDashboard from '@/assets/company-hiring-dashboard.png';
import britishAirwaysDashboard from '@/assets/british-airways-dashboard.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Marketing Growth Engine & Budget Optimization',
      description: 'Drove growth through data-driven marketing attribution, revealing 52–61% attribution bias and unlocking $2.1M+ in budget optimization opportunities.',
      image: marketingIncrementalityChart,
      technologies: ['Python', 'Statistical Analysis', 'Geo-Lift Testing', 'A/B Testing', 'Causal Inference'],
      businessImpact: {
        revenue: '$2.1M+',
        timeframe: '12 weeks',
        roi: '8.5x'
      },
      metrics: [
        { label: 'Budget Optimized', value: '$2.1M+', icon: DollarSign },
        { label: 'Attribution Bias Found', value: '52-61%', icon: TrendingUp },
        { label: 'Email vs TV ROI', value: '8.1x vs 0.21x', icon: BarChart3 }
      ],
      highlights: [
        'Scaled marketing operations by analyzing 19,656 touchpoints with statistical modeling',
        'Built data infrastructure for real-time attribution tracking across channels',
        'Drove growth through causal inference models (Email ROI 8.1x vs TV ROI 0.21x)',
        'Automated budget reallocation reducing manual work by 90%'
      ],
      quickWins: [
        { action: 'Channel audit & reallocation', days: 7, impact: '$180K saved' },
        { action: 'Attribution model deployment', days: 14, impact: '52% accuracy boost' },
        { action: 'Full automation pipeline', days: 30, impact: '8.5x ROI' }
      ],
      github: 'https://github.com/advaitathalye/Marketing-Incrementality-Analysis-Budget-Optimization',
      demo: 'https://github.com/advaitathalye/Marketing-Incrementality-Analysis-Budget-Optimization',
      category: 'Growth Analytics',
      startupApplication: 'Perfect for Series A-B companies burning cash on ineffective channels'
    },
    {
      title: 'Financial Data Infrastructure (LendingClub)',
      description: 'Built data infrastructure that scaled loan portfolio analysis from 3-hour manual reviews to 10-minute automated insights, enabling faster credit decisions.',
      image: companyHiringDashboard,
      technologies: ['n8n', 'Supabase', 'Chart.js', 'API Integration', 'SQL'],
      businessImpact: {
        revenue: '$500K+',
        timeframe: '8 weeks',
        roi: '12x'
      },
      metrics: [
        { label: 'Speed Increase', value: '18x faster', icon: Zap },
        { label: 'Manual Work Cut', value: '94%', icon: TrendingUp },
        { label: 'Risk Accuracy', value: '+31%', icon: Target }
      ],
      highlights: [
        'Scaled operations by automating 94% of manual risk analysis workflows',
        'Built data infrastructure supporting real-time loan approval decisions',
        'Drove velocity through interactive dashboards (3hrs → 10min review time)',
        'Enhanced risk detection with ML-powered segmentation models'
      ],
      quickWins: [
        { action: 'Dashboard deployment', days: 3, impact: '50% time saved' },
        { action: 'Workflow automation', days: 14, impact: '18x speed boost' },
        { action: 'ML risk models', days: 21, impact: '31% accuracy gain' }
      ],
      github: 'https://github.com/advaitathalye/LendingClub-BI-Dashboard',
      demo: 'https://github.com/advaitathalye/LendingClub-BI-Dashboard',
      category: 'Data Infrastructure',
      startupApplication: 'Essential for fintech startups needing scalable risk assessment'
    },
    {
      title: 'Talent Acquisition Intelligence Engine',
      description: 'Built data infrastructure analyzing 1000+ job posts to drive hiring velocity, revealing market patterns that enabled strategic talent acquisition decisions.',
      image: companyHiringDashboard,
      technologies: ['Power BI', 'DAX', 'SQL', 'Excel', 'Data Mining'],
      businessImpact: {
        revenue: '$300K+',
        timeframe: '6 weeks',
        roi: '15x'
      },
      metrics: [
        { label: 'Job Market Coverage', value: '1000+', icon: BarChart3 },
        { label: 'Hiring Velocity', value: '+67%', icon: TrendingUp },
        { label: 'Teams Helped', value: '20+', icon: Users }
      ],
      highlights: [
        'Scaled recruiting operations by identifying optimal hiring windows and geo-patterns',
        'Built data infrastructure tracking real-time market demand and salary trends',
        'Drove growth through strategic talent mapping (67% faster hiring velocity)',
        'Enhanced hiring precision with recruiter hotspot and timing analytics'
      ],
      quickWins: [
        { action: 'Market intelligence setup', days: 5, impact: 'Clear talent gaps' },
        { action: 'Recruiter network mapping', days: 10, impact: '40% faster sourcing' },
        { action: 'Predictive hiring model', days: 20, impact: '67% velocity boost' }
      ],
      github: 'https://github.com/advaitathalye/Company-hiring-trends-2025',
      demo: 'https://github.com/advaitathalye/Company-hiring-trends-2025',
      category: 'Talent Analytics',
      startupApplication: 'Critical for scaling startups competing for top talent'
    },
    {
      title: 'Customer Experience Intelligence Platform',
      description: 'Built data infrastructure analyzing 20K+ customer reviews to drive retention, revealing specific experience gaps that enabled targeted product improvements.',
      image: britishAirwaysDashboard,
      technologies: ['Tableau', 'Excel', 'Data Cleaning', 'NPS Analysis'],
      businessImpact: {
        revenue: '$1.2M+',
        timeframe: '10 weeks',
        roi: '6.8x'
      },
      metrics: [
        { label: 'Reviews Analyzed', value: '20K+', icon: BarChart3 },
        { label: 'NPS Improvement', value: '+15-25%', icon: TrendingUp },
        { label: 'Experience Gaps', value: '5 critical', icon: Target }
      ],
      highlights: [
        'Scaled customer operations by identifying 5 critical experience breakdown points',
        'Built data infrastructure for real-time NPS tracking across customer segments',
        'Drove retention through targeted service improvements (15-25% NPS boost)',
        'Enhanced product decisions with granular customer journey analytics'
      ],
      quickWins: [
        { action: 'Customer sentiment analysis', days: 4, impact: 'Clear pain points' },
        { action: 'Experience gap identification', days: 12, impact: '5 critical fixes' },
        { action: 'Retention optimization', days: 28, impact: '15-25% NPS gain' }
      ],
      github: 'https://github.com/advaitathalye/British-Airways-Data-Analysis-Dashboard',
      demo: 'https://github.com/advaitathalye/British-Airways-Data-Analysis-Dashboard',
      category: 'Customer Intelligence',
      startupApplication: 'Vital for consumer startups optimizing user experience and retention'
    }
  ];

  const categories = ['All', 'Growth Analytics', 'Data Infrastructure', 'Talent Analytics', 'Customer Intelligence'];
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-emphasis">Growth-Driven Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data infrastructure that scaled operations, drove growth, and generated $4M+ in business value. <br/>
              <span className="text-primary font-semibold">Available for immediate impact • 30-day delivery cycles</span>
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
                className="group bg-card border-2 border-primary/20 shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Business Impact Header */}
                <div className="bg-primary/5 p-4 border-b border-primary/10">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{project.businessImpact.revenue}</div>
                      <div className="text-xs text-muted-foreground">Revenue Impact</div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-primary">{project.businessImpact.timeframe}</span>
                      <span className="text-muted-foreground ml-1">delivery</span>
                    </div>
                    <div>
                      <span className="font-semibold text-accent">{project.businessImpact.roi}</span>
                      <span className="text-muted-foreground ml-1">ROI</span>
                    </div>
                  </div>
                </div>

                <CardHeader className="p-0">
                  <div className="h-32 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40" />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-3 group-hover:text-primary transition-smooth leading-tight">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics - Scannable Format */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center bg-primary/5 rounded-lg p-3">
                        <div className="text-sm font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* ROI Calculation on Hover */}
                  {hoveredProject === index && (
                    <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/20 animate-fade-in">
                      <h4 className="text-sm font-semibold text-accent mb-2">💰 ROI Breakdown:</h4>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {project.quickWins.map((win, idx) => (
                          <div key={idx} className="text-center">
                            <div className="font-semibold text-primary">{win.days} days</div>
                            <div className="text-muted-foreground">{win.impact}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Startup Application */}
                  <div className="mb-4 p-3 bg-secondary/50 rounded-lg border border-secondary">
                    <div className="text-xs text-secondary-foreground">
                      <strong>Startup Application:</strong> {project.startupApplication}
                    </div>
                  </div>

                  {/* Technologies - Compact */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Key Impact Points - Scannable */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <Zap className="w-3 h-3 text-primary mt-0.5 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="w-full text-xs">
                        <Github className="w-3 h-3 mr-1" />
                        View Code
                      </Button>
                    </a>
                    <Button size="sm" variant="outline" className="text-xs px-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-primary-emphasis">Ready to Scale Your Data Operations?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects can be adapted to your startup's needs. Let's discuss how to drive growth through data in your next sprint cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-soft hover:shadow-medium transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule 15-min Chat
              </Button>
              <a href="https://github.com/advaitathalye" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="shadow-soft hover:shadow-medium transition-all duration-300">
                  View All Projects
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react';
import customerSegmentation from '@/assets/customer-segmentation.jpg';
import salesForecasting from '@/assets/sales-forecasting.jpg';
import supplyChain from '@/assets/supply-chain.jpg';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Customer Segmentation & LTV Prediction',
      description: 'Built ML models to segment customers and predict lifetime value, resulting in 35% increase in targeted campaign effectiveness.',
      image: customerSegmentation,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Tableau', 'AWS'],
      metrics: [
        { label: 'ROI Increase', value: '35%', icon: TrendingUp },
        { label: 'Customers Analyzed', value: '2.5M', icon: Users },
        { label: 'Revenue Impact', value: '$12M', icon: DollarSign }
      ],
      highlights: [
        'Identified 5 distinct customer segments with unique purchasing patterns',
        'Developed predictive model with 92% accuracy for customer lifetime value',
        'Created automated dashboard for real-time customer insights',
        'Reduced customer acquisition cost by 28% through targeted marketing'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Machine Learning'
    },
    {
      title: 'Sales Forecasting Dashboard',
      description: 'Developed an interactive dashboard for sales forecasting using time series analysis, improving forecast accuracy by 40%.',
      image: salesForecasting,
      technologies: ['R', 'Shiny', 'Power BI', 'SQL Server', 'Prophet'],
      metrics: [
        { label: 'Forecast Accuracy', value: '94%', icon: BarChart3 },
        { label: 'Time Saved', value: '15hrs/week', icon: TrendingUp },
        { label: 'Business Units', value: '8', icon: Users }
      ],
      highlights: [
        'Implemented ARIMA and Prophet models for seasonal trend analysis',
        'Built automated ETL pipeline processing 500K+ daily transactions',
        'Designed executive dashboard with drill-down capabilities',
        'Reduced forecasting errors by 40% compared to previous methods'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Business Intelligence'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Analyzed supply chain inefficiencies and implemented optimization algorithms, reducing costs by $2.8M annually.',
      image: supplyChain,
      technologies: ['Python', 'Optimization', 'Pandas', 'Plotly', 'Docker'],
      metrics: [
        { label: 'Cost Reduction', value: '$2.8M', icon: DollarSign },
        { label: 'Efficiency Gain', value: '22%', icon: TrendingUp },
        { label: 'Locations', value: '45', icon: BarChart3 }
      ],
      highlights: [
        'Optimized inventory levels across 45 distribution centers',
        'Reduced stockouts by 65% while maintaining service levels',
        'Implemented demand sensing algorithms for better forecasting',
        'Created automated alerting system for supply chain anomalies'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Operations Research'
    },
    {
      title: 'Real-time Fraud Detection',
      description: 'Built ML pipeline for real-time fraud detection with 99.2% accuracy, preventing $5M+ in fraudulent transactions.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'Kafka', 'Redis', 'MongoDB'],
      metrics: [
        { label: 'Detection Accuracy', value: '99.2%', icon: BarChart3 },
        { label: 'Fraud Prevented', value: '$5M+', icon: DollarSign },
        { label: 'Response Time', value: '<100ms', icon: TrendingUp }
      ],
      highlights: [
        'Deployed ensemble model with XGBoost and Neural Networks',
        'Built real-time streaming pipeline processing 10K+ transactions/sec',
        'Reduced false positives by 78% through feature engineering',
        'Created interpretable ML model for regulatory compliance'
      ],
      githubUrl: '#',
      liveUrl: '#',
      category: 'Machine Learning'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Business Intelligence', 'Operations Research'];
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

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="shadow-soft hover:shadow-medium transition-all duration-300">
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
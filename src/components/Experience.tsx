import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechFlow Analytics',
      role: 'Senior Data Analyst',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Leading analytics initiatives for a $500M SaaS company, focusing on customer behavior analysis and growth optimization.',
      achievements: [
        'Built predictive models that increased customer retention by 28%',
        'Developed automated reporting system saving 20+ hours weekly',
        'Led cross-functional team of 5 analysts and engineers',
        'Implemented A/B testing framework used across 15+ product teams'
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'AWS', 'Snowflake', 'dbt']
    },
    {
      company: 'DataVision Consulting',
      role: 'Data Analyst',
      period: '2020 - 2022',
      location: 'Remote',
      type: 'Full-time',
      description: 'Provided data analytics consulting services to Fortune 500 clients across retail, finance, and healthcare sectors.',
      achievements: [
        'Delivered 12+ analytics projects with average ROI of 300%',
        'Specialized in customer segmentation and market basket analysis',
        'Built ML models for demand forecasting with 95%+ accuracy',
        'Created executive dashboards for C-level stakeholders'
      ],
      technologies: ['R', 'Python', 'Power BI', 'Azure', 'SQL Server']
    },
    {
      company: 'Metro Financial Services',
      role: 'Junior Data Analyst',
      period: '2019 - 2020',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Focused on risk analytics and fraud detection for a mid-size financial services company.',
      achievements: [
        'Developed fraud detection model reducing false positives by 40%',
        'Automated risk reporting process improving efficiency by 60%',
        'Conducted statistical analysis for regulatory compliance',
        'Collaborated with IT team to implement data governance policies'
      ],
      technologies: ['SQL', 'Excel', 'SAS', 'Python', 'Tableau']
    },
    {
      company: 'University Research Lab',
      role: 'Research Assistant',
      period: '2018 - 2019',
      location: 'Boston, MA',
      type: 'Part-time',
      description: 'Conducted statistical research on economic trends and consumer behavior patterns.',
      achievements: [
        'Co-authored 2 peer-reviewed papers on behavioral economics',
        'Analyzed large-scale survey data with 50K+ responses',
        'Developed statistical models for economic forecasting',
        'Presented findings at 3 academic conferences'
      ],
      technologies: ['R', 'SPSS', 'Stata', 'LaTeX']
    }
  ];

  const education = [
    {
      institution: 'Stanford University',
      degree: 'MS in Data Science',
      period: '2017 - 2019',
      details: 'Specialization in Machine Learning and Statistical Analysis'
    },
    {
      institution: 'UC Berkeley',
      degree: 'BS in Economics & Statistics',
      period: '2013 - 2017',
      details: 'Magna Cum Laude, Phi Beta Kappa'
    }
  ];

  const certifications = [
    'AWS Certified Data Analytics - Specialty',
    'Google Professional Data Engineer',
    'Tableau Desktop Certified Professional',
    'Microsoft Azure Data Scientist Associate'
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through data analytics roles where I've consistently delivered business value through innovative data solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 gradient-primary rounded-full transform md:-translate-x-2 shadow-medium" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                            {exp.role}
                          </h3>
                          <div className="flex items-center text-primary font-medium mt-1">
                            <Building2 className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Education */}
            <Card className="gradient-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="gradient-card shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
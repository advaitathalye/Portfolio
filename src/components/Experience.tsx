import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'SSi People',
      role: 'Data Analyst',
      period: 'Aug 2022 - Aug 2023',
      location: 'India',
      type: 'Full-time',
      description: 'Led analytics initiatives for Big 4 consulting vendors, focusing on recruitment funnel optimization and automated BI dashboard development.',
      companyDescription: 'A leading staffing and workforce solutions firm delivering top talent to Fortune 500 clients across IT, engineering, and professional services.',
      achievements: [
        'Automated ETL pipelines & Power BI dashboards saving 30 hrs/week and enabling same-day hiring decisions',
        'Analyzed 3 recruitment funnels to pinpoint 35% candidate drop-off, reducing time-to-fill from 45 to 31 days',
        'Executed sourcing via A/B tests, boosting interview conversion 12% to 22% for 200+ roles/month',
        'Delivered KPI dashboards that reduced prep time from 2 hrs to 15 mins for C-suite hiring reviews'
      ],
      technologies: ['Power BI', 'ETL Pipelines', 'A/B Testing', 'SQL', 'Dashboard Automation']
    },
    {
      company: 'Pace Infotech',
      role: 'Data Analyst',
      period: 'Aug 2021 - Aug 2022',
      location: 'India',
      type: 'Full-time',
      description: 'Focused on real-time SLA monitoring and operations optimization through advanced Tableau dashboards and workflow automation.',
      companyDescription: 'An IT services startup specializing in managed infrastructure, data analytics, and customized business solutions for global clients.',
      achievements: [
        'Delivered real-time SLA dashboards in Tableau, removing 6-hour reporting lag for 50 client accounts',
        'Cut Tier-1 false alarms by 25% by investigating root causes and refining alert thresholds',
        'Reduced analyst onboarding 40% by creating standardized ETL workflow guides for 8-member team',
        'Improved data accuracy by 20% by automating validation for 10K+ SLA logs, preventing client escalations'
      ],
      technologies: ['Tableau', 'SLA Monitoring', 'ETL Workflows', 'Data Validation', 'Process Automation']
    },
    {
      company: 'Visvesvaraya Technological University',
      role: 'Data Analyst Intern',
      period: 'Jul 2020 - Jul 2021',
      location: 'India',
      type: 'Internship',
      description: 'Automated admissions reporting and built strategic dashboards for university leadership, focusing on enrollment optimization.',
      companyDescription: 'One of India\'s premier technical universities, fostering innovation through engineering education and applied research.',
      achievements: [
        'Saved 20 hrs/week by automating ad-hoc and recurring admissions reports using Python and SQL',
        'Created Power BI segmentation dashboards increasing admitted-to-enrolled conversion from 34% to 38%',
        'Enabled strategic fund reallocation by analyzing GPA-scholarship correlation using R, boosting high-performer enrollment 12%',
        'Delivered data-driven insights through storytelling to admissions leadership, shaping scholarship criteria updates'
      ],
      technologies: ['Python', 'SQL', 'R', 'Power BI', 'Statistical Analysis']
    }
  ];

  const education = [
    {
      institution: 'Cleveland State University',
      degree: 'Master\'s in Management Information Systems',
      period: 'Graduated May 2025',
      details: 'SQL & Database Design, Data Mining & BI, ETL & Data Visualization, IT Governance & Compliance'
    },
    {
      institution: 'Visvesvaraya Technological University',
      degree: 'Bachelor\'s in Computer Science',
      period: 'Graduated Sep 2022',
      details: 'Algorithms, AI & Machine Learning, Data Science, Data Visualization (Python/Excel)'
    }
  ];

  const certifications = [
    'Google Data Analytics Professional Certificate (2025)'
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-emphasis">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through data analytics roles where I've consistently delivered business value through innovative data solutions.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 shadow-medium" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="bg-card border-2 border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 group">
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

                      {/* Company Description */}
                      <p className="text-muted-foreground/80 mb-4 text-sm italic leading-relaxed">
                        {exp.companyDescription}
                      </p>

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
            <Card className="bg-card border-2 border-primary/20 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary-emphasis">Education</h3>
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
            <Card className="bg-card border-2 border-primary/20 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary-emphasis">Certifications</h3>
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
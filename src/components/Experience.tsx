import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import ParallaxSection from '@/components/ParallaxSection';

const Experience = () => {
  const experiences = [
    {
      company: 'Dittra',
      role: 'Data Analyst Intern',
      period: 'Aug 2025 - Present',
      location: 'Austin, TX (Remote)',
      type: 'Internship',
      description: 'Building Power BI dashboards and automated ETL pipelines for marketing analytics across 15 paid channels.',
      companyDescription: 'A data-driven consulting firm specializing in marketing analytics and ROI optimization for enterprise clients.',
      achievements: [
        'Built Power BI dashboards in DAX and Power Query for 15 paid channels, used in weekly performance reviews with the Marketing Director to steer Q4 spend and support a 20% shift from paid search to mail',
        'Engineered Python + SQL ETL workflows pulling from 5 ad platform APIs, performing validation and reconciliation checks with indexing and query optimization to cut refresh time from 2 hours to 10 minutes',
        'Defined and maintained KPI logic for CAC, blended ROAS, and incremental vs. organic conversions to standardize reporting across marketing dashboards',
        'Support published reports in Power BI Service, resolving 8 refresh failures caused by upstream API changes by updating Power Query M logic and tightening validation rules'
      ],
      technologies: ['Power BI', 'DAX', 'Power Query', 'Python', 'SQL', 'ETL', 'API Integration']
    },
    {
      company: 'SSi People',
      role: 'Data Analyst',
      period: 'Aug 2022 - Aug 2023',
      location: 'India',
      type: 'Full-time',
      description: 'Built recurring reporting and dashboards tracking funnel KPIs across 200+ roles using Salesforce, Greenhouse, and Lever data.',
      companyDescription: 'A leading staffing and workforce solutions firm delivering top talent to Fortune 500 clients across IT, engineering, and professional services.',
      achievements: [
        'Built recurring reporting and dashboards in Power BI and SQL tracking funnel KPIs across 200+ roles, monitoring time-to-fill, candidate-to-interview rate, and offer acceptance',
        'Tested sourcing strategies using A/B-style comparisons and logistic regression, improving interview attendance from 12% to 22%',
        'Identified a 35% drop-off between sourcing and phone screen stages, then delivered findings to 12 hiring managers that supported process changes reducing time-to-fill from 45 to 31 days',
        'Integrated Greenhouse, Lever, and ATS data through Python-SQL ETL pipelines and consolidated reporting into a single Power BI semantic model to reduce discrepancies'
      ],
      technologies: ['Power BI', 'SQL', 'Python', 'A/B Testing', 'Logistic Regression', 'ETL Pipelines']
    },
    {
      company: 'Pace Infotech',
      role: 'Data Analyst',
      period: 'Aug 2021 - Aug 2022',
      location: 'India',
      type: 'Full-time',
      description: 'Built Tableau dashboards for operational performance and SLA compliance monitoring across 50 accounts.',
      companyDescription: 'An IT services startup specializing in managed infrastructure, data analytics, and customized business solutions for global clients.',
      achievements: [
        'Built Tableau dashboards to monitor operational performance and SLA compliance across 50 accounts, reducing reporting lag by 6 hours for operations managers',
        'Investigated discrepancies through root-cause analysis on 200+ false alerts using SQL profiling and performance tuning, eliminating 60% of noise and saving 15 hours per week',
        'Automated daily data quality audits for 10K+ SLA logs in Python, flagging 12 high-severity anomalies tied to contract penalties and supporting exception triage'
      ],
      technologies: ['Tableau', 'SQL', 'Python', 'SLA Monitoring', 'Data Validation', 'Root Cause Analysis']
    },
    {
      company: 'Visvesvaraya Technological University',
      role: 'Data Analyst Intern',
      period: 'Jul 2020 - Jul 2021',
      location: 'India',
      type: 'Internship',
      description: 'Developed Power BI dashboards for admissions analytics and modeled scholarship allocation using statistical methods.',
      companyDescription: 'One of India\'s premier technical universities, fostering innovation through engineering education and applied research.',
      achievements: [
        'Developed Power BI dashboards segmenting 5,000+ applicants by GPA and location, boosting enrollment conversion from 34% to 38% by highlighting high-potential segments',
        'Modeled GPA vs. scholarship allocation using linear regression in R, providing insights that guided scholarship allocation decisions'
      ],
      technologies: ['Power BI', 'R', 'Linear Regression', 'SQL', 'Statistical Analysis']
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
    <section id="experience" className="py-20 bg-secondary/30 relative overflow-hidden">
      <ParallaxSection speed={0.3} className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-tr from-secondary/20 to-primary/5" />
      </ParallaxSection>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-emphasis">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through data analytics roles where I've consistently delivered business value through innovative data solutions.
            </p>
          </FadeIn>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 shadow-medium hover:scale-125 hover:shadow-[0_0_15px_hsl(var(--primary))] transition-all duration-300" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="glass-card hover-lift hover-glow border-2 border-primary/20 shadow-soft hover:shadow-medium transition-all duration-500 group">
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
                        <Badge className="glass-effect text-primary border-primary/20 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
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
                          <Badge key={idx} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary/30 hover:scale-105 transition-all duration-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    </Card>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Education */}
            <FadeIn delay={0.4}>
              <Card className="glass-card border-2 border-primary/20 shadow-soft hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-primary-emphasis">Education</h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 hover:translate-x-1 transition-all duration-200">
                        <h4 className="font-semibold hover:text-primary transition-colors">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Certifications */}
            <FadeIn delay={0.5}>
              <Card className="glass-card border-2 border-primary/20 shadow-soft hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6 text-primary-emphasis">Certifications</h3>
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center hover:translate-x-1 transition-transform duration-200">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 hover:shadow-[0_0_10px_hsl(var(--primary))] transition-shadow" />
                        <span className="text-muted-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
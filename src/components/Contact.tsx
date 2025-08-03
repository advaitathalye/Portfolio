import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'advaiitathalye@gmail.com',
      href: 'mailto:advaiitathalye@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '216-972-3772',
      href: 'tel:+12169723772'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cleveland, Ohio (Open to relocation)',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/advaitathalye',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/advaitathalye',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss how data analytics can drive your business forward? I'm authorized to work in the US (F1 OPT) 
              and open to opportunities in high-growth startups and data-driven companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="gradient-card shadow-soft">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-smooth group"
                    >
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-primary transition-smooth">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="gradient-card shadow-soft">
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 transition-smooth shadow-soft hover:shadow-medium group ${social.color}`}
                      >
                        <social.icon className="w-6 h-6 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Resume Download */}
              <Card className="gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-4">Download My Resume</h3>
                    <a href="/resume.pdf" download>
                      <Button className="w-full shadow-medium hover:shadow-large transition-all duration-300">
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF Resume
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="gradient-card shadow-soft">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required
                        className="shadow-soft focus:shadow-medium transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required
                        className="shadow-soft focus:shadow-medium transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      className="shadow-soft focus:shadow-medium transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      className="shadow-soft focus:shadow-medium transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Project Collaboration" 
                      required
                      className="shadow-soft focus:shadow-medium transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5}
                      placeholder="Tell me about your project or how we can work together..."
                      required
                      className="shadow-soft focus:shadow-medium transition-all duration-300"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full shadow-medium hover:shadow-large transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Data?</h3>
              <p className="text-muted-foreground mb-8">
                Whether you need marketing attribution analysis, BI dashboard automation, or statistical modeling for business optimization, 
                I specialize in turning complex data challenges into growth opportunities. Currently available for full-time roles and consulting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:advaiitathalye@gmail.com">
                  <Button size="lg" className="shadow-medium hover:shadow-large transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </Button>
                </a>
                <a href="/resume.pdf" download>
                  <Button variant="outline" size="lg" className="shadow-soft hover:shadow-medium transition-all duration-300">
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
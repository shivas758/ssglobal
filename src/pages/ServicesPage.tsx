import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Search, 
  DollarSign, 
  Users, 
  GraduationCap, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Shield,
  TrendingUp
} from 'lucide-react';

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Search,
      title: 'Recruiting & Talent Acquisition',
      description: 'Connect with top talent through our comprehensive recruitment services.',
      features: [
        'Access to a large talent pool',
        'Streamlined hiring process',
        'Expertise in various industries',
        'Pre-screening and assessment',
        'Cultural fit evaluation'
      ],
      benefits: ['Reduced time-to-hire', 'Higher quality candidates', 'Lower recruitment costs']
    },
    {
      icon: DollarSign,
      title: 'Payroll Services',
      description: 'Comprehensive payroll management solutions for businesses of all sizes.',
      features: [
        'Accurate and timely payroll processing',
        'Tax compliance and reporting',
        'Employee benefits management',
        'Direct deposit setup',
        'Year-end tax document preparation'
      ],
      benefits: ['100% accuracy guarantee', 'Compliance assurance', 'Time savings']
    },
    {
      icon: Users,
      title: 'Staffing Solutions',
      description: 'Flexible staffing options to meet your temporary and permanent workforce needs.',
      features: [
        'Temporary staffing',
        'Permanent placement',
        'Contract-to-hire options',
        'Fast deployment of staff',
        'Expertise in diverse sectors'
      ],
      benefits: ['Scalable workforce', 'Reduced hiring risks', 'Operational flexibility']
    },
    {
      icon: GraduationCap,
      title: 'Employee Training & Development',
      description: 'Customized training programs to enhance your workforce capabilities.',
      features: [
        'Customized training programs',
        'Skills assessment and gap analysis',
        'Leadership development',
        'Technical skill enhancement',
        'Career development planning'
      ],
      benefits: ['Improved performance', 'Higher retention', 'Succession planning']
    },
    {
      icon: MessageSquare,
      title: 'Consulting & HR Advisory',
      description: 'Strategic HR consulting to optimize your human resources operations.',
      features: [
        'HR process optimization',
        'Employee engagement strategies',
        'Compliance consulting',
        'Organizational development',
        'Performance management systems'
      ],
      benefits: ['Operational efficiency', 'Risk mitigation', 'Strategic alignment']
    }
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'We understand your unique business needs and challenges.'
    },
    {
      icon: TrendingUp,
      title: 'Strategy',
      description: 'We develop a customized solution tailored to your requirements.'
    },
    {
      icon: Shield,
      title: 'Implementation',
      description: 'We execute the solution with precision and attention to detail.'
    },
    {
      icon: Clock,
      title: 'Support',
      description: 'We provide ongoing support to ensure long-term success.'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">Comprehensive HR Services</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                to Meet Your Business Needs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From talent acquisition to payroll management, we provide end-to-end workforce solutions 
              that help your business thrive in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className="p-12 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="hero" className="group" asChild>
                        <Link to="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className={`bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground">Benefits</h3>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                              <div className="bg-accent/20 p-2 rounded-full">
                                <TrendingUp className="h-4 w-4 text-accent" />
                              </div>
                              <span className="font-medium text-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-medium text-accent">Our Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process ensures successful outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how our comprehensive HR services can help your business achieve its goals.
            </p>
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ServicesPage;
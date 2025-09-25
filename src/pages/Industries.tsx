import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  ShoppingCart, 
  Settings, 
  Calculator, 
  Wrench, 
  HardHat,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Monitor,
      title: 'Information Technology',
      description: 'Specialized IT talent for software development, cybersecurity, cloud computing, and digital transformation initiatives.',
      specialties: ['Software Engineers', 'DevOps Specialists', 'Data Scientists', 'Cybersecurity Experts']
    },
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Customer-focused professionals for both brick-and-mortar and e-commerce retail operations.',
      specialties: ['Store Managers', 'Sales Associates', 'E-commerce Specialists', 'Customer Service Reps']
    },
    {
      icon: Settings,
      title: 'Manufacturing',
      description: 'Skilled workers and technical professionals for production, quality control, and process optimization.',
      specialties: ['Production Managers', 'Quality Control', 'Machine Operators', 'Process Engineers']
    },
    {
      icon: Calculator,
      title: 'Finance & Accounting',
      description: 'Financial professionals with expertise in accounting, analysis, compliance, and strategic planning.',
      specialties: ['Accountants', 'Financial Analysts', 'Controllers', 'Compliance Officers']
    },
    {
      icon: Wrench,
      title: 'Engineering',
      description: 'Technical experts across various engineering disciplines for design, development, and innovation.',
      specialties: ['Mechanical Engineers', 'Electrical Engineers', 'Civil Engineers', 'Project Managers']
    },
    {
      icon: HardHat,
      title: 'Construction',
      description: 'Skilled tradespeople and project professionals for residential and commercial construction projects.',
      specialties: ['Project Managers', 'Site Supervisors', 'Skilled Trades', 'Safety Coordinators']
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Industries We Serve</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">Tailored Solutions</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                for Every Industry
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At SS Global Solutions, we understand that each industry has unique needs when it comes to 
              talent and workforce management. We've partnered with businesses in various sectors to 
              provide specialized HR services tailored to their specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Key Specialties
                    </h4>
                    <ul className="space-y-2">
                      {industry.specialties.map((specialty, specialtyIndex) => (
                        <li key={specialtyIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                          <span className="text-sm text-muted-foreground">{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium text-accent">Industry Expertise</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Why Industry Expertise Matters
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each industry has its own unique challenges, requirements, and culture. Our deep understanding 
                of these nuances allows us to provide more effective workforce solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Industry-Specific Knowledge</h3>
                    <p className="text-muted-foreground">We understand the specific skills, certifications, and experience required for each sector.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">We stay current with industry regulations and compliance requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Market Insights</h3>
                    <p className="text-muted-foreground">Our industry expertise provides valuable market intelligence and trends.</p>
                  </div>
                </div>
              </div>
              
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/contact">
                  Discuss Your Industry Needs
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Industries Served</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-2">5K+</div>
                    <div className="text-sm text-muted-foreground">Successful Placements</div>
                  </div>
                  <div className="text-center p-4 bg-background/50 rounded-xl">
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Find Industry-Specific Talent?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how our industry expertise can help you find the right talent for your specific sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Industries;

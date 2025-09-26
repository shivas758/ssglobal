import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Award, 
  TrendingUp, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  DollarSign,
  BookOpen,
  Coffee
} from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and comprehensive benefits packages to attract and retain top talent.'
    },
    {
      icon: TrendingUp,
      title: 'Opportunities for Growth',
      description: 'Clear career progression paths with mentorship programs and leadership development opportunities.'
    },
    {
      icon: Coffee,
      title: 'Supportive Culture',
      description: 'A collaborative and inclusive work environment where your ideas are valued and your contributions recognized.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Professional development opportunities, training programs, and conference attendance support.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior Recruitment Consultant',
      department: 'Talent Acquisition',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Lead talent acquisition efforts for our technology and finance clients. Minimum 5 years experience required.'
    },
    {
      title: 'HR Business Partner',
      department: 'Human Resources',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Partner with business leaders to align HR strategy with business objectives. Strong analytical skills required.'
    },
    {
      title: 'Payroll Specialist',
      department: 'Payroll Services',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Manage end-to-end payroll processing for multiple clients. Experience with payroll systems essential.'
    },
    {
      title: 'Training Coordinator',
      department: 'Learning & Development',
      location: 'Hyderabad',
      type: 'Contract',
      description: 'Coordinate and deliver training programs for client organizations. Instructional design background preferred.'
    }
  ];

  const values = [
    'Right fit. Right role. Right results.',
    'Excellence in everything we do',
    'Building lasting partnerships',
    'Continuous innovation and improvement'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-down animate-delay-200">
              <Award className="h-5 w-5 text-primary mr-3 animate-pulse-scale" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Join Our Team</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold animate-fade-in-up animate-delay-300">
              <span className="text-foreground">Build Your Career</span>
              <br />
              <span className="tehno-gradient-text animate-float">
                with SS Global Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
              At SS Global Solutions, we're always looking for passionate, driven individuals to join our team. 
              If you're looking for a dynamic environment where you can make a difference, explore our current opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work with Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground animate-fade-in-down">
              What Makes <span className="tehno-gradient-text">Us Different</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              We believe in creating an environment where our team members can thrive and make a meaningful impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group tehno-card-hover bg-white border border-border text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300 tehno-icon-hover">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                What We <span className="tehno-gradient-text">Stand For</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our values guide everything we do and shape the culture we've built at SS Global Solutions.
              </p>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-primary/10 p-2 rounded-lg shrink-0 tehno-icon-hover">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground tehno-text-hover">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 animate-slide-in-right tehno-card-hover">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Employee Testimonial</h3>
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                  "Working at SS Global Solutions has been incredibly rewarding. The company truly cares about 
                  professional development and provides opportunities to work with diverse clients across various 
                  industries. The collaborative culture makes every day enjoyable."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 tehno-gradient rounded-full flex items-center justify-center animate-pulse-scale">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Anita Sharma</div>
                    <div className="text-sm text-muted-foreground">Senior Recruitment Consultant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our growing team and help us deliver exceptional HR solutions to businesses worldwide.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-2 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <Button variant="hero" className="w-full group" asChild>
                        <Link to="/contact">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're always interested in connecting with talented professionals. Send us your resume and we'll 
              keep you in mind for future opportunities.
            </p>
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/contact">
                Submit Your Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
    </>
  );
};

export default Careers;

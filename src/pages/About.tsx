import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, CheckCircle, Users, Trophy, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team consists of HR professionals with extensive experience in talent acquisition and workforce management.',
    },
    {
      icon: Trophy,
      title: 'Tailored Solutions',
      description: 'We offer custom solutions to meet the specific needs of your business across various industries.',
    },
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'We focus on building long-lasting relationships with our clients through transparency, reliability, and results.',
    },
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
              <span className="text-sm font-medium text-primary">Who We Are</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">About</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SS Global Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              SS Global Solutions is a full-service HR solutions provider specializing in recruitment, payroll, 
              staffing, training, and talent acquisition. With years of experience in optimizing workforce 
              management, we offer tailored services that meet the unique needs of businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl w-fit">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To connect companies with top talent and help them manage their workforce more efficiently, 
                  fostering sustainable growth and long-term success for both employers and employees.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 rounded-xl w-fit">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in HR solutions, delivering exceptional service and long-term success 
                  for our clients and employees through innovative workforce management strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional HR solutions 
              that drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">500+</div>
              <div className="text-muted-foreground">Companies Served</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">5K+</div>
              <div className="text-muted-foreground">Talent Placed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Trophy, Heart } from 'lucide-react';

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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-down">
              About <span className="tehno-gradient-text">SS Global Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up animate-delay-200">
              SS Global Solutions is a full-service HR solutions provider specializing in recruitment, payroll, 
              staffing, training, and talent acquisition. With years of experience in optimizing workforce 
              management, we offer tailored services that meet the unique needs of businesses across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white border border-border tehno-card-hover group animate-slide-in-left">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 p-4 rounded-xl w-fit group-hover:bg-primary/20 transition-colors duration-300 tehno-icon-hover">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  To connect companies with top talent and help them manage their workforce more efficiently, 
                  fostering sustainable growth and long-term success for both employers and employees.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border tehno-card-hover group animate-slide-in-right">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 p-4 rounded-xl w-fit group-hover:bg-primary/20 transition-colors duration-300 tehno-icon-hover">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  To be the global leader in HR solutions, delivering exceptional service and long-term success 
                  for our clients and employees through innovative workforce management strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground animate-fade-in-down">
              What Sets <span className="tehno-gradient-text">Us Apart</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              We combine expertise, innovation, and dedication to deliver exceptional HR solutions 
              that drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-white border border-border tehno-card-hover group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300 tehno-icon-hover">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Companies Served</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5K+</div>
              <div className="text-muted-foreground">Talent Placed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
    </>
  );
};

export default About;

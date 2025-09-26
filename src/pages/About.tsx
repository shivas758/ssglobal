import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Trophy, Heart, Globe, Lightbulb, CheckCircle, ArrowRight, Zap } from 'lucide-react';

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

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white border border-border tehno-card-hover group animate-fade-in-up">
              <CardContent className="p-12 space-y-8">
                <div className="text-center space-y-6">
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300 tehno-icon-hover">
                    <Eye className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    OUR <span className="tehno-gradient-text">VISION</span>
                  </h2>
                  <h3 className="text-2xl font-semibold text-primary">Leading the Way in Digital Transformation</h3>
                </div>
                
                <div className="space-y-6 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    Our vision is to become a globally trusted software consultancy that transforms how businesses think, operate, and grow using technology.
                    We aim to be at the forefront of innovation - delivering not just solutions, but meaningful change.
                  </p>
                  
                  <div className="py-8">
                    <h4 className="text-xl font-bold text-foreground mb-6">WE ENVISION A FUTURE WHERE:</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-start space-x-3 text-left">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Every business, big or small, has access to advanced tech</span>
                      </div>
                      <div className="flex items-start space-x-3 text-left">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Software isn't complex, but intuitive and impactful</span>
                      </div>
                      <div className="flex items-start space-x-3 text-left">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Clients see us not just as service providers, but as long-term partners</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground">
                      At SS Marketing and Software Solutions we are building that future one solution, one relationship, and one breakthrough at a time.
                    </p>
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                      <Lightbulb className="h-5 w-5 text-primary mr-3" />
                      <span className="text-primary font-semibold italic">"Innovating today for a smarter tomorrow."</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white border border-border tehno-card-hover group animate-fade-in-up animate-delay-200">
              <CardContent className="p-12 space-y-8">
                <div className="text-center space-y-6">
                  <div className="bg-primary/10 p-4 rounded-xl w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300 tehno-icon-hover">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    OUR <span className="tehno-gradient-text">MISSION</span>
                  </h2>
                  <h3 className="text-2xl font-semibold text-primary">Empowering Business Through Technology</h3>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                    At SS Marketing and Software Solutions, our mission is simple yet powerful: to empower businesses with intelligent, reliable, and scalable software solutions.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                    We believe that technology is not just a tool, but a catalyst for growth. That's why we focus on building systems that solve real problems, drive innovation, and help businesses evolve in today's competitive digital landscape.
                  </p>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                    <p className="text-lg font-semibold text-foreground text-center">
                      Whether you're a startup seeking direction or an enterprise aiming for efficiency, we are here to:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-medium">Understand your goals and challenges</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Lightbulb className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-medium">Provide expert software consultation</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-muted-foreground font-medium">Develop tailor-made digital solutions</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                      <Target className="h-5 w-5 text-primary mr-3" />
                      <span className="text-primary font-semibold italic">"Your success is our mission."</span>
                    </div>
                  </div>
                </div>
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


      
      <Footer />
      </div>
    </>
  );
};

export default About;

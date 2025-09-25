import { Card, CardContent } from '@/components/ui/card';
import { Search, DollarSign, Users, GraduationCap, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Recruiting & Talent Acquisition',
      description: 'Access to a large talent pool with streamlined hiring process and expertise across various industries.',
    },
    {
      icon: DollarSign,
      title: 'Payroll Services',
      description: 'Accurate and timely payroll processing, tax compliance and reporting, plus employee benefits management.',
    },
    {
      icon: Users,
      title: 'Staffing Solutions',
      description: 'Flexible staffing options for temporary and permanent positions with fast deployment across diverse sectors.',
    },
    {
      icon: GraduationCap,
      title: 'Employee Training & Development',
      description: 'Customized training programs to improve employee performance and retain top talent through career development.',
    },
    {
      icon: MessageSquare,
      title: 'Consulting & HR Advisory',
      description: 'Optimize HR processes, improve employee engagement, and create efficient HR strategies tailored to your business.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary">Core Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive HR Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end workforce solutions to help your business thrive in today's competitive market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 space-y-4">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
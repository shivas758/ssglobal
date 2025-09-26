import { Search, DollarSign, Users, GraduationCap, MessageSquare, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Recruiting & Talent Acquisition',
      description: 'Access to a large talent pool with streamlined hiring process and expertise across various industries.'
    },
    {
      icon: DollarSign,
      title: 'Payroll Services',
      description: 'Accurate and timely payroll processing, tax compliance and reporting, plus employee benefits management.'
    },
    {
      icon: Users,
      title: 'Staffing Solutions',
      description: 'Flexible staffing options for temporary and permanent positions with fast deployment across diverse sectors.'
    },
    {
      icon: GraduationCap,
      title: 'Employee Training & Development',
      description: 'Customized training programs to improve employee performance and retain top talent through career development.'
    },
    {
      icon: MessageSquare,
      title: 'Consulting & HR Advisory',
      description: 'Optimize HR processes, improve employee engagement, and create efficient HR strategies tailored to your business.'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-down">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="tehno-gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            We provide end-to-end workforce solutions to help your business thrive in today's competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-border p-8 rounded-2xl tehno-card-hover group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with hover effects */}
              <div className="bg-primary/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors duration-300 tehno-icon-hover">
                <service.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 mt-4">
                <span className="text-sm font-semibold uppercase tracking-wider mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
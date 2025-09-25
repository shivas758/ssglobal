import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Users,
  Target
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interested In: ${formData.service}

Message:
${formData.message}
    `;
    
    const mailtoUrl = `mailto:info@ssglobalsolutions.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ssglobalsolutions.in',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '7702316600,7702326600',
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '3rd floor, 301 sameeeksha builders and developers, Raghavendra nagar colony, bagayath, uppal, Hyderabad, Telangana, 500039',
      description: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 5:00 PM',
      description: 'We\'re here to help'
    }
  ];

  const services = [
    'Recruiting & Talent Acquisition',
    'Payroll Services',
    'Staffing Solutions',
    'Employee Training & Development',
    'Consulting & HR Advisory',
    'Other'
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
              <MessageSquare className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Let's Connect</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">Get in Touch</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you need talent, assistance with payroll, or want to learn more about our training programs, 
              we're here to help. Get in touch today, and let's discuss how we can support your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your requirements..." 
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full group">
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Reach out to us through any of these channels. We're always ready to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <p className="text-lg font-medium text-foreground">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-bold text-foreground">Visit Our Office</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Hyderabad, we're easily accessible and ready to meet in person.
            </p>
          </div>

          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-bold text-foreground">SS Global Solutions</h3>
                  <p className="text-lg text-muted-foreground">Hyderabad, Telangana</p>
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      </div>
    </>
  );
};

export default Contact;

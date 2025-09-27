import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  Coffee,
  X,
  Upload,
  Send
} from 'lucide-react';

const Careers = () => {
  const [applicationForm, setApplicationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const [resumeForm, setResumeForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleApplicationSubmit = (e: React.FormEvent, positionTitle: string) => {
    e.preventDefault();
    
    const subject = `Job Application for ${positionTitle} - ${applicationForm.firstName} ${applicationForm.lastName}`;
    const body = `
Name: ${applicationForm.firstName} ${applicationForm.lastName}
Email: ${applicationForm.email}
Phone: ${applicationForm.phone}
Position Applied For: ${positionTitle}
Years of Experience: ${applicationForm.experience}

Cover Letter:
${applicationForm.coverLetter}
    `;
    
    const mailtoUrl = `mailto:careers@ssglobalsolutions.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Resume Submission - ${resumeForm.name}`;
    const body = `
Name: ${resumeForm.name}
Email: ${resumeForm.email}
Phone: ${resumeForm.phone}

Please find my resume attached.
    `;
    
    const mailtoUrl = `mailto:careers@ssglobalsolutions.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

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
            
            <div className="relative overflow-hidden rounded-2xl animate-slide-in-right tehno-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Professional Team Collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-lg font-bold text-foreground mb-2">Join Our Team</h3>
                  <p className="text-sm text-muted-foreground">Be part of a dynamic and innovative workplace</p>
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full group tehno-gradient hover:shadow-lg hover:shadow-primary/30 text-white font-semibold">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Apply for {position.title}</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={(e) => handleApplicationSubmit(e, position.title)} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input 
                                  id="firstName" 
                                  value={applicationForm.firstName}
                                  onChange={(e) => setApplicationForm({...applicationForm, firstName: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input 
                                  id="lastName" 
                                  value={applicationForm.lastName}
                                  onChange={(e) => setApplicationForm({...applicationForm, lastName: e.target.value})}
                                  required
                                />
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input 
                                id="email" 
                                type="email"
                                value={applicationForm.email}
                                onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone</Label>
                              <Input 
                                id="phone" 
                                value={applicationForm.phone}
                                onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="experience">Years of Experience</Label>
                              <Input 
                                id="experience" 
                                value={applicationForm.experience}
                                onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="coverLetter">Cover Letter</Label>
                              <Textarea 
                                id="coverLetter"
                                rows={4}
                                value={applicationForm.coverLetter}
                                onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                                placeholder="Tell us why you're interested in this position..."
                                required
                              />
                            </div>
                            <Button type="submit" className="w-full tehno-gradient">
                              <Send className="mr-2 h-4 w-4" />
                              Send Application
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="group tehno-gradient hover:shadow-lg hover:shadow-primary/30 text-white font-semibold px-8 py-4">
                  <Upload className="mr-2 h-5 w-5" />
                  Submit Your Resume
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Submit Your Resume</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleResumeSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="resumeName">Full Name</Label>
                    <Input 
                      id="resumeName" 
                      value={resumeForm.name}
                      onChange={(e) => setResumeForm({...resumeForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="resumeEmail">Email</Label>
                    <Input 
                      id="resumeEmail" 
                      type="email"
                      value={resumeForm.email}
                      onChange={(e) => setResumeForm({...resumeForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="resumePhone">Phone</Label>
                    <Input 
                      id="resumePhone" 
                      value={resumeForm.phone}
                      onChange={(e) => setResumeForm({...resumeForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume Upload</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-sm text-muted-foreground">
                        Please attach your resume to the email that will be opened
                      </p>
                    </div>
                  </div>
                  <Button type="submit" className="w-full tehno-gradient">
                    <Send className="mr-2 h-4 w-4" />
                    Send Resume
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      
      <Footer />
      </div>
    </>
  );
};

export default Careers;

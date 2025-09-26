import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Play, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-business-team.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional Business Team" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/95"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-left space-y-12">
            {/* Welcome badge - Animated */}
            <div className="animate-fade-in-down animate-delay-200 inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <Award className="h-5 w-5 text-primary mr-3 animate-pulse-scale" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">WELCOME TO SS GLOBAL</span>
            </div>

            {/* Main heading - Tehno style with animations */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animate-delay-300">
                <span className="tehno-gradient-text animate-float">Empowering Businesses with Seamless Workforce Solutions</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up animate-delay-400">
                SS Global Solutions delivers comprehensive HR solutions including staffing, recruiting, training, and payroll services. 
                Partner with us to build exceptional workforces and drive business success.
              </p>
            </div>

            {/* CTA Buttons - Tehno style with hover effects */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in-up animate-delay-500">
              <Button 
                size="lg" 
                className="tehno-gradient hover:shadow-lg hover:shadow-primary/30 text-white px-10 py-6 text-lg font-semibold rounded-xl tehno-button-hover group" 
                asChild
              >
                <a href="tel:+917702316600" className="flex items-center justify-center">
                  <Phone className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                  Get Started
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-lg font-semibold rounded-xl tehno-button-hover group" 
                asChild
              >
                <Link to="/services" className="flex items-center justify-center">
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in animate-delay-300">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional Business Team" 
                className="w-full h-auto rounded-3xl shadow-2xl animate-float"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl"></div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 shadow-xl animate-fade-in-up animate-delay-700">
                <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
              </div>
              
              {/* Another floating element */}
              <div className="absolute -bottom-6 -left-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-3 shadow-xl animate-fade-in-up animate-delay-800">
                <div className="w-6 h-6 bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>



        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse-scale"></div>
      </div>
    </section>
  );
};

export default Hero;
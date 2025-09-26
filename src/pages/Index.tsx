import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      
      {/* Enhanced Why Choose Us Section */}
      <section className="py-32 animated-bg relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center px-8 py-4 rounded-full glass-effect border border-primary/30 group hover:border-primary/60 transition-all duration-300">
              <Award className="h-6 w-6 text-primary mr-3 animate-pulse" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
              Excellence in Every <span className="gradient-text">Partnership</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="tehno-card p-10 text-center space-y-8 group hover:shadow-lg transition-shadow duration-300">
              <div className="tehno-gradient p-6 rounded-2xl w-fit mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">Over 500 successful partnerships across diverse industries with a 95% client satisfaction rate.</p>
            </div>
            
            <div className="tehno-card p-10 text-center space-y-8 group hover:shadow-lg transition-shadow duration-300">
              <div className="tehno-gradient p-6 rounded-2xl w-fit mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Expert Team</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">Certified HR professionals with deep industry knowledge and years of experience.</p>
            </div>
            
            <div className="tehno-card p-10 text-center space-y-8 group hover:shadow-lg transition-shadow duration-300">
              <div className="tehno-gradient p-6 rounded-2xl w-fit mx-auto">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Tailored Solutions</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">Customized HR strategies designed to meet your unique business needs and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 animated-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-6 h-6 border-2 border-accent/40 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-accent/50 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-300"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Ready to Transform Your <span className="gradient-text">Workforce?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Let's discuss how SS Global Solutions can help your business achieve its goals through strategic workforce management.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Button 
                size="lg" 
                className="relative tehno-btn bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-semibold rounded-xl border border-primary/20 shadow-lg hover:shadow-primary/25 hover:shadow-2xl transition-all duration-300 group" 
                asChild
              >
                <Link to="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="relative tehno-btn border-2 border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground px-12 py-6 text-xl font-semibold rounded-xl glass-effect hover:border-primary transition-all duration-300" 
                asChild
              >
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>

            {/* Additional visual elements */}
            <div className="pt-16">
              <div className="inline-flex items-center space-x-8 opacity-60">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Join 500+ Companies</span>
                <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

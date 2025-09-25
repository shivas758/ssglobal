import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Award className="h-4 w-4 text-accent mr-2" />
              <span className="text-sm font-medium text-accent">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Excellence in Every Partnership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl w-fit mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Proven Track Record</h3>
              <p className="text-muted-foreground">Over 500 successful partnerships across diverse industries with a 95% client satisfaction rate.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl w-fit mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Expert Team</h3>
              <p className="text-muted-foreground">Certified HR professionals with deep industry knowledge and years of experience.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl w-fit mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Tailored Solutions</h3>
              <p className="text-muted-foreground">Customized HR strategies designed to meet your unique business needs and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how SS Global Solutions can help your business achieve its goals through strategic workforce management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="relative animated-bg border-t border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Enhanced Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center group">
              <img
                src={logo}
                alt="SS Global Solutions Logo"
                className="h-20 w-auto object-contain select-none transition-all duration-200"
                loading="lazy"
                draggable={false}
              />
              <div className="flex flex-col -ml-3">
                <span className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300">SS GLOBAL</span>
                <span className="text-xs text-muted-foreground -mt-1 uppercase tracking-[0.45em] font-medium">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Comprehensive staffing, recruiting, training, and payroll services that help businesses thrive through strategic workforce solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1KgEsoZh17/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Button size="sm" variant="ghost" className="tehno-card p-3 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 group">
                  <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/ss_global_solutions.in?igsh=MTcyZXA0bjJ4ZWo2aQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Button size="sm" variant="ghost" className="tehno-card p-3 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 group">
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/company/ss-global-solutions-in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button size="sm" variant="ghost" className="tehno-card p-3 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 group">
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-foreground relative">
              Quick Link
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />Services</Link></li>
              <li><Link to="/industries" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />Industries</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"><ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />Contact</Link></li>
            </ul>
          </div>

          {/* Enhanced Our Services */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-foreground relative">
              Our Service
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Recruiting & Talent Acquisition</li>
              <li className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Payroll Services</li>
              <li className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Staffing Solutions</li>
              <li className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">Employee Training</li>
              <li className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">HR Consulting</li>
            </ul>
          </div>

          {/* Enhanced Contact & Newsletter */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-foreground relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="tehno-gradient p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-lg">+91 7702316600</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="tehno-gradient p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-lg">info@ssglobalsolutions.in</span>
              </div>
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="tehno-gradient p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-white mt-0.5" />
                </div>
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300 text-lg">India</span>
              </div>
            </div>


          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-border/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-lg">
              © 2024 <span className="gradient-text font-semibold">SS Global Solutions</span>. All rights reserved.
            </p>
            <p className="text-muted-foreground">
              Built with excellence for your workforce success. <span className="text-primary">🚀</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
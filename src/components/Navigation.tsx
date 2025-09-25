import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Users, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-2 rounded-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">SS Global Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="tel:+917702316600">
                <Phone className="h-4 w-4 mr-2" />
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-effect border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary hover:bg-muted/50 rounded-lg ${
                    isActive(item.path) ? 'text-primary bg-muted/30' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a href="tel:+917702316600" onClick={() => setIsOpen(false)}>
                    <Phone className="h-4 w-4 mr-2" />
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
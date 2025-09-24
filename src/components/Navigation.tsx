"use client";

import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            Linq
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('menupro')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              MenuPro
            </button>
            <button 
              onClick={() => scrollToSection('mainstreet')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mainstreet
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('menupro')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                MenuPro
              </button>
              <button 
                onClick={() => scrollToSection('mainstreet')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Mainstreet
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button className="justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
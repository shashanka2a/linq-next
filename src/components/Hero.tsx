"use client";

import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary to-primary/80 text-primary-foreground pt-16">
      {/* Content */}
      <div className="container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Connecting SMBs to
            <span className="block text-secondary">Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Digital solutions that help small businesses grow revenue and streamline operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection('solutions')}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => scrollToSection('menupro')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
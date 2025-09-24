"use client";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Brand Story Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <p className="text-lg mb-6 text-primary-foreground/90 leading-relaxed">
              Founded with a mission to empower small and medium businesses, Linq brings together innovative solutions that remove barriers to growth. We believe every business deserves access to enterprise-level tools that drive success.
            </p>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              From digital transformation to payment processing, we&apos;re committed to helping SMBs thrive in an increasingly competitive landscape.
            </p>
          </div>
          
          <div className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Ready to Grow?</h3>
            <p className="mb-6 text-primary-foreground/90">
              Join thousands of businesses already using Linq solutions to accelerate their growth.
            </p>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Contact & Links Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/70" />
                <span className="text-primary-foreground/90">hello@linq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/70" />
                <span className="text-primary-foreground/90">1-800-LINQ-SMB</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70" />
                <span className="text-primary-foreground/90">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* MenuPro Links */}
          <div>
            <h4 className="font-semibold mb-4">MenuPro</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Digital Menus
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Reservations
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Analytics
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* Mainstreet Links */}
          <div>
            <h4 className="font-semibold mb-4">Mainstreet</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Payments
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Bookings
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Security
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                API Docs
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                About Us
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Careers
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Support
              </a>
              <a href="#" className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-2xl font-bold">Linq</div>
            <span className="text-primary-foreground/70">© 2025 Linq. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
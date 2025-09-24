"use client";

import { Card, CardContent } from "./ui/card";
import { QrCode, CreditCard, BarChart3, Shield, Users, Zap } from "lucide-react";

export function FeaturesOverview() {
  const features = [
    {
      icon: QrCode,
      title: "Digital Transformation",
      description: "Modernize your business with contactless solutions that customers love",
      color: "bg-blue-500"
    },
    {
      icon: CreditCard,
      title: "Unified Payments",
      description: "Accept all payment types with competitive rates and instant processing",
      color: "bg-green-500"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Make data-driven decisions with real-time analytics and insights",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Build lasting relationships with integrated CRM and loyalty programs",
      color: "bg-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protects your business and customer data",
      color: "bg-red-500"
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows effortlessly",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed specifically for small and medium businesses ready to scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-8">
                <div className={`${feature.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to see how these features work together?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors text-lg">
            Explore Our Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
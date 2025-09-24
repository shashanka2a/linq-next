"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CreditCard, Shield, BarChart3, Clock } from "lucide-react";

export function MainstreetSection() {
  const features = [
    {
      icon: CreditCard,
      title: "Unified Payments",
      description: "Accept all payment types with competitive rates"
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "Bank-grade security with fraud protection"
    },
    {
      icon: BarChart3,
      title: "Financial Insights",
      description: "Real-time reporting and cash flow management"
    },
    {
      icon: Clock,
      title: "Quick Bookings",
      description: "Streamlined appointment and service booking"
    }
  ];

  return (
    <section id="mainstreet" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1726137569854-ce11cc10cf67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0bGVzcyUyMHBheW1lbnQlMjB0ZXJtaW5hbCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODcxODU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Contactless payment terminal"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6">
              Mainstreet
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Payments & Bookings
            </h2>
            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
              Simplify your business operations with integrated payment processing and booking management. Get paid faster while providing seamless customer experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground p-2 rounded-lg mt-1">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
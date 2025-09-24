"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QrCode, Calendar, Users, TrendingUp } from "lucide-react";

export function MenuProSection() {
  const features = [
    {
      icon: QrCode,
      title: "Digital Menus",
      description: "QR code-based menus that update instantly"
    },
    {
      icon: Calendar,
      title: "Smart Reservations",
      description: "Automated booking system with real-time availability"
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Track preferences and build lasting relationships"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Insights into menu performance and customer behavior"
    }
  ];

  return (
    <section id="menupro" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6">
              MenuPro
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Digital Menus &amp; Reservations
            </h2>
            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
              Transform your restaurant&apos;s customer experience with contactless digital menus and intelligent reservation management that drives revenue and reduces wait times.
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
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                View Demo
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwUVIlMjBjb2RlJTIwbWVudSUyMGN1c3RvbWVyfGVufDF8fHx8MTc1ODcxODU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Customer using QR code digital menu"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
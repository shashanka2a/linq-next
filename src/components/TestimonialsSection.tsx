"use client";

import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";
// ImageWithFallback intentionally not used on this section

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Owner, Bamboo Bistro",
      company: "MenuPro Customer",
      image: "https://images.unsplash.com/photo-1758599543111-a7ed48b8ad2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzU4NzE4NTg0fDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      content: "MenuPro transformed our customer experience. Digital menus reduced wait times by 60% and our reservation system is now completely automated. Revenue is up 35% since implementation.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "CEO, Urban Salon",
      company: "Mainstreet Customer",
      image: "https://images.unsplash.com/photo-1758599543136-5977bf2dd922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzU4NzE4NTg3fDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
      content: "Mainstreet's payment processing and booking system simplified our entire operation. We now handle 3x more appointments with half the administrative work.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Manager, Craft Coffee Co.",
      company: "Full Linq Suite",
      image: "https://images.unsplash.com/photo-1647483684830-7ddde27dcf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBvd25lciUyMHNtaWxpbmd8ZW58MXx8fHwxNzU4NzE4NTg5fDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral", 
      content: "Using both MenuPro and Mainstreet gave us a complete business solution. Our customers love the seamless experience, and we've seen our best quarter yet.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real businesses who&apos;ve transformed their operations with Linq
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join Them?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your growth journey today with a free consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Schedule Free Demo
              </button>
              <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
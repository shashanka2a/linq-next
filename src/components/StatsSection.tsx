import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Businesses Served",
      description: "SMBs trust our solutions"
    },
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Revenue Processed",
      description: "Secure transactions monthly"
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "Average Growth",
      description: "Revenue increase for clients"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of SMBs who have transformed their operations and accelerated growth with Linq
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
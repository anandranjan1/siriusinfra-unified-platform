import { Calculator, FileText, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Calculator,
    title: "CPQ",
    subtitle: "Configure, Price, Quote",
    description: "Streamline your sales process with intelligent product configuration, dynamic pricing rules, and automated quote generation.",
    highlights: ["Product Configuration", "Dynamic Pricing", "Quote Automation", "Approval Workflows"],
    color: "from-primary to-primary/60",
  },
  {
    icon: FileText,
    title: "CLM",
    subtitle: "Contract Lifecycle Management",
    description: "Manage your entire contract lifecycle from creation to renewal with smart templates, compliance tracking, and audit trails.",
    highlights: ["Contract Creation", "E-Signatures", "Compliance Tracking", "Renewal Alerts"],
    color: "from-accent to-accent/60",
  },
  {
    icon: Users,
    title: "CRM",
    subtitle: "Customer Relationship Management",
    description: "Build stronger customer relationships with unified customer data, pipeline management, and actionable analytics.",
    highlights: ["Lead Management", "Pipeline Tracking", "Customer Analytics", "360° View"],
    color: "from-chart-3 to-chart-3/60",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            All-in-One Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Three Powerful Modules,{" "}
            <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Siriusinfra brings together CPQ, CLM, and CRM into a unified platform, 
            eliminating data silos and creating seamless workflows across your entire organization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <span className="text-sm text-muted-foreground font-medium">
                {feature.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-1 mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {feature.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/products">
            <Button variant="hero" size="lg" className="group">
              Explore All Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, Rocket, Users, ArrowRight, Check,
  Briefcase, HeartPulse, Landmark, ShoppingCart,
  Factory, Plane, GraduationCap, Tv
} from "lucide-react";

const businessSizes = [
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise",
    subtitle: "1000+ employees",
    description: "Scalable solutions designed for complex organizational structures with advanced security, compliance, and customization options.",
    features: [
      "Unlimited users and storage",
      "Advanced security controls (SSO, SCIM)",
      "Custom integrations and APIs",
      "Dedicated success manager",
      "24/7 priority support",
      "On-premise deployment options",
    ],
  },
  {
    id: "midmarket",
    icon: Users,
    title: "Mid-Market",
    subtitle: "100-999 employees",
    description: "Powerful features with the flexibility to grow. Perfect for companies looking to standardize and scale their operations.",
    features: [
      "Up to 500 users",
      "Role-based access controls",
      "Standard integrations",
      "Onboarding assistance",
      "Business hours support",
      "Cloud deployment",
    ],
  },
  {
    id: "startups",
    icon: Rocket,
    title: "Startups",
    subtitle: "Under 100 employees",
    description: "Get started quickly with essential features and grow at your own pace with flexible pricing and easy upgrades.",
    features: [
      "Up to 50 users",
      "Core CPQ, CLM, CRM features",
      "Essential integrations",
      "Self-service onboarding",
      "Email support",
      "Cloud deployment",
    ],
  },
];

const industries = [
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Streamline proposals, contracts, and client management for consulting, legal, and accounting firms.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-compliant solutions for managing vendor contracts, equipment quotes, and patient relationships.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Secure, compliant platform for managing complex financial products, contracts, and client portfolios.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Unified pricing, supplier contracts, and customer data management for omnichannel commerce.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Complex product configuration, vendor management, and distributor relationship tools.",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Dynamic pricing, partner contracts, and guest relationship management solutions.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Enrollment management, vendor contracts, and stakeholder relationship tools for institutions.",
  },
  {
    icon: Tv,
    title: "Media & Entertainment",
    description: "Rights management, talent contracts, and audience relationship solutions.",
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 gradient-hero relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
                Tailored for Your{" "}
                <span className="text-gradient">Business Needs</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Whether you're a startup or a Fortune 500, Siriusinfra scales with you. 
                Find the perfect solution for your industry and business size.
              </p>
            </div>
          </div>
        </section>

        {/* Business Size Solutions */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Solutions by Business Size
              </h2>
              <p className="text-lg text-muted-foreground">
                Every organization is unique. We offer tailored packages to meet your specific needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {businessSizes.map((size) => (
                <div
                  key={size.id}
                  id={size.id}
                  className="group relative bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                    <size.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{size.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{size.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{size.description}</p>

                  <ul className="space-y-3 mb-8">
                    {size.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant="hero" className="w-full group">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section id="industries" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Deep expertise across verticals with pre-built templates, workflows, and integrations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <industry.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Not sure which solution is right for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team will help you find the perfect fit for your organization.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Talk to an Expert
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;

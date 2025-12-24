import { Shield, Zap, TrendingUp, Bot, Lock, Globe } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, role-based access controls, and comprehensive audit logs.",
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "99.99% uptime SLA with global CDN distribution ensuring sub-second response times worldwide.",
  },
  {
    icon: TrendingUp,
    title: "Infinite Scalability",
    description: "Auto-scaling infrastructure that grows with your business, from startup to Fortune 500.",
  },
  {
    icon: Bot,
    title: "AI-Powered Insights",
    description: "Machine learning models that predict trends, automate tasks, and surface actionable insights.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "Built-in compliance for GDPR, HIPAA, and SOX with automated policy enforcement.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Multi-region deployment with data residency options to meet local regulations.",
  },
];

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50M+", label: "Contracts Processed" },
  { value: "150+", label: "Countries Served" },
];

export function WhySection() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Siriusinfra
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Built for Enterprise,{" "}
            <span className="text-gradient">Loved by Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We've engineered Siriusinfra to meet the most demanding enterprise requirements 
            while keeping it intuitive enough for every team member.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  BookOpen,
  CheckCircle,
  Globe,
  IndianRupee,
  TrendingUp,
  Users,
} from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    target: "All BBA/MBA Students",
    features: [
      "Access to all book summaries",
      "Star ratings and category filters",
      "SWOT overview (2 books/month)",
      "Search and filter functionality",
      "Mobile-friendly interface",
    ],
    highlight: false,
    cta: "Start Free",
  },
  {
    name: "Academic Pro",
    price: "₹299",
    period: "per semester",
    target: "Serious Students & Research Scholars",
    features: [
      "Unlimited full SWOT analyses",
      "Downloadable PDF review reports",
      "Citation-ready review summaries",
      "Priority access to new reviews",
      "Assignment reference builder",
      "Ad-free experience",
    ],
    highlight: true,
    cta: "Most Popular",
  },
  {
    name: "Institutional",
    price: "₹4,999",
    period: "per college/year",
    target: "Universities & B-Schools",
    features: [
      "Unlimited student accounts",
      "Faculty dashboard & analytics",
      "Custom review assignments",
      "White-label option available",
      "API access for LMS integration",
      "Dedicated support team",
    ],
    highlight: false,
    cta: "Contact Us",
  },
];

const revenueStreams = [
  {
    icon: Users,
    title: "Freemium Subscriptions",
    desc: "Convert free users to Academic Pro via semester-based pricing at ₹299 — affordable for Indian college students.",
    pct: "45%",
  },
  {
    icon: BookOpen,
    title: "Institutional Licensing",
    desc: "B-school and university partnerships at ₹4,999 per institution annually — scalable, high-value segment.",
    pct: "35%",
  },
  {
    icon: Globe,
    title: "Affiliate & Publisher Tie-ups",
    desc: "Referral commissions from Pearson India, Tata McGraw-Hill, and other academic publishers on book purchases.",
    pct: "15%",
  },
  {
    icon: TrendingUp,
    title: "Sponsored Reviews",
    desc: "Publishers sponsor featured placement and review prioritisation — clearly disclosed to maintain academic integrity.",
    pct: "5%",
  },
];

export function BusinessModel() {
  return (
    <main>
      <section className="bg-secondary/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 block">
            Platform Economics
          </span>
          <h1 className="section-title">Business Model</h1>
          <p className="section-subtitle max-w-2xl">
            ReviewSphere operates as a freemium academic platform with a clear
            India-first pricing strategy, making quality management education
            accessible at every level.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-primary mb-6">
              Value Proposition
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                ReviewSphere addresses a clear gap in India's academic
                publishing ecosystem: the absence of structured, analytically
                rigorous book reviews designed specifically for undergraduate
                management students. Traditional book summaries lack the
                critical depth required for BBA coursework, while academic
                journals are inaccessible to most students.
              </p>
              <p>
                Our platform democratises analytical thinking by providing
                SWOT-based reviews that bridge textbook theory with India's real
                business environment — covering sectors from FMCG and banking to
                IT services and public sector enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-14 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-10 text-center">
            Pricing Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border overflow-hidden ${
                  tier.highlight
                    ? "border-primary shadow-card ring-2 ring-primary/20"
                    : "border-border bg-white shadow-sm"
                }`}
              >
                {tier.highlight && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold uppercase tracking-widest">
                    ⭐ Most Popular
                  </div>
                )}
                <div className={`p-6 ${tier.highlight ? "bg-white" : ""}`}>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {tier.target}
                  </p>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="font-display font-bold text-4xl text-primary">
                      {tier.price}
                    </span>
                    <span className="text-sm text-muted-foreground mb-1">
                      /{tier.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          size={15}
                          className="text-green-600 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-8">
            Revenue Streams
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {revenueStreams.map(({ icon: Icon, title, desc, pct }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {title}
                    </h4>
                  </div>
                  <span className="font-display font-bold text-2xl text-primary/30">
                    {pct}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Focus */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-4">
                India-First Market Strategy
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                India has over 5,000 management colleges with approximately 3.5
                lakh BBA students enrolled annually. ReviewSphere targets tier-1
                and tier-2 city institutions where digital adoption is highest
                and academic rigor is prioritized.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5,000+", label: "Management Colleges" },
                  { value: "3.5L+", label: "BBA Students/Year" },
                  { value: "₹299", label: "Semester Pricing" },
                  { value: "10+", label: "Books Reviewed" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white/10 rounded-lg p-4">
                    <div className="font-display font-bold text-2xl">
                      {value}
                    </div>
                    <div className="text-xs text-primary-foreground/70 mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display font-semibold text-xl mb-4">
                Target Cities
              </h3>
              {[
                ["Mumbai", "Financial capital, MBA hub"],
                ["Delhi NCR", "Policy and consulting schools"],
                ["Bengaluru", "Tech-management intersection"],
                ["Pune", "BBA college concentration"],
                ["Hyderabad", "Growing business school market"],
                ["Chennai", "Traditional academic excellence"],
              ].map(([city, desc]) => (
                <div key={city} className="flex items-center gap-3">
                  <IndianRupee
                    size={14}
                    className="text-accent flex-shrink-0"
                  />
                  <span className="font-medium text-sm">{city}</span>
                  <span className="text-primary-foreground/60 text-xs">
                    — {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

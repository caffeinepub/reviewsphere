import { StarRating } from "@/components/StarRating";
import { books } from "@/data/books";
import { categoryColors } from "@/data/books";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  Lightbulb,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const swotItems = [
  {
    key: "strengths",
    label: "Strengths",
    icon: TrendingUp,
    color: "bg-green-50 border-green-200 text-green-800",
    iconColor: "text-green-600",
    description:
      "Core positive attributes of the book — academic rigour, relevance, India-specific content, clarity of concepts.",
  },
  {
    key: "weaknesses",
    label: "Weaknesses",
    icon: TrendingDown,
    color: "bg-red-50 border-red-200 text-red-800",
    iconColor: "text-red-600",
    description:
      "Limitations or shortcomings — outdated data, narrow scope, US/Western bias, excessive jargon.",
  },
  {
    key: "opportunities",
    label: "Opportunities",
    icon: Lightbulb,
    color: "bg-blue-50 border-blue-200 text-blue-800",
    iconColor: "text-blue-600",
    description:
      "Learning outcomes and career applications — which roles, sectors, or academic paths benefit most.",
  },
  {
    key: "threats",
    label: "Threats",
    icon: AlertTriangle,
    color: "bg-amber-50 border-amber-200 text-amber-800",
    iconColor: "text-amber-600",
    description:
      "Risk factors for students relying solely on this text — gaps, competing resources, obsolescence risk.",
  },
];

const steps = [
  {
    num: "01",
    title: "Select & Read",
    desc: "Choose a management book and read it with an analytical lens, noting key arguments, frameworks, and examples.",
  },
  {
    num: "02",
    title: "Contextualise for India",
    desc: "Identify which concepts are India-relevant, which cite Indian examples, and which require localised interpretation.",
  },
  {
    num: "03",
    title: "Apply SWOT Analysis",
    desc: "Map the book's attributes across four SWOT quadrants using our structured evaluation criteria.",
  },
  {
    num: "04",
    title: "Rate & Summarise",
    desc: "Assign a 1–5 star rating based on academic value, India-relevance, and practical applicability for BBA students.",
  },
  {
    num: "05",
    title: "Publish Review",
    desc: "The structured review is published with publisher info, edition year, and SWOT summary for student reference.",
  },
];

const sampleBook = books[2]; // Marketing Management - rated 5 stars

export function ReviewFramework() {
  return (
    <main>
      <section className="bg-secondary/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 block">
            Methodology
          </span>
          <h1 className="section-title">Review Framework</h1>
          <p className="section-subtitle max-w-2xl">
            Our structured SWOT-based methodology ensures every book review goes
            beyond a summary — delivering analytical insight that supports
            academic work and critical thinking.
          </p>
        </div>
      </section>

      {/* SWOT Overview */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-8">
            The SWOT Review Model
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {swotItems.map(
              ({ key, label, icon: Icon, color, iconColor, description }) => (
                <div key={key} className={`rounded-xl p-6 border ${color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={22} className={iconColor} />
                    <h3 className="font-display font-semibold text-lg">
                      {label}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed opacity-80">
                    {description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-14 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-10 text-center">
            Our 5-Step Review Process
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="relative">
                  <div className="md:text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10">
                      {step.num}
                    </div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rating Criteria */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-8">
            Star Rating Criteria
          </h2>
          <div className="space-y-3 max-w-2xl">
            {[
              {
                stars: 5,
                label: "Exceptional",
                desc: "Must-read; exceptional India-relevance, rigorous content, widely used in top B-schools",
              },
              {
                stars: 4,
                label: "Highly Recommended",
                desc: "Strong content, minor limitations; highly suitable for BBA curriculum",
              },
              {
                stars: 3,
                label: "Recommended",
                desc: "Good foundational text; some gaps or limited India context",
              },
              {
                stars: 2,
                label: "Selective Use",
                desc: "Useful only for specific topics; not recommended as primary text",
              },
              {
                stars: 1,
                label: "Reference Only",
                desc: "Significant limitations; use only as supplementary reference",
              },
            ].map(({ stars, label, desc }) => (
              <div
                key={stars}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-background"
              >
                <StarRating rating={stars} size={16} />
                <div>
                  <span className="font-semibold text-sm text-foreground">
                    {label}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    — {desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Review */}
      <section className="py-14 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-8">
            Sample Structured Review
          </h2>
          <div className="bg-white rounded-xl border border-border shadow-card overflow-hidden max-w-3xl">
            <div className="bg-primary px-6 py-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    {sampleBook.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-0.5">
                    {sampleBook.author}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <StarRating rating={sampleBook.rating} size={15} />
                    <span
                      className={`category-badge ${categoryColors[sampleBook.category]}`}
                    >
                      {sampleBook.category}
                    </span>
                    <span className="text-white/60 text-xs">
                      {sampleBook.publisher} · {sampleBook.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {sampleBook.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {swotItems.map(
                  ({ key, label, icon: Icon, color, iconColor }) => (
                    <div key={key} className={`rounded-lg p-4 border ${color}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={15} className={iconColor} />
                        <span className="font-semibold text-xs uppercase tracking-wide">
                          {label}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed opacity-80">
                        {sampleBook.swot[key as keyof typeof sampleBook.swot]}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="px-6 pb-5">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle size={14} className="text-green-600" />
                <span>Review follows ReviewSphere SWOT Methodology v2.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

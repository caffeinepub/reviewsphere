import { BookCard } from "@/components/BookCard";
import type { Page } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import { ArrowRight, BookOpen, Search, Star, Users } from "lucide-react";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const featuredBooks = books.filter((b) => b.top).slice(0, 3);

export function Home({ onNavigate }: HomeProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm text-white/90 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              India's Premier Management Book Review Platform
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Structured Reviews for{" "}
              <span className="italic text-accent">Sharper Minds</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              ReviewSphere provides BBA and MBA students across India with
              analytically rigorous, SWOT-based book reviews across Marketing,
              Finance, HR, and Strategy domains.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => onNavigate("categories")}
              >
                Explore Books <ArrowRight size={16} className="ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
                onClick={() => onNavigate("framework")}
              >
                Our Framework
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-3 block">
                Who We Are
              </span>
              <h2 className="section-title">
                A Knowledge Platform Built for India's Future Business Leaders
              </h2>
              <p className="section-subtitle">
                ReviewSphere is an academic review platform founded by
                management educators and BBA alumni to address the gap in
                structured, India-contextualised book analysis for undergraduate
                students.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mt-4">
                We believe every management student deserves access to
                high-quality, analytically structured book reviews that go
                beyond mere summaries — connecting theory to India's dynamic
                business landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: BookOpen,
                  label: "Curated Reviews",
                  value: "10+",
                  desc: "Management books reviewed",
                },
                {
                  icon: Search,
                  label: "SWOT Analysis",
                  value: "100%",
                  desc: "Every book analysed",
                },
                {
                  icon: Star,
                  label: "Rating System",
                  value: "1–5",
                  desc: "Stars academic scale",
                },
                {
                  icon: Users,
                  label: "Target Audience",
                  value: "BBA/MBA",
                  desc: "Students across India",
                },
              ].map(({ icon: Icon, label, value, desc }) => (
                <div key={label} className="bg-secondary rounded-lg p-5">
                  <Icon size={22} className="text-primary mb-2" />
                  <div className="font-display font-bold text-2xl text-primary">
                    {value}
                  </div>
                  <div className="text-xs font-semibold text-foreground mt-0.5">
                    {label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Why We Exist */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "What We Do",
                body: "We review management books through a structured SWOT analytical framework, providing students with strengths, weaknesses, opportunities, and threats for each text — enabling critical academic thinking beyond passive reading.",
              },
              {
                title: "Why We Exist",
                body: "Indian management students often lack access to contextualised, critical analysis of textbooks. ReviewSphere bridges this gap by delivering academically sound, India-relevant book assessments that support assignment work and exam preparation.",
              },
              {
                title: "Where We Operate",
                body: "ReviewSphere is headquartered in Ahmedabad, Gujarat, and serves BBA and MBA students across India's tier-1 and tier-2 cities — from Ahmedabad to Delhi, Bengaluru, Pune, Hyderabad, Chennai, and Kolkata.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg p-7 border border-border shadow-card"
              >
                <div className="w-8 h-0.5 bg-primary mb-4" />
                <h3 className="font-display font-semibold text-xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 block">
                Curated Selection
              </span>
              <h2 className="section-title">Featured Reviews</h2>
            </div>
            <Button
              variant="outline"
              onClick={() => onNavigate("recommendations")}
              className="hidden sm:flex"
            >
              View All <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book, i) => (
              <BookCard
                key={book.id}
                book={book}
                index={i + 1}
                showYear={false}
              />
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => onNavigate("recommendations")}
            >
              View All Recommendations <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

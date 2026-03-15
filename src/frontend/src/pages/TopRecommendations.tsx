import { StarRating } from "@/components/StarRating";
import { Badge } from "@/components/ui/badge";
import { books } from "@/data/books";
import { categoryColors } from "@/data/books";
import { Award, BookOpen } from "lucide-react";
import {
  AlertTriangle,
  Lightbulb,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const topBooks = books.filter((b) => b.top).sort((a, b) => b.rating - a.rating);

const swotIconMap = {
  strengths: { icon: TrendingUp, color: "text-green-600" },
  weaknesses: { icon: TrendingDown, color: "text-red-600" },
  opportunities: { icon: Lightbulb, color: "text-blue-600" },
  threats: { icon: AlertTriangle, color: "text-amber-600" },
};

export function TopRecommendations() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main>
      <section className="bg-secondary/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Award size={28} className="text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
              Editor's Choice
            </span>
          </div>
          <h1 className="section-title">Top Recommendations</h1>
          <p className="section-subtitle max-w-2xl">
            Our highest-rated management books — curated by the ReviewSphere
            editorial board for academic excellence and India-market relevance.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {topBooks.map((book, index) => (
              <div
                key={book.id}
                data-ocid={`book.item.${index + 1}`}
                className="bg-white rounded-xl border border-border shadow-card overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full text-left p-6 cursor-pointer hover:bg-secondary/20 transition-colors"
                  onClick={() =>
                    setExpanded(expanded === book.id ? null : book.id)
                  }
                >
                  <div className="flex items-start gap-5">
                    {/* Rank */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display font-bold text-primary text-sm">
                        #{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
                            {book.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-0.5">
                            {book.author}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <StarRating rating={book.rating} size={16} />
                          <span className="font-bold text-sm text-primary">
                            {book.rating}/5
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span
                          className={`category-badge ${categoryColors[book.category]}`}
                        >
                          {book.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {book.publisher}
                        </span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">
                          {book.year}
                        </span>
                        {book.rating === 5 && (
                          <Badge className="bg-accent/20 text-accent-foreground text-xs">
                            ⭐ Top Rated
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                        {book.summary}
                      </p>
                    </div>

                    {/* Icon */}
                    <BookOpen
                      size={20}
                      className={`flex-shrink-0 transition-transform text-muted-foreground ${expanded === book.id ? "rotate-90" : ""}`}
                    />
                  </div>
                </button>

                {/* Expanded SWOT */}
                {expanded === book.id && (
                  <div className="px-6 pb-6 border-t border-border pt-5 bg-secondary/20">
                    <h4 className="font-semibold text-sm text-primary mb-4">
                      SWOT Analysis
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(
                        Object.entries(book.swot) as [
                          keyof typeof book.swot,
                          string,
                        ][]
                      ).map(([key, value]) => {
                        const { icon: Icon, color } = swotIconMap[key];
                        return (
                          <div
                            key={key}
                            className="flex items-start gap-2.5 bg-white rounded-lg p-3.5 border border-border"
                          >
                            <Icon
                              size={15}
                              className={`${color} flex-shrink-0 mt-0.5`}
                            />
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wide text-foreground/60">
                                {key}
                              </span>
                              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                {value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

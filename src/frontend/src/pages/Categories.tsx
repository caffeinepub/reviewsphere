import { BookCard } from "@/components/BookCard";
import { type Category, books, categoryColors } from "@/data/books";
import { BookOpen } from "lucide-react";
import { useState } from "react";

const FILTERS = ["All", "Marketing", "Finance", "HR", "Strategy"] as const;
type Filter = (typeof FILTERS)[number];

interface CategoriesProps {
  searchQuery: string;
}

export function Categories({ searchQuery }: CategoriesProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered = books.filter((b) => {
    const matchesCategory =
      activeFilter === "All" || b.category === activeFilter;
    const matchesSearch =
      !searchQuery ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 block">
          Browse Collection
        </span>
        <h1 className="section-title">Book Categories</h1>
        <p className="section-subtitle max-w-2xl">
          Explore our curated collection of management books organised by
          discipline. Filter by category to find reviews most relevant to your
          coursework.
        </p>
      </div>

      {/* Category counts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {(["Marketing", "Finance", "HR", "Strategy"] as Category[]).map(
          (cat) => {
            const count = books.filter((b) => b.category === cat).length;
            return (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-lg p-4 text-left border transition-all ${
                  activeFilter === cat
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border bg-white hover:border-primary/30"
                }`}
              >
                <span
                  className={`category-badge ${categoryColors[cat]} mb-2 inline-block`}
                >
                  {cat}
                </span>
                <div className="font-display font-bold text-2xl text-primary">
                  {count}
                </div>
                <div className="text-xs text-muted-foreground">
                  books reviewed
                </div>
              </button>
            );
          },
        )}
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            type="button"
            key={f}
            data-ocid="categories.filter.tab"
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === f
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-white border border-border text-foreground hover:border-primary/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="text-center py-20" data-ocid="categories.empty_state">
          <BookOpen
            size={48}
            className="text-muted-foreground/40 mx-auto mb-4"
          />
          <h3 className="font-display text-xl text-muted-foreground">
            No books found
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-6">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            book{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-foreground">
                  {activeFilter}
                </span>
              </>
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((book, i) => (
              <BookCard key={book.id} book={book} index={i + 1} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

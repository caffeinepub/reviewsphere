import { BookOpenCheck, Menu, X } from "lucide-react";
import { useState } from "react";

export type Page =
  | "home"
  | "categories"
  | "framework"
  | "recommendations"
  | "business"
  | "about"
  | "contact";

const navItems: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "categories", label: "Categories" },
  { id: "framework", label: "Review Framework" },
  { id: "recommendations", label: "Top Recommendations" },
  { id: "business", label: "Business Model" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function Navbar({
  currentPage,
  onNavigate,
  searchQuery,
  onSearchChange,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2.5 group"
            onClick={() => onNavigate("home")}
          >
            <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
              <BookOpenCheck size={20} className="text-primary-foreground" />
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-primary text-lg leading-none block">
                ReviewSphere
              </span>
              <span className="text-xs text-muted-foreground leading-none">
                BBA Management Reviews
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                data-ocid={`nav.${item.id}.link`}
                className={`nav-link ${currentPage === item.id ? "active" : ""}`}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                data-ocid="search.search_input"
                className="w-52 h-8 pl-3 pr-3 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border py-3 space-y-1">
            <div className="px-2 mb-3">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full h-9 px-3 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                data-ocid={`nav.${item.id}.link`}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => {
                  onNavigate(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

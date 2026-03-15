import { BookOpenCheck } from "lucide-react";
import type { Page } from "./Navbar";

const quickLinks: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "categories", label: "Categories" },
  { id: "framework", label: "Review Framework" },
  { id: "recommendations", label: "Top Recommendations" },
  { id: "business", label: "Business Model" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/20 rounded-md flex items-center justify-center">
                <BookOpenCheck size={20} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl">
                ReviewSphere
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              India's premier structured book review platform for BBA and MBA
              management students. Academic rigour meets practical insight.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              About ReviewSphere
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li>📍 Ahmedabad, Gujarat, India</li>
              <li>🎓 Designed for BBA/MBA Students</li>
              <li>📚 SWOT-Based Review Methodology</li>
              <li>🏛️ Academic Assignment Compliant</li>
              <li>🇮🇳 India-Focused Content</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <span>© {year} ReviewSphere. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/90 transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

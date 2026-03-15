import { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar, type Page } from "./components/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { BusinessModel } from "./pages/BusinessModel";
import { Categories } from "./pages/Categories";
import { ContactUs } from "./pages/ContactUs";
import { Home } from "./pages/Home";
import { ReviewFramework } from "./pages/ReviewFramework";
import { TopRecommendations } from "./pages/TopRecommendations";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [searchQuery, setSearchQuery] = useState("");

  function handleNavigate(page: Page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderPage() {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "categories":
        return <Categories searchQuery={searchQuery} />;
      case "framework":
        return <ReviewFramework />;
      case "recommendations":
        return <TopRecommendations />;
      case "business":
        return <BusinessModel />;
      case "about":
        return <AboutUs />;
      case "contact":
        return <ContactUs />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className="flex-1">{renderPage()}</div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

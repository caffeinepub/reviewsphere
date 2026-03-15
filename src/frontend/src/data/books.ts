export type Category = "Marketing" | "Finance" | "HR" | "Strategy";

export interface Book {
  id: number;
  title: string;
  author: string;
  category: Category;
  rating: number;
  summary: string;
  publisher: string;
  year: number;
  swot: {
    strengths: string;
    weaknesses: string;
    opportunities: string;
    threats: string;
  };
  top: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "India's Century",
    author: "Raghav Bahl",
    category: "Strategy",
    rating: 4,
    summary:
      "An analysis of India's rise as an economic superpower, examining policy, demographics, and global positioning.",
    publisher: "HarperCollins India",
    year: 2010,
    swot: {
      strengths: "Comprehensive macroeconomic data with strong narrative flow",
      weaknesses: "Slightly dated projections post-2010 liberalisation wave",
      opportunities: "Inspires strategic thinking about India's global role",
      threats: "Overly optimistic projections may mislead policy students",
    },
    top: true,
  },
  {
    id: 2,
    title: "The Alchemy of Finance (Indian Edition)",
    author: "Prasanna Chandra",
    category: "Finance",
    rating: 5,
    summary:
      "A foundational text on financial management tailored for Indian markets, regulatory frameworks, and SEBI guidelines.",
    publisher: "Tata McGraw-Hill",
    year: 2019,
    swot: {
      strengths:
        "Covers Indian regulatory frameworks including SEBI and RBI norms",
      weaknesses: "Highly technical — may overwhelm first-year BBA students",
      opportunities: "Bridges theory and practice for Indian capital markets",
      threats: "Requires frequent updates due to evolving SEBI regulations",
    },
    top: true,
  },
  {
    id: 3,
    title: "Marketing Management",
    author: "Philip Kotler & Abraham Koshy",
    category: "Marketing",
    rating: 5,
    summary:
      "The definitive guide to marketing strategy adapted for South Asian markets, with Indian brand case studies.",
    publisher: "Pearson India",
    year: 2020,
    swot: {
      strengths: "Indian case studies including Hindustan Unilever and Amul",
      weaknesses: "Dense reading requiring structured study approach",
      opportunities:
        "Applicable to both startups and established MNCs in India",
      threats:
        "Digital marketing chapters lag behind current social media trends",
    },
    top: true,
  },
  {
    id: 4,
    title: "Human Resource Management",
    author: "Gary Dessler & Biju Varkkey",
    category: "HR",
    rating: 4,
    summary:
      "Comprehensive HR framework enriched with Indian organisational examples from IT, banking, and manufacturing sectors.",
    publisher: "Pearson India",
    year: 2018,
    swot: {
      strengths:
        "Real Indian HR scenarios including TCS, Infosys workforce examples",
      weaknesses:
        "Some US-centric content not directly applicable to Indian labour law",
      opportunities:
        "Highly useful for HR professionals and campus placement preparation",
      threats: "Needs update to cover gig economy and contract workforce norms",
    },
    top: false,
  },
  {
    id: 5,
    title: "Competitive Strategy for India",
    author: "Michael Porter (adapted)",
    category: "Strategy",
    rating: 4,
    summary:
      "Porter's five forces and competitive frameworks applied to India's unique competitive landscape and sector dynamics.",
    publisher: "Free Press India",
    year: 2015,
    swot: {
      strengths:
        "Timeless strategic models tested across global and Indian contexts",
      weaknesses: "Limited India-specific primary data and sector case studies",
      opportunities: "Builds rigorous analytical thinking for strategy courses",
      threats:
        "Global framework focus sometimes overshadows local market realities",
    },
    top: true,
  },
  {
    id: 6,
    title: "Security Analysis and Portfolio Management",
    author: "Punithavathy Pandian",
    category: "Finance",
    rating: 4,
    summary:
      "Practical guide to investment analysis focused on NSE and BSE markets, Sensex trends, and Indian investor behaviour.",
    publisher: "Vikas Publishing",
    year: 2017,
    swot: {
      strengths:
        "NSE/BSE focused examples with Indian equity and bond market data",
      weaknesses:
        "Assumes prior basic finance knowledge — not suitable for beginners",
      opportunities:
        "Highly relevant for students pursuing CFA or NISM certifications",
      threats: "Market data and valuations need updating post-2017",
    },
    top: false,
  },
  {
    id: 7,
    title: "Consumer Behaviour",
    author: "Jagdish Sheth & Banwari Mittal",
    category: "Marketing",
    rating: 3,
    summary:
      "Explores consumer psychology with Indian buying behaviour insights across urban and semi-urban demographics.",
    publisher: "Cengage India",
    year: 2016,
    swot: {
      strengths:
        "Strong theoretical base grounded in social psychology research",
      weaknesses: "Limited coverage of rural India and Bharat consumer segment",
      opportunities: "Useful for FMCG, retail, and e-commerce marketing roles",
      threats:
        "Social media and influencer marketing impact significantly understated",
    },
    top: false,
  },
  {
    id: 8,
    title: "Organisational Behaviour",
    author: "Stephen Robbins & Seema Sanghi",
    category: "HR",
    rating: 5,
    summary:
      "Behaviour in organisations explained through Indian workplace culture, hierarchy, and motivation frameworks.",
    publisher: "Pearson India",
    year: 2019,
    swot: {
      strengths:
        "Indian workplace examples including family-owned firms and MNC subsidiaries",
      weaknesses:
        "Some topics overlap with Human Resource Management textbooks",
      opportunities:
        "Excellent resource for campus placement group discussion preparation",
      threats:
        "Rapidly changing workplace norms post-pandemic need new edition",
    },
    top: true,
  },
  {
    id: 9,
    title: "Business Strategy: An Introduction",
    author: "David Campbell & Sandeep Limaye",
    category: "Strategy",
    rating: 3,
    summary:
      "Entry-level strategy text ideal for first-year BBA students, covering PESTLE, Porter, and BCG matrix fundamentals.",
    publisher: "Oxford India",
    year: 2014,
    swot: {
      strengths:
        "Simple, accessible language suitable for undergraduate beginners",
      weaknesses:
        "Lacks analytical depth required for advanced strategy electives",
      opportunities:
        "Serves as a solid conceptual foundation for MBA-level study",
      threats:
        "Case studies are outdated — mostly pre-2010 Indian corporate examples",
    },
    top: false,
  },
  {
    id: 10,
    title: "Sales and Distribution Management",
    author: "Krishna K. Havaldar",
    category: "Marketing",
    rating: 4,
    summary:
      "Covers Indian sales force management, channel distribution, and retail trade with FMCG sector focus.",
    publisher: "Tata McGraw-Hill",
    year: 2018,
    swot: {
      strengths:
        "Highly India-specific with regional distributor and channel examples",
      weaknesses:
        "Narrow focus on traditional trade limits applicability to all sectors",
      opportunities:
        "Ideal for students targeting FMCG, retail, and distribution careers",
      threats: "E-commerce disruption and quick commerce models not covered",
    },
    top: false,
  },
];

export const categoryColors: Record<Category, string> = {
  Marketing: "bg-blue-100 text-blue-800",
  Finance: "bg-green-100 text-green-800",
  HR: "bg-purple-100 text-purple-800",
  Strategy: "bg-orange-100 text-orange-800",
};

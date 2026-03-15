import { BookOpen, Eye, Heart, Target } from "lucide-react";

const team = [
  {
    name: "Dhrumi Jain",
    role: "Founder",
    initials: "DJ",
  },
  {
    name: "Diaa Shah",
    role: "Co-Founder",
    initials: "DS",
  },
  {
    name: "Darsh Soni",
    role: "Finance Review Lead",
    initials: "DaS",
  },
  {
    name: "Ayaan Sheth",
    role: "Tech & Platform Lead",
    initials: "AS",
  },
  {
    name: "Dev Thakkar",
    role: "Marketing Review Editor",
    initials: "DT",
  },
];

const values = [
  {
    icon: BookOpen,
    title: "Academic Rigour",
    desc: "Every review adheres to structured analytical frameworks drawn from management education best practices.",
  },
  {
    icon: Target,
    title: "India Relevance",
    desc: "We prioritise books and editions that speak directly to India's business environment, regulatory context, and market realities.",
  },
  {
    icon: Eye,
    title: "Critical Objectivity",
    desc: "Our SWOT analysis identifies both strengths and limitations honestly — no sponsored bias, no false praise.",
  },
  {
    icon: Heart,
    title: "Student First",
    desc: "Every review is written with the BBA/MBA student in mind — accessible language, practical application, assignment utility.",
  },
];

export function AboutUs() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60 mb-3 block">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
              Built by Educators,
              <br />
              <span className="italic">For Students</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              ReviewSphere was born out of frustration — the lack of structured,
              India-relevant academic book analysis for management students
              navigating crowded syllabi and demanding placements.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-xl p-8">
              <div className="w-8 h-0.5 bg-primary mb-5" />
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide every BBA and MBA student in India with access to
                structured, SWOT-based book reviews that develop critical
                thinking, support academic achievement, and bridge the gap
                between management theory and India's lived business reality.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <div className="w-8 h-0.5 bg-primary mb-5" />
              <h2 className="font-display text-2xl font-bold text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted academic book review platform — a
                resource cited in B-school syllabi, referenced in management
                research, and relied upon by the next generation of Indian
                business leaders across all 28 states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-primary mb-10 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-6 bg-white rounded-xl border border-border shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2 block">
              The People Behind ReviewSphere
            </span>
            <h2 className="font-display text-3xl font-bold text-primary">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex gap-4 p-5 rounded-xl border border-border bg-background hover:shadow-card transition-shadow items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-sm text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Focus */}
      <section className="py-14 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-primary mb-4">
            🇮🇳 Proudly India-Based
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ReviewSphere is headquartered in Ahmedabad, Gujarat — one of India's
            fastest-growing business hubs and home to a thriving academic
            community. Our editorial team spans major cities across India. All
            reviews are written with the Indian regulatory environment, academic
            curriculum (CBCS/NEP 2020), and business landscape in mind.
          </p>
        </div>
      </section>
    </main>
  );
}

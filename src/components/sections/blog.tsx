/*import { ArrowUpRight } from "@/lib/lucide-shim";
import { SectionHeader } from "./about";

const posts = [
  { title: "Vanilla JavaScript — Why It Still Matters in the Age of React and Next.js", tag: "Vanilla JavaScript Overview", date: "May 2026", read: "6 min" },
  { title: "JavaScript — A Programming Mess That Succeeded by Accident", tag: "JavaScript", date: "Apr 2026", read: "8 min" },
  { title: "Making forms feel effortless", tag: "UX", date: "Mar 2026", read: "5 min" },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="06 — Writing" title="From the journal." subtitle="Occasional notes on craft, code, and the web." />
        <div className="mt-16 divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <a key={p.title} href="#" className="group flex items-center justify-between py-8 hover:bg-card/50 transition-colors -mx-6 px-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{p.tag} · {p.date} · {p.read} read</div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">{p.title}</h3>
              </div>
              <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
  */

import { ArrowUpRight } from "@/lib/lucide-shim";
import { SectionHeader } from "./about";

const posts = [
  {
    title: "Vanilla JavaScript — Why It Still Matters in the Age of React and Next.js",
    tag: "JavaScript Fundamentals",
    date: "May 2026",
    read: "6 min",
    url: "https://dev.to/abumotlaq/vanilla-javascript-why-it-still-matters-in-the-age-of-react-and-nextjs-2a7o",
  },
  {
    title: "JavaScript — A Programming Mess That Succeeded by Accident",
    tag: "JavaScript",
    date: "Apr 2026",
    read: "8 min",
    url: "https://dev.to/abumotlaq/javascript-a-programming-mess-that-succeeded-by-accident-938",
  },
  {
    title: "I Learned React Before I Truly Understood JavaScript — Here's What Happened",
    tag: "React",
    date: "Mar 2026",
    read: "5 min",
    url: "https://dev.to/abumotlaq/i-learned-react-before-i-truly-understood-javascript-heres-what-happened-33cg",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="06 — Writing"
          title="From the journal."
          subtitle="Occasional notes on craft, code, and the web."
        />

        <div className="mt-16 divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-8 hover:bg-card/50 transition-colors -mx-6 px-6"
            >
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {p.tag} · {p.date} · {p.read} read
                </div>

                <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
              </div>

              <ArrowUpRight className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


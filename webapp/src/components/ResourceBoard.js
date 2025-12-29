"use client";

const RESOURCES = [
  {
    title: "Architecture Decision Log",
    description:
      "Capture system design trade-offs with a simple, repeatable ADR template.",
    action: "Duplicate Notion template",
    url: "https://www.notion.so/templates/decision-journal",
    level: "All levels",
    category: "Systems Design",
  },
  {
    title: "Frontend Checklist",
    description:
      "Checklist covering accessibility, performance, and ergonomics before you ship any UI.",
    action: "Open checklist",
    url: "https://frontendchecklist.io/",
    level: "Intermediate",
    category: "Frontend Craft",
  },
  {
    title: "Code Storytelling Playbook",
    description:
      "Guide to writing project case studies that highlight impact and thinking patterns.",
    action: "Read the playbook",
    url: "https://www.brigitte.codes/storytelling",
    level: "Career",
    category: "Portfolio",
  },
  {
    title: "Algo Campfire Sessions",
    description:
      "Weekly pattern-focused problem solving videos featuring live whiteboarding.",
    action: "Watch session",
    url: "https://www.youtube.com/@algoexpert",
    level: "Intermediate",
    category: "Algorithms",
  },
  {
    title: "Observability Field Guide",
    description:
      "Mini course on instrumenting services with metrics, logs, and traces people actually use.",
    action: "Start lesson",
    url: "https://console.dev/observability",
    level: "Senior",
    category: "Backend",
  },
  {
    title: "Deliberate Practice Tracker",
    description:
      "Google Sheet with spaced repetition scheduling built in for coding practice.",
    action: "Make a copy",
    url: "https://docs.google.com/spreadsheets/",
    level: "All levels",
    category: "Productivity",
  },
];

export default function ResourceBoard() {
  return (
    <section className="rounded-3xl border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50 to-indigo-50 p-6 shadow-xl shadow-indigo-100/30 dark:border-zinc-800/70 dark:from-zinc-900 dark:via-zinc-900/70 dark:to-indigo-950/40 dark:shadow-none md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
            Curated Resources
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
            Keep your learning loop stocked with high-signal inputs
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            These hand-picked tools and content pieces reinforce the habits that
            matter: structured practice, clear communication, and strong design
            instincts.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((item) => (
          <article
            key={item.title}
            className="group flex h-full flex-col justify-between rounded-2xl border border-indigo-100/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200/50 dark:border-zinc-700/60 dark:bg-zinc-900/80 dark:hover:bg-zinc-900"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400 dark:text-indigo-300">
                <span>{item.category}</span>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-200">
                  {item.level}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {item.description}
              </p>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-between rounded-2xl border border-transparent bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {item.action}
              <span aria-hidden="true" className="translate-x-1 transition">
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

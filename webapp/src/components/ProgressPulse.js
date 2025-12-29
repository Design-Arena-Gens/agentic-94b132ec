"use client";

import { useEffect, useState } from "react";

const METRICS = [
  { label: "Shipping cadence", target: "1 project/week", lift: "+12%" },
  { label: "Deep work minutes", target: "310/week", lift: "+45" },
  { label: "Practice sessions", target: "5 focused blocks", lift: "+2" },
  { label: "Knowledge shares", target: "1 public note", lift: "+1" },
];

const quoteDeck = [
  {
    author: "Tricia, Staff Engineer",
    quote:
      "My code reviews started to shine once I tracked practice like workouts—consistent reps beat marathon nights.",
  },
  {
    author: "Devon, Senior Frontend",
    quote:
      "Breaking my week into focus themes kept me from rabbit-holing on polish when I needed system thinking.",
  },
  {
    author: "Amira, Engineering Manager",
    quote:
      "The daily challenge board became our team's async stand-up prompt. Pairing with it surfaces great discussions.",
  },
];

export default function ProgressPulse() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quoteDeck.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const { quote, author } = quoteDeck[quoteIndex];

  return (
    <section className="rounded-3xl border border-indigo-100/60 bg-white/70 p-6 shadow-xl shadow-indigo-100/30 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/80 dark:shadow-none md:p-10">
      <div className="grid gap-8 lg:grid-cols-[2fr,3fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
            Momentum Metrics
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
            Snapshot your growth so you actually see the improvement
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            Track the habits that compound: reps, reflections, and shipped work.
            Update the numbers weekly and celebrate lift, not perfection.
          </p>
          <figure className="rounded-3xl border border-indigo-100/50 bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 p-6 text-white shadow-lg shadow-indigo-400/40 dark:border-indigo-500/40">
            <blockquote className="text-sm leading-6 text-white/90">
              “{quote}”
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              {author}
            </figcaption>
          </figure>
        </div>
        <div className="grid gap-4 rounded-3xl border border-zinc-200/60 bg-white/80 p-6 text-sm shadow-inner shadow-indigo-100/40 dark:border-zinc-700/60 dark:bg-zinc-950/40 dark:text-zinc-200 dark:shadow-none sm:grid-cols-2">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col gap-2 rounded-2xl border border-indigo-100/60 bg-white/90 p-4 shadow-sm shadow-indigo-100/40 transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:bg-zinc-900"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400 dark:text-indigo-300">
                {metric.label}
              </p>
              <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                {metric.target}
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500 dark:text-emerald-300">
                {metric.lift} vs last sprint
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

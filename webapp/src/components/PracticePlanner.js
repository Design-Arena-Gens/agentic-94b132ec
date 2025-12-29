"use client";

import { useMemo, useState } from "react";

const SESSIONS = [
  {
    day: "Monday",
    focus: "Prime the brain",
    timebox: "25 min warm-up + 50 min deep work",
    agenda: [
      "5 kata-style problems to reinforce fundamentals.",
      "Review last week's notes: highlight one insight to apply today.",
      "Plan tomorrow's challenge and block the calendar.",
    ],
    energy: "High focus",
  },
  {
    day: "Tuesday",
    focus: "Build something small",
    timebox: "90 min maker block",
    agenda: [
      "Ship a UI micro-interaction you've bookmarked.",
      "Refine DX: add lint/format scripts and run them.",
      "Write a quick retro log describing the most annoying friction.",
    ],
    energy: "Creative flow",
  },
  {
    day: "Wednesday",
    focus: "Sharpen problem solving",
    timebox: "2×45 min intervals",
    agenda: [
      "Pick a LeetCode pattern and solve one medium & one hard.",
      "Narrate aloud—practice interview-ready communication.",
      "Summarize the reusable template in a snippet library.",
    ],
    energy: "Structured grind",
  },
  {
    day: "Thursday",
    focus: "Systems thinking",
    timebox: "60 min design jam",
    agenda: [
      "Whiteboard a service or module you recently touched.",
      "Define failure scenarios and observability signals.",
      "Draft an ADR capturing trade-offs in markdown.",
    ],
    energy: "Strategic",
  },
  {
    day: "Friday",
    focus: "Ship & share",
    timebox: "45 min polish + 20 min reflection",
    agenda: [
      "Polish documentation or improve onboarding for a side project.",
      "Record a short Loom or tweet thread sharing the week's win.",
      "Archive insights in your knowledge base for future you.",
    ],
    energy: "Reflective",
  },
];

const ENERGY_COLORS = {
  "High focus": "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  "Creative flow":
    "bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300",
  "Structured grind":
    "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  Strategic: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
  Reflective:
    "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
};

export default function PracticePlanner() {
  const [selected, setSelected] = useState(SESSIONS[0].day);

  const session = useMemo(
    () => SESSIONS.find((entry) => entry.day === selected) ?? SESSIONS[0],
    [selected],
  );

  return (
    <section className="rounded-3xl border border-zinc-200/60 bg-white/70 p-6 shadow-xl shadow-indigo-100/30 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:shadow-none md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
            Weekly Rhythm
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
            Plan practice like an athlete, not a cram session
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Rotate through focus modes so your skills develop in parallel. Pick
            the day that matches your energy, then commit to the timebox in your
            calendar.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {SESSIONS.map((entry) => {
            const isActive = entry.day === selected;
            return (
              <button
                key={entry.day}
                type="button"
                onClick={() => setSelected(entry.day)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isActive
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/40 focus-visible:outline-indigo-600"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 focus-visible:outline-indigo-300"
                }`}
              >
                {entry.day}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[2fr,3fr]">
        <div className="rounded-3xl border border-indigo-100/70 bg-indigo-50/70 p-6 dark:border-zinc-700/60 dark:bg-zinc-900/70">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 dark:text-indigo-300">
            Focus Area
          </p>
          <p className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">
            {session.focus}
          </p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
            Time commitment: {session.timebox}
          </p>
          <span
            className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${ENERGY_COLORS[session.energy]}`}
          >
            {session.energy}
          </span>
        </div>
        <div className="rounded-3xl border border-zinc-200/60 bg-white/80 p-6 shadow-inner shadow-indigo-100/40 dark:border-zinc-700/60 dark:bg-zinc-950/40 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 dark:text-indigo-300">
            Session Agenda
          </p>
          <ul className="mt-4 space-y-4 text-sm text-zinc-700 dark:text-zinc-200">
            {session.agenda.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-2 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

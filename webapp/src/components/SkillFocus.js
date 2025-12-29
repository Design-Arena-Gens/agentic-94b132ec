"use client";

import { useState } from "react";

const TRACKS = {
  "Frontend UI": {
    description:
      "Polish your React fundamentals and develop a keen eye for product polish.",
    metrics: {
      focus: "Component architecture",
      commitment: "45 min / day",
      inspiration: "Ship a polished dashboard widget",
    },
    actions: [
      "Clone a complex Dribbble shot with Tailwind in under 60 minutes.",
      "Refactor an existing component tree to isolate side effects.",
      "Convert a class-based React component into a modern server component.",
    ],
    drills: [
      "Implement optimistic UI for a form submission.",
      "Audit an app for unnecessary re-renders using React DevTools.",
      "Rewrite a fetch-heavy component with suspense boundaries.",
    ],
  },
  "Algorithms": {
    description:
      "Elevate your problem solving by practicing patterns, not just problems.",
    metrics: {
      focus: "Graph search & DP",
      commitment: "4 hard problems / week",
      inspiration: "Teach a friend a new pattern",
    },
    actions: [
      "Solve two medium graph problems focusing on reusable helpers.",
      "Derive a DP transition table by hand before coding.",
      "Translate a recursive backtracking solution to iterative.",
    ],
    drills: [
      "Dry-run BFS and DFS on the same graph noting trade-offs.",
      "Create flashcards for 5 tricky edge cases you often miss.",
      "Write a template for memoized recursion without looking it up.",
    ],
  },
  "Systems & API": {
    description:
      "Design resilient services by practicing the exact conversations hiring managers expect.",
    metrics: {
      focus: "Resilient endpoints",
      commitment: "1 mock design / week",
      inspiration: "Write the RFC before the code",
    },
    actions: [
      "Sketch an API contract, then enforce it with zod or TypeScript types.",
      "Design a rate-limiting strategy for a social notification service.",
      "Add observability to an existing endpoint (logs, metrics, traces).",
    ],
    drills: [
      "Model retries with exponential backoff in pseudocode.",
      "Simulate a database failure and describe graceful degradation.",
      "Implement circuit breaker logic around a flaky dependency.",
    ],
  },
  "Career Portfolio": {
    description:
      "Tell your story with artifacts that prove depth—not just breadth.",
    metrics: {
      focus: "Narrative case studies",
      commitment: "1h focused writing / week",
      inspiration: "Ship a public learn-in-public post",
    },
    actions: [
      "Document a recent bug hunt with screenshots and lessons learned.",
      "Create a mini landing page that highlights before/after metrics.",
      "Record a 2-minute Loom walkthrough of a project decision you led.",
    ],
    drills: [
      "Rewrite a project description to highlight outcomes over tasks.",
      "Collect testimonials or feedback snippets in a single doc.",
      "Outline a short talk you could give at a local meetup.",
    ],
  },
};

const primaryTracks = Object.keys(TRACKS);

export default function SkillFocus() {
  const [activeTrack, setActiveTrack] = useState(primaryTracks[0]);
  const track = TRACKS[activeTrack];

  return (
    <section className="rounded-3xl border border-white/10 bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-zinc-900/80 dark:ring-white/10 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
            Skill Focus
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
            Level up with deliberate practice cycles
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Choose the area that needs the most love and follow a one-week loop
            designed to break plateaus. Rotate tracks every two weeks to keep
            your improvement compounding.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {primaryTracks.map((name) => {
            const isActive = name === activeTrack;
            return (
              <button
                key={name}
                type="button"
                onClick={() => setActiveTrack(name)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isActive
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/40 focus-visible:outline-indigo-600"
                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 focus-visible:outline-indigo-300"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 p-6 text-white lg:col-span-2">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Weekly Snapshot
          </p>
          <p className="mt-4 text-lg font-semibold">{track.description}</p>
          <dl className="mt-6 space-y-4 text-sm leading-6">
            <div>
              <dt className="text-white/70">Primary Focus</dt>
              <dd className="font-semibold">{track.metrics.focus}</dd>
            </div>
            <div>
              <dt className="text-white/70">Commitment</dt>
              <dd className="font-semibold">{track.metrics.commitment}</dd>
            </div>
            <div>
              <dt className="text-white/70">Anchor Motivation</dt>
              <dd className="font-semibold">{track.metrics.inspiration}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-indigo-100/70 bg-indigo-50/70 p-6 dark:border-zinc-700/50 dark:bg-zinc-900/60 lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-400 dark:text-indigo-300">
            Daily Actions
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            {track.actions.map((action) => (
              <li
                key={action}
                className="flex items-start gap-3 rounded-xl bg-white/70 p-3 shadow-sm shadow-indigo-100/60 dark:bg-zinc-800/80 dark:shadow-none"
              >
                <span className="mt-1 size-2 rounded-full bg-indigo-400" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-indigo-400 dark:text-indigo-300">
            Quick Drills
          </h3>
          <ul className="mt-3 grid gap-3 text-sm text-zinc-700 dark:text-zinc-200 sm:grid-cols-3">
            {track.drills.map((drill) => (
              <li
                key={drill}
                className="rounded-xl border border-indigo-200/60 bg-white/80 p-3 text-center shadow-sm dark:border-zinc-700/60 dark:bg-zinc-800/80"
              >
                {drill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

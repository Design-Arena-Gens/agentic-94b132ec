"use client";

import { useMemo, useState } from "react";

const CHALLENGES = [
  {
    id: "stream-analyzer",
    label: "Daily Challenge",
    title: "Streaming Median Monitor",
    theme:
      "Build a resilient utility that tracks the rolling median latency of API responses.",
    difficulty: "Senior IC",
    stack: ["TypeScript", "Node.js", "Data Structures"],
    checklist: [
      "Design an API `push(latencyMs: number)` and `median(): number`.",
      "Guarantee O(log n) updates and O(1) reads even at 10k events/s.",
      "Write property-based tests that generate random latency streams.",
      "Explain how you would shard across multiple instances.",
    ],
    hint: "Balance two heaps (max-heap lower half, min-heap upper half) to maintain the median across updates.",
    solution:
      "Use twin heaps keyed by latency. Push new values into the correct heap, rebalance so both sizes differ by at most one, then derive the median from heap tops. Property-based tests assert equivalence with a sorted array baseline. For sharding, use consistent hashing and merge medians via reservoir sampling or publish the full distribution for aggregation.",
  },
  {
    id: "refactor-ui",
    label: "UI Deep Dive",
    title: "Refactor a Tangled Settings Form",
    theme:
      "Split a 400-line React component into composable units without breaking UX.",
    difficulty: "Mid-level",
    stack: ["React", "Accessibility", "Testing Library"],
    checklist: [
      "Extract logical groups (notifications, billing, profile) into controlled components.",
      "Centralize form schema validation with Zod + React Hook Form.",
      "Add integration tests to guard keyboard navigation and ARIA labels.",
      "Document your refactor strategy in a short ADR (architecture decision record).",
    ],
    hint: "Start with boundaries: identify render blocks tied to distinct business logic, then stabilize the contract between the parent form and extracted children.",
    solution:
      "Introduce a `SettingsForm` provider that holds React Hook Form state. Each subsection consumes context, so no prop drilling. Snapshot and accessibility tests ensure parity. The ADR outlines current pain, target structure, and migration plan.",
  },
  {
    id: "system-design",
    label: "Systems Thinking",
    title: "Design a Feature Flag Service",
    theme:
      "Outline a feature flag platform that supports 20M MAU and multi-variate experiments.",
    difficulty: "Staff",
    stack: ["Systems Design", "Caching", "Observability"],
    checklist: [
      "Sketch core components: management API, evaluation SDK, analytics pipeline.",
      "Choose a rollout strategy (gradual, segment-based, kill switch) and justify caching.",
      "Define observability signals to detect misconfigurations quickly.",
      "Describe a migration plan when flags move from boolean to JSON payload.",
    ],
    hint: "Separate the write path (authoring) from the read path (evaluation). Embrace edge caching for SDK evaluations, and message queues for analytics fan-out.",
    solution:
      "Control plane persists flag configurations in a strongly consistent store. Evaluation plane runs at the edge: SDK bootstrap pulls from CDN, delta updates over SSE. Analytics events stream to Kafka, aggregate with Flink, surface guardrails in Grafana. Migration uses versioned schemas where SDKs fall back to defaults.",
  },
];

export default function DailyChallenge() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const challenge = useMemo(() => CHALLENGES[index], [index]);

  const select = (direction) => {
    setRevealed(false);
    setIndex((prev) => {
      const next = (prev + direction + CHALLENGES.length) % CHALLENGES.length;
      return next;
    });
  };

  return (
    <section className="rounded-3xl border border-indigo-100/50 bg-gradient-to-br from-white via-indigo-50 to-sky-100 p-6 shadow-lg shadow-indigo-200/40 dark:from-zinc-900 dark:via-zinc-900/60 dark:to-indigo-950 dark:border-zinc-800/80 dark:shadow-indigo-900/30 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
            {challenge.label}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-white">
            {challenge.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            {challenge.theme}
          </p>
        </div>
        <div className="flex gap-3 self-start">
          <button
            type="button"
            onClick={() => select(-1)}
            className="rounded-full border border-indigo-200/70 bg-white px-3 py-2 text-sm font-medium text-indigo-500 shadow-sm shadow-indigo-100 transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-indigo-300 dark:hover:bg-zinc-800"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => select(1)}
            className="rounded-full border border-indigo-200/70 bg-white px-3 py-2 text-sm font-medium text-indigo-500 shadow-sm shadow-indigo-100 transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-indigo-300 dark:hover:bg-zinc-800"
          >
            Next
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400 dark:text-indigo-300">
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-200">
              {challenge.difficulty}
            </span>
            {challenge.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/80 px-3 py-1 text-indigo-500 shadow dark:bg-zinc-800/80 dark:text-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-200">
            {challenge.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-indigo-200/80 bg-white/80 p-4 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/70"
              >
                <span className="mt-1 inline-flex size-2 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full max-w-sm rounded-3xl border border-indigo-200/70 bg-white/70 p-6 shadow-md shadow-indigo-200/60 dark:border-zinc-700/70 dark:bg-zinc-900/80 dark:shadow-none">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400 dark:text-indigo-300">
            Coaching Notes
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {challenge.hint}
          </p>
          <button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            className="mt-6 w-full rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 transition hover:-translate-y-0.5 hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {revealed ? "Hide Solution Insight" : "Reveal Solution Insight"}
          </button>
          {revealed && (
            <p className="mt-4 whitespace-pre-line rounded-2xl border border-indigo-200/60 bg-indigo-50/80 p-4 text-sm text-indigo-900 dark:border-indigo-600/40 dark:bg-indigo-950/40 dark:text-indigo-200">
              {challenge.solution}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

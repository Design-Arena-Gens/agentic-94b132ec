import DailyChallenge from "../components/DailyChallenge";
import PracticePlanner from "../components/PracticePlanner";
import ProgressPulse from "../components/ProgressPulse";
import ResourceBoard from "../components/ResourceBoard";
import SkillFocus from "../components/SkillFocus";

export default function Home() {
  const foundations = [
    "Design deliberate practice loops instead of unstructured grind.",
    "Ship tiny outcomes weekly so your portfolio tells a living story.",
    "Reflect on your progress with metrics that actually excite you.",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-sky-100 pb-20 dark:from-[#070412] dark:via-[#050b19] dark:to-[#111827]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_55%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 md:py-20">
        <header className="rounded-3xl border border-white/50 bg-white/70 p-8 shadow-xl shadow-indigo-100/40 backdrop-blur dark:border-indigo-500/20 dark:bg-white/10 dark:text-white dark:shadow-indigo-900/30 md:p-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:border-indigo-400/40 dark:bg-indigo-500/10 dark:text-indigo-200">
                Improve your coding
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-zinc-900 dark:text-white sm:text-5xl">
                Build the habits that transform you from a busy coder into a
                confident engineering problem solver.
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-200">
                Stop doom-scrolling tutorials. This workspace gives you a weekly
                rhythm, curated challenges, and measurable checkpoints so you
                progress with intention—not burnout.
              </p>
              <ul className="grid gap-3 text-sm text-zinc-600 dark:text-zinc-200 sm:grid-cols-3">
                {foundations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-indigo-100/70 bg-white/60 p-4 shadow-sm shadow-indigo-100/60 dark:border-indigo-500/40 dark:bg-indigo-500/5 dark:shadow-none"
                  >
                    <span className="mt-1 inline-flex size-2 rounded-full bg-indigo-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-5 rounded-3xl border border-indigo-100/70 bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 p-6 text-sm text-white shadow-2xl shadow-indigo-500/40 dark:border-indigo-500/40 dark:from-indigo-600 dark:via-purple-600 dark:to-blue-500">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Weekly Focus Stack
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-white/70">Current Sprint Theme</p>
                  <p className="text-lg font-semibold">
                    &ldquo;Ship it&rdquo; showcase: launch one end-to-end flow in
                    5 days.
                  </p>
                </div>
                <div>
                  <p className="text-white/70">Anchor Habit</p>
                  <p className="text-lg font-semibold">
                    45-minute deliberate practice block by 10am.
                  </p>
                </div>
                <div>
                  <p className="text-white/70">Accountability Loop</p>
                  <p className="text-lg font-semibold">
                    Share your daily checkpoint in #learning-log.
                  </p>
                </div>
              </div>
              <a
                href="#practice"
                className="inline-flex items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Jump to the weekly plan →
              </a>
            </div>
          </div>
        </header>

        <main className="space-y-14">
          <SkillFocus />
          <DailyChallenge />
          <div id="practice">
            <PracticePlanner />
          </div>
          <ProgressPulse />
          <ResourceBoard />
        </main>

        <footer className="rounded-3xl border border-indigo-100/60 bg-white/70 p-6 text-sm text-zinc-600 shadow-lg shadow-indigo-100/50 dark:border-indigo-500/30 dark:bg-white/10 dark:text-zinc-300">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>
              Improvement is a loop: plan, practice, reflect. Keep tuning this
              workspace to match your stretch goals.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
              Build - Learn - Share
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

import Link from "next/link";
import { EditorialImage } from "@/components/editorial-image";
import { Reveal, MotionArticle } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { experiments, journal, process, projects, visualStudies } from "@/lib/portfolio";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#experiments", label: "Experiments" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className="publication-shell min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <SelectedProjects />
      <CurrentExperiments />
      <VisualStudies />
      <Process />
      <Journal />
      <Contact />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/82 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 w-[min(100%-2rem,1180px)] items-center justify-between gap-6"
        aria-label="Primary navigation"
      >
        <Link href="#" className="group inline-flex items-center gap-3" aria-label="Ricky home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-sm font-semibold shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-tactile">
            R
          </span>
          <span className="hidden text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted sm:inline">
            Ricky / Edition 01
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[100svh] w-[min(100%-2rem,1180px)] grid-cols-1 items-end gap-12 pb-16 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20">
      <div className="max-w-4xl self-center">
        <Reveal>
          <p className="mb-8 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted">
            AI systems / product craft / engineered calm
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="editorial-serif max-w-5xl text-balance text-[clamp(4.1rem,12vw,10.8rem)] font-normal leading-[0.82] tracking-[-0.045em]">
            A portfolio built like a quiet machine.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 grid max-w-3xl gap-6 border-t border-border pt-7 md:grid-cols-[0.95fr_1.05fr]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-forest dark:text-forest">
              Ricky / gh0st0706
            </p>
            <p className="max-w-xl text-base leading-8 text-muted md:text-lg">
              I design and build AI tools, telemetry diagnostics, CRM systems, and product surfaces with the restraint of industrial design and the clarity of a well-edited magazine.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.22} y={32} className="group relative self-center lg:self-end">
        <EditorialImage
          src={visualStudies.portrait}
          alt="GitHub avatar for Ricky"
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="aspect-[4/5] min-h-[420px]"
        />
        <div className="absolute -bottom-7 left-6 right-6 rounded-[24px] border border-border bg-surface/92 p-5 shadow-tactile backdrop-blur-xl sm:left-auto sm:w-72">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
            Current focus
          </p>
          <p className="mt-3 text-xl leading-tight">
            Diagnostics, cognition tools, and CRM intelligence.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function SelectedProjects() {
  return (
    <section id="work" className="border-y border-border bg-surface/48 py-24 md:py-32">
      <div className="mx-auto grid w-[min(100%-2rem,1180px)] gap-14 lg:grid-cols-[0.33fr_0.67fr]">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted">
              Selected projects
            </p>
            <h2 className="editorial-serif mt-6 max-w-md text-balance text-5xl font-normal leading-[0.94] tracking-[-0.035em] md:text-7xl">
              Large systems, edited down to their essence.
            </h2>
            <p className="mt-8 max-w-sm leading-7 text-muted">
              Each project is treated as a designed object: purpose first, materials second, finish last.
            </p>
          </Reveal>
        </aside>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <MotionArticle
              key={project.title}
              delay={index * 0.08}
              className="group overflow-hidden rounded-[28px] border border-border bg-background shadow-editorial transition duration-500 hover:-translate-y-1 hover:shadow-tactile"
            >
              <div className="grid gap-0 xl:grid-cols-[0.92fr_1.08fr]">
                <EditorialImage
                  src={project.image}
                  alt={project.imageAlt}
                  sizes="(max-width: 1280px) 100vw, 44vw"
                  className="aspect-[16/11] rounded-none border-0 shadow-none xl:aspect-auto"
                />
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="mb-12 flex items-start justify-between gap-5 border-b border-border pb-5">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                        {project.label}
                      </p>
                      <h3 className="editorial-serif mt-4 text-4xl leading-[0.95] tracking-[-0.025em] md:text-5xl">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-foreground transition duration-300 hover:bg-forest hover:text-background focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-background"
                    >
                      Repo
                    </a>
                  </div>

                  <p className="max-w-2xl text-xl leading-8 text-foreground">{project.description}</p>

                  <div className="mt-10 grid gap-7 md:grid-cols-2">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                        Thought process
                      </p>
                      <p className="mt-3 leading-7 text-muted">{project.thought}</p>
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                        Outcome
                      </p>
                      <p className="mt-3 leading-7 text-muted">{project.outcome}</p>
                    </div>
                  </div>

                  <ul className="mt-9 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentExperiments() {
  return (
    <section id="experiments" className="mx-auto w-[min(100%-2rem,1180px)] py-24 md:py-32">
      <Reveal className="max-w-3xl">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted">
          Current experiments
        </p>
        <h2 className="editorial-serif mt-6 text-balance text-5xl font-normal leading-[0.95] tracking-[-0.035em] md:text-7xl">
          A workshop for ideas that are still warm.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {experiments.map((experiment, index) => (
          <MotionArticle
            key={experiment.title}
            delay={index * 0.08}
            className={`rounded-[28px] border border-border p-8 shadow-editorial transition duration-500 hover:-translate-y-1 hover:shadow-tactile ${
              index === 0 ? "bg-forest text-background lg:row-span-2" : "bg-surface"
            }`}
          >
            <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${index === 0 ? "text-background/70" : "text-muted"}`}>
              {experiment.signal}
            </p>
            <h3 className="editorial-serif mt-8 text-4xl leading-none tracking-[-0.025em]">
              {experiment.title}
            </h3>
            <p className={`mt-6 leading-7 ${index === 0 ? "text-background/78" : "text-muted"}`}>
              {experiment.description}
            </p>
          </MotionArticle>
        ))}

        <MotionArticle className="rounded-[28px] border border-border bg-sand/45 p-8 shadow-editorial lg:col-span-2">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
            Operating principle
          </p>
          <p className="editorial-serif mt-10 max-w-3xl text-balance text-4xl leading-[1.02] tracking-[-0.03em] md:text-6xl">
            Complexity is allowed in the engine. The interface should feel inevitable.
          </p>
        </MotionArticle>
      </div>
    </section>
  );
}

function VisualStudies() {
  return (
    <section className="border-y border-border bg-surface/60 py-24 md:py-32" aria-labelledby="visual-studies">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <Reveal className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted">
              Photography / automotive
            </p>
            <h2
              id="visual-studies"
              className="editorial-serif mt-6 text-balance text-5xl font-normal leading-[0.95] tracking-[-0.035em] md:text-7xl"
            >
              Visual references, not decorations.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-xl leading-9 text-muted">
            Architecture teaches proportion. Automotive design teaches tension. Photography teaches restraint. Those references shape how the portfolio moves and breathes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <Reveal className="group">
            <EditorialImage
              src={visualStudies.photography}
              alt="Warm architectural landscape with layered natural light"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="aspect-[16/10]"
            />
            <div className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-[0.35fr_0.65fr]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                Photography
              </p>
              <p className="leading-7 text-muted">
                Image blocks are given room to behave like plates in a book: quiet, specific, and materially present.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="group lg:pt-24">
            <EditorialImage
              src={visualStudies.automotive}
              alt="Classic sports car detail in warm light"
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="aspect-[4/5]"
            />
            <div className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-[0.35fr_0.65fr]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
                Automotive
              </p>
              <p className="leading-7 text-muted">
                Edges, shadows, and hover states are tuned to feel tactile, like a switch with a clear mechanical throw.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto grid w-[min(100%-2rem,1180px)] gap-14 py-24 md:py-32 lg:grid-cols-[0.36fr_0.64fr]">
      <Reveal className="lg:sticky lg:top-28 lg:h-fit">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted">Process</p>
        <h2 className="editorial-serif mt-6 text-balance text-5xl font-normal leading-[0.95] tracking-[-0.035em] md:text-7xl">
          Fewer moves. Better moves.
        </h2>
      </Reveal>

      <div className="divide-y divide-border rounded-[28px] border border-border bg-surface shadow-editorial">
        {process.map((item, index) => (
          <MotionArticle key={item.step} delay={index * 0.06} className="grid gap-8 p-7 sm:grid-cols-[0.18fr_0.82fr] md:p-10">
            <p className="editorial-serif text-4xl text-sand">{item.step}</p>
            <div>
              <h3 className="text-2xl font-medium tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 max-w-2xl leading-7 text-muted">{item.description}</p>
            </div>
          </MotionArticle>
        ))}
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="border-y border-border bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto w-[min(100%-2rem,1180px)]">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-background/58">
              Journal
            </p>
            <h2 className="editorial-serif mt-6 max-w-3xl text-balance text-5xl font-normal leading-[0.95] tracking-[-0.035em] md:text-7xl">
              Notes from the workshop.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-background/68">
            Short observations on interfaces, systems, and the craft of making technical work feel calm.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {journal.map((entry, index) => (
            <MotionArticle
              key={entry.title}
              delay={index * 0.08}
              className="rounded-[28px] border border-background/16 bg-background/[0.04] p-7 transition duration-500 hover:-translate-y-1 hover:bg-background/[0.08]"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-background/52">
                {entry.meta}
              </p>
              <h3 className="editorial-serif mt-10 text-3xl leading-none tracking-[-0.02em]">
                {entry.title}
              </h3>
              <p className="mt-6 leading-7 text-background/68">{entry.excerpt}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto w-[min(100%-2rem,1180px)] py-24 md:py-32">
      <Reveal className="rounded-[28px] border border-border bg-surface p-7 shadow-editorial sm:p-10 md:p-14">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-muted">
              Contact
            </p>
            <p className="mt-8 max-w-xs leading-7 text-muted">
              The cleanest current trail is GitHub: project history, experiments, and future editions.
            </p>
          </div>
          <div>
            <h2 className="editorial-serif text-balance text-5xl font-normal leading-[0.95] tracking-[-0.035em] md:text-7xl">
              If the work feels quiet, it is doing its job.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/gh0st0706"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-forest px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-background transition duration-300 hover:-translate-y-0.5 hover:shadow-tactile focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-background"
              >
                GitHub
              </a>
              <a
                href="https://github.com/gh0st0706/idk"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 hover:bg-sand/30 hover:shadow-tactile focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-background"
              >
                Portfolio repo
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

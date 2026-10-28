const projects = [
  {
    number: "01",
    name: "Verifier Lense",
    image: "/projects/verifier_lense_model.png",
    category: "Machine Learning",
    description:
      "A text-classification project exploring how machine learning can classify news content. Reported test accuracy: 97.93%, based on the project's evaluation report.",
    contribution:
      "Contributed to the development of a group capstone project, working on a machine-learning-based text classification system and its evaluation.",
    status: "Featured project",
    repository: "https://github.com/SyedaNazish-debug/verifier_model",
    demo: "https://verifierlensemodel.vercel.app/",
    technologies: ["Python", "Flask", "Scikit-learn", "Joblib", "TF-IDF"],
  },
  {
    number: "02",
    name: "Image Preparation Lab",
    image: "/projects/image_preparing_lab.png",
    category: "Python · Image Processing",
    description:
      "A Python-based image preparation tool for inspecting image dimensions and megapixels, validating crop coordinates, resizing images, and exploring JPEG export workflows.",
    contribution:
      "Developed the image preparation tool through AI-assisted collaboration, working with Python-based image inspection, crop-coordinate validation, resizing, and JPEG export workflows.",
    status: "Featured project",
    repository: "https://github.com/SyedaNazish-debug/image-preparing-lab",
    demo: "https://image-preparing-lab-74tikgn2nae9zxxg29jnwh.streamlit.app/",
    technologies: ["Python", "Streamlit", "Pillow", "Image Processing"],
  },
  {
    number: "03",
    name: "Student Opportunity Board",
    category: "Python · Streamlit · SQLite",
    description:
      "An in-progress student-focused application for organizing opportunities and tracking application statuses and deadlines. Features and data workflows are still being developed.",
    contribution:
      "Developing a student-focused application to organize opportunities and track application statuses and deadlines, with a focus on practical student needs.",
    status: "In progress",
    repository: "https://github.com/SyedaNazish-debug/my-first-vibe-project",
    demo: null,
    technologies: ["Python", "Streamlit", "SQLite"],
    developmentTools: ["Antigravity"],
  },
];
const focusAreas = [
  "Building practical software",
  "Learning through experimentation",
  "Technology for people",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="#home" className="text-lg font-bold tracking-tight">
          Syeda Nazish Adiba Khateeb
          <span className="text-[var(--accent)]">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-5 text-sm sm:gap-8"
        >
          <a className="transition-opacity hover:opacity-65" href="#projects">
            Projects
          </a>
          <a className="transition-opacity hover:opacity-65" href="#about">
            About
          </a>
          <a className="transition-opacity hover:opacity-65" href="#experience">
            Experience
          </a>
          <a
            className="rounded-full border border-[var(--border)] px-4 py-2 transition-colors hover:bg-[var(--surface)]"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </header>
      <section
        id="home"
        className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-16 sm:px-10 sm:pt-24 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-16 lg:pb-32"
      >
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm font-medium text-[var(--muted)]">
            <span className="h-px w-8 bg-[var(--accent)]" />
            COMPUTER SCIENCE STUDENT · ASPIRING DEVELOPER
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Learning to build.
            <br />
            Building to{" "}
            <span className="text-[var(--accent)]">make an impact.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I&apos;m Syeda Nazish Adiba Khateeb, a computer science student
            interested in practical software, thoughtful problem-solving, and
            technology that makes people&apos;s experiences better. This is
            where I document what I build, what I learn, and how I contribute.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Explore my projects <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/SyedaNazish-debug"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--surface)]"
            >
              GitHub profile
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            What guides my work
          </p>

          <div className="mt-6 space-y-5">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-start gap-4 border-b border-[var(--border)] pb-5 last:border-0 last:pb-0"
              >
                <span className="pt-1 font-mono text-sm text-[var(--accent)]">
                  0{index + 1}
                </span>
                <p className="font-medium">{area}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-[var(--muted)]">
            My approach: stay curious, understand the work, test assumptions,
            and be honest about what the evidence shows.
          </p>
        </aside>
      </section>
      <section
        id="projects"
        className="border-y border-[var(--border)] bg-[var(--surface)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-[var(--accent)]">
                SELECTED WORK
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects in practice.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              A closer look at the problems I explore, the tools I use, and what
              I learn along the way.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-transform hover:-translate-y-1 sm:p-8"
              >
                {project.image && (
                  <div className="mb-6 overflow-hidden rounded-xl border border-[var(--border)]">
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="h-52 w-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {project.number}
                  </span>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                    {project.status}
                  </span>
                </div>

                <p className="mt-8 text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 min-h-20 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                {project.contribution && (
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    <span className="font-semibold text-[var(--foreground)]">
                      My contribution:
                    </span>{" "}
                    {project.contribution}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[var(--accent)] px-4 py-2 text-white transition-opacity hover:opacity-85"
                  >
                    View code ↗
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--border)] px-4 py-2 transition-colors hover:bg-[var(--surface)]"
                    >
                      Live demo ↗
                    </a>
                  )}

                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-normal text-[var(--muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.developmentTools && (
                    <div className="flex flex-wrap gap-2">
                      {project.developmentTools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-[var(--accent)]/40 px-3 py-1 text-xs font-normal text-[var(--accent)]"
                        >
                          {tool} · AI-assisted development
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-[var(--muted)]">
            Project descriptions are introductory. Repository links, technical
            evidence, and verified implementation details will be added after
            review.
          </p>
        </div>
      </section>
      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-6 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[1fr_1.3fr]"
      >
        <div>
          <p className="text-sm font-medium text-[var(--accent)]">ABOUT ME</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Curious by nature.
            <br />
            Practical by approach.
          </h2>
        </div>
        <div className="max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">
          <p>
            I enjoy exploring how technology can solve real-world problems.
            Through my projects, I experiment with tools, understand
            implementation choices, test ideas, and improve through feedback. I
            value understanding how things work not just getting them to work.
          </p>
          <p className="mt-4">
            Beyond development, I take an active role in student initiatives,
            college events, and opportunities that help others learn and grow. I
            believe meaningful progress comes from curiosity, collaboration,
            thoughtful execution, and learning from experience.
          </p>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-[var(--border)] bg-[var(--surface)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="text-sm font-medium text-[var(--accent)]">
            BEYOND THE CODE
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Technology, people, and initiative.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                COLLEGE COMMUNICATION & DIGITAL PRESENCE
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                College LinkedIn Page Admin (Volunteer)
              </h3>
              <p className="mt-2 text-xs font-medium text-[var(--accent)]">
                September 2026 – Present
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Volunteering as an administrator for my college’s LinkedIn page, managing page content and creating and publishing posts to communicate college updates, activities, and achievements.
              </p>
            </article>

            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                STUDENT INITIATIVE
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Campus Career Connect
              </h3>
              <p className="mt-2 text-xs font-medium text-[var(--accent)]">
                Feb 2026 – Present
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Building a student community that helps college students
                discover career and learning opportunities, access
                skill-development resources, and strengthen their professional
                profiles and networking.
              </p>
            </article>

            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                WORKSHOP COORDINATION & HOSTING
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                SK Technologies — GEN-AI Workshop
              </h3>

              <p className="mt-2 text-xs font-medium text-[var(--accent)]">
                15 December 2025
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Helped coordinate the GEN-AI workshop by managing activities
                during sessions and serving as the host. The workshop was
                associated with SK Technologies, based in Hyderabad, India.
              </p>
            </article>

            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                COLLEGE EVENTS & EVENT HOSTING
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                College Events & Cross-Department Collaboration
              </h3>

              <p className="mt-2 text-xs font-medium text-[var(--accent)]">
                2024 – Present
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Contributed to college events over two years within the Computer
                Science department, taking on hosting and event-organizing
                responsibilities. Also hosted and helped cover a Science
                Exhibition organized by the Physics department, supporting event
                activities and contributing to cross-department collaboration.
              </p>
            </article>

            <article className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
                STUDENT OUTREACH & CAREER AWARENESS
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Internshala Student Partner (ISP)
              </h3>

              <p className="mt-2 text-xs font-medium text-[var(--accent)]">
                Feb 2026 – March 2026
              </p>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                Participated in the Internshala Student Partner program,
                supporting student outreach and helping peers discover
                internship opportunities, career resources, and professional
                development opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="achievements" className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <p className="text-sm font-medium text-[var(--accent)]">
            ACHIEVEMENTS & RECOGNITION
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Progress worth recognizing.
          </h2>

          <div className="mt-10 max-w-2xl rounded-2xl border border-[var(--border)] p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
              UNIVERSITY-LEVEL HACKATHON · 2026–27
            </p>

            <h3 className="mt-3 text-xl font-semibold">Top 20 Selection</h3>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Selected among the top 20 participants/teams in a university-level
              hackathon focused on entrepreneurship, innovation, incubation, and
              technology-driven solutions to societal challenges.
            </p>
          </div>

          <div className="mt-6 max-w-2xl rounded-2xl border border-[var(--border)] p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]">
              INTERNSHALA STUDENT PARTNER PROGRAM
            </p>

            <h3 className="mt-3 text-xl font-semibold">Rank 27</h3>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Achieved a ranking of 27 among more than 8,000 participants in the
              Internshala Student Partner program.
            </p>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24"
      >
        <p className="text-sm font-medium text-[var(--accent)]">
          LET&apos;S CONNECT
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Good work starts with curiosity and conversation.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
          I&apos;m interested in learning, building useful things, and
          connecting with people who care about thoughtful technology.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/SyedaNazish-debug"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            Find me on GitHub ↗
          </a>
          <a
            href="#home"
            className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--surface)]"
          >
            Back to top ↑
          </a>
        </div>
      </section>
      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>Syeda Nazish · Developer portfolio</p>
          <p>Built with Next.js, React, and TypeScript.</p>
        </div>
      </footer>
    </main>
  );
}

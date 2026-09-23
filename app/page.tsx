const projects = [
  {
    name: "ExpenseFlow",
    description: "Multi-tenant expense management with policy-driven approvals, capability-based access, PostgreSQL row-level security, OIDC sign-in, and private receipt storage.",
    detail: "Idempotency keys and optimistic locking protect approval decisions; background jobs handle notifications.",
    href: "https://github.com/AdemolaAdedoyin/expenseflow",
    tags: ["NestJS", "React", "PostgreSQL", "BullMQ", "S3 / SES"],
  },
  {
    name: "Fintech Transaction Platform",
    description: "Wallets, transfers, and reversals backed by an immutable double-entry ledger with integer money amounts and database-enforced balancing.",
    detail: "Concurrent transfer protection, a transactional outbox, signed webhooks, and an opt-in Paystack hosted-checkout adapter. The current home for my financial-systems work.",
    href: "https://github.com/AdemolaAdedoyin/fintech",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    name: "Webhook Relay",
    description: "Signed event delivery with durable fan-out, automatic retries, crash recovery, and a React operations dashboard.",
    detail: "Per-subscription throughput controls, scoped API keys, encrypted signing secrets, bounded replay, and retained delivery history.",
    href: "https://github.com/AdemolaAdedoyin/webhook-relay",
    tags: ["Express", "React", "PostgreSQL", "Redis", "BullMQ"],
  },
  {
    name: "Taskflow",
    description: "An API for one-off and recurring jobs, using PostgreSQL as the source of truth and Redis as a rebuildable execution layer.",
    detail: "Execution leases, stale-worker recovery, distributed handler limits, signed callbacks, and OpenAPI documentation.",
    href: "https://github.com/AdemolaAdedoyin/taskflow",
    tags: ["TypeScript", "Express", "PostgreSQL", "BullMQ", "OpenAPI"],
  },
  {
    name: "LLM Gateway",
    description: "A unified chat-completions API with logical model routing, provider fallback, response caching, and per-key rate limits.",
    detail: "Usage tracking makes provider calls observable. Cost estimates use illustrative pricing; this project is not a billing service.",
    href: "https://github.com/AdemolaAdedoyin/llm-gateway",
    tags: ["TypeScript", "Express", "PostgreSQL", "Redis"],
  },
  {
    name: "SupportDesk",
    description: "A customer-support inbox and portal with priority workflows, case assignment, and a Firebase-backed realtime workspace.",
    detail: "A zero-setup browser demo lets visitors explore the product without configuring Firebase.",
    href: "https://github.com/AdemolaAdedoyin/CS-Messaging-Web-App",
    demo: "https://cs-messaging-web-app-tan.vercel.app/",
    tags: ["Vue 3", "TypeScript", "Firebase", "Playwright"],
  },
  {
    name: "20 Questions",
    description: "A local two-player guessing game with privacy handoffs, round history, persistent game state, and responsive controls.",
    detail: "A self-contained frontend with unit and browser tests. Players share one device; online multiplayer is a future milestone.",
    href: "https://github.com/AdemolaAdedoyin/20questions",
    demo: "https://20questions-ten.vercel.app/",
    tags: ["Vue 3", "TypeScript", "Vitest", "Playwright"],
  },
];

const experience = [
  {
    role: "Full Stack Engineer",
    company: "Flutterwave",
    period: "Jan 2024 — Present",
    highlights: [
      "Built rule-based microservices supporting 10K+ merchants, improving fee accuracy and transaction processing.",
      "Developed services that increased internal revenue by 20% in the first year.",
      "Reduced transaction processing time by 40% and improved queueing performance by 40%.",
      "Migrated a legacy application to React, reducing maintenance costs and improving user experience alongside backend API and notification-service delivery.",
      "Integrated cryptocurrency settlement with FalconX using TypeScript and mentored junior developers and interns.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Slum Tech",
    period: "Dec 2019 — Dec 2023",
    highlights: [
      "Designed microservices with Python, Node.js, and Docker, and built REST APIs with Express for third-party integrations.",
      "Integrated secure payment gateways to reduce fraud and improve transaction success.",
      "Improved backend response time by 30% and SQL data retrieval performance by 15% within six months.",
      "Used AWS Auto Scaling to handle traffic spikes and partnered with DevOps on infrastructure automation that reduced server costs by 15%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "BD Electronics",
    period: "Feb 2018 — Dec 2019",
    highlights: [
      "Delivered API integrations that reduced data-processing time by 40%.",
      "Built web applications that increased user engagement by 30% and contributed to faster releases through Agile practices and peer code reviews.",
    ],
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "NestJS",
  "Express.js",
  "React",
  "Vue",
  "AWS",
  "Docker",
  "Kafka",
  "RabbitMQ",
  "BullMQ",
  "Redis",
  "PostgreSQL",
  "Prisma",
  "GitHub Actions",
  "MySQL",
  "MongoDB",
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">AA</a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" className="heroGrid">
          <div>
            <p className="eyebrow">Houston, TX · Backend & Distributed Systems</p>
            <h1>Ademola Adedoyin</h1>
            <h2>I build reliable APIs, financial systems, and cloud-native software.</h2>
            <p className="lead">
              Full Stack Engineer with a backend focus and experience across fintech,
              distributed systems, microservices, event-driven architecture, and AWS.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">View selected work</a>
              <a className="button" href="https://github.com/AdemolaAdedoyin" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <aside className="impactCard" aria-label="Selected engineering impact">
            <p className="eyebrow">Selected impact</p>
            <div className="metric"><strong>40%</strong><span>faster transaction processing & queueing performance</span></div>
            <div className="metric"><strong>30%</strong><span>backend response-time improvement</span></div>
            <div className="metric"><strong>10K+</strong><span>merchants supported by rule-based microservices</span></div>
          </aside>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHeading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects that reflect how I think about systems.</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>{project.detail}</p>
              </div>
              <div>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="projectLinks">
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} repository`}>Repository</a>
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} demo`}>Live demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="projectNote">Backend repositories include local setup and operational documentation. Public deployment and external-provider acceptance are separate milestones.</p>
      </section>

      <section className="section shell" id="experience">
        <div className="sectionHeading">
          <p className="eyebrow">Experience</p>
          <h2>Engineering across products, payments, platforms, and teams.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="experienceItem" key={`${item.company}-${item.role}`}>
              <div className="experienceMeta">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHeading">
          <p className="eyebrow">Core stack</p>
          <h2>Tools I use to ship dependable software.</h2>
        </div>
        <div className="skillCloud">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="section shell contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Interested in backend, platform, or distributed-systems work?</h2>
        <p>
          I’m based in Houston and open to conversations around software engineering,
          backend systems, fintech infrastructure, and cloud-native applications.
        </p>
        <div className="actions">
          <a className="button primary" href="mailto:adedoyinademola397@gmail.com">Email me</a>
          <a className="button" href="https://github.com/AdemolaAdedoyin" target="_blank" rel="noreferrer">GitHub profile</a>
          <a className="button" href="https://www.linkedin.com/in/sina-ademola-38635a162/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Ademola Adedoyin</span>
        <span>Built with Next.js + TypeScript</span>
      </footer>
    </main>
  );
}

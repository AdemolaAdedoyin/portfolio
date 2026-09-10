const projects = [
  {
    name: "ExpenseFlow",
    description:
      "A personal finance and expense-management platform. Maintained as a separate active project and featured here as part of my current engineering work.",
    href: "https://github.com/AdemolaAdedoyin/expenseflow",
    tags: ["TypeScript", "Backend", "Fintech"],
  },
  {
    name: "Fintech API",
    description:
      "An earlier fintech backend project that I am evolving into a stronger transaction-platform case study focused on reliable APIs and financial workflows.",
    href: "https://github.com/AdemolaAdedoyin/fintech",
    tags: ["Node.js", "APIs", "Fintech"],
  },
  {
    name: "Customer Support Messaging",
    description:
      "A messaging application concept designed around handling customer inquiries at scale and surfacing urgent issues.",
    href: "https://github.com/AdemolaAdedoyin/CS-Messaging-Web-App",
    tags: ["Vue", "Messaging", "Scalability"],
  },
];

const experience = [
  {
    role: "Software Engineering Manager",
    company: "Slum Tech",
    period: "2024 — Present",
    highlights: [
      "Designing scalable microservices with Python, Node.js, and Docker.",
      "Improved backend response time by 30% and SQL data retrieval performance by 15%.",
      "Used AWS Auto Scaling to handle traffic spikes while reducing downtime.",
      "Partnered with DevOps on infrastructure automation that reduced server costs by 15%.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Flutterwave",
    period: "2019 — 2023",
    highlights: [
      "Built rule-based microservices supporting 10K+ merchants.",
      "Developed revenue-impacting services that increased internal revenue by 20% in the first year.",
      "Reduced transaction processing time and improved queueing performance by 40%.",
      "Delivered scalable APIs, notification services, and frontend modernization work.",
    ],
  },
  {
    role: "Software Engineer",
    company: "BD Electronics",
    period: "2018 — 2019",
    highlights: [
      "Delivered API integrations that reduced data-processing time by 40%.",
      "Built scalable web applications and contributed to faster release cycles through Agile practices.",
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
  "MySQL",
  "MongoDB",
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <nav className="nav">
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
              Backend-focused Software Engineer and Engineering Manager with experience across fintech,
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
              </div>
              <div>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href={project.href} target="_blank" rel="noreferrer">View repository →</a>
              </div>
            </article>
          ))}
        </div>
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
        </div>
      </section>

      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Ademola Adedoyin</span>
        <span>Built with Next.js + TypeScript</span>
      </footer>
    </main>
  );
}

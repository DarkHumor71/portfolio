import { useEffect, useState } from "react";
import { Category, profile, Project, projects, skills } from "./data";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true" className="arrow">
    {diagonal ? "↗" : "→"}
  </span>
);

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
const siteUrl = (path: string) => `${basePath}${path}`;
const assetUrl = (path: string) =>
  path.startsWith("/") ? siteUrl(path) : path;

function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Résumé" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href={siteUrl("/")}
          aria-label="Mohammad Youssef, home"
        >
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="brand-type">
            MOHAMMAD
            <br />
            YOUSSEF<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
          {items.map((item) => (
            <a
              key={item.href}
              className={
                path === item.href ||
                (item.href === "/projects" && path.startsWith("/projects/"))
                  ? "active"
                  : ""
              }
              href={siteUrl(item.href)}
            >
              {item.label}
            </a>
          ))}
          <span className="nav-index">MY / 2026</span>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <span className="eyebrow light">LET'S BUILD SOMETHING</span>
          <h2>
            Have a complex problem?
            <br />
            <em>Let’s talk.</em>
          </h2>
          <a className="button button-light" href={siteUrl("/contact")}>
            Get in touch <Arrow diagonal />
          </a>
        </div>
        <div className="footer-aside">
          <div className="footer-cross" aria-hidden="true">
            ✳
          </div>
          <p>
            Working across the boundaries of hardware, firmware, software, and
            networks.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Mohammad Youssef</span>
        <span>ENGINEERED WITH PURPOSE · BUILT WITH CURIOSITY</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

function ProjectVisual({
  kind,
  large = false,
}: {
  kind: Project["visual"];
  large?: boolean;
}) {
  return (
    <div
      className={`project-visual visual-${kind}${large ? " visual-large" : ""}`}
      role="img"
      aria-label={`${kind} project diagram illustration`}
    >
      <div className="visual-grid" />
      {kind === "elevator" && (
        <>
          <div className="visual-label top-left">FIG 01 / CONTROL SYSTEM</div>
          <div className="elevator-frame">
            {[4, 3, 2, 1].map((n) => (
              <div className="floor" key={n}>
                <span>0{n}</span>
                <i className={n === 2 ? "lit" : ""} />
              </div>
            ))}
            <div className="elevator-car">
              <span>↕</span>
            </div>
          </div>
          <div className="elevator-controller">
            <span>ESP32</span>
            <i />
            <i />
            <i />
          </div>
          <span className="visual-wire wire-one" />
          <span className="visual-wire wire-two" />
          <div className="visual-label bottom-right">
            SENSOR → LOGIC → MOTION
          </div>
        </>
      )}
      {kind === "nas" && (
        <>
          <div className="visual-label top-left">FIG 02 / NETWORK STORAGE</div>
          <div className="nas-orbit orbit-one" />
          <div className="nas-orbit orbit-two" />
          <div className="nas-board">
            <span className="nas-board-top">PYNQ-Z2</span>
            <div className="nas-chip">
              LINUX
              <br />
              <small>FPGA</small>
            </div>
            <span className="nas-board-bottom">ETHERNET / STORAGE</span>
          </div>
          <div className="nas-node node-a">LAN</div>
          <div className="nas-node node-b">SSD</div>
          <div className="nas-node node-c">
            FILE
            <br />
            SHARE
          </div>
          <div className="visual-label bottom-right">CONNECTED SYSTEMS</div>
        </>
      )}
      {kind === "elesystem" && (
        <>
          <div className="visual-label top-left">FIG 03 / WEB APPLICATION</div>
          <div className="dashboard">
            <div className="dashboard-top">
              <span>● ● ●</span>
              <strong>EleSystem</strong>
              <i />
            </div>
            <div className="dashboard-body">
              <div className="dashboard-side">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="dashboard-content">
                <div className="dash-heading" />
                <div className="dash-tiles">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="dash-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          <div className="visual-label bottom-right">
            INTERFACE / API / DATA
          </div>
        </>
      )}
      {kind === "hachette" && (
        <>
          <div className="visual-label top-left">
            FIG 04 / PUBLISHING PLATFORM
          </div>
          <div className="publication">
            <div className="publication-head">
              HACHETTE
              <br />
              <span>ANTOINE</span>
            </div>
            <div className="publication-line" />
            <div className="publication-layout">
              <div className="publication-cover">
                <span>H</span>
              </div>
              <div className="publication-copy">
                <i />
                <i />
                <i />
                <b>
                  EXPLORE
                  <br />
                  THE STORIES
                </b>
              </div>
            </div>
          </div>
          <div className="visual-label bottom-right">CONTENT / EXPERIENCE</div>
        </>
      )}
    </div>
  );
}

function ProjectMedia({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (project.image) {
    return (
      <div
        className={`project-visual photo-visual${large ? " visual-large" : ""}`}
      >
        <img
          src={siteUrl(project.image)}
          alt={project.imageAlt || `${project.title} project photograph`}
        />
      </div>
    );
  }
  return <ProjectVisual kind={project.visual} large={large} />;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card card-${index % 2}`}>
      <a
        href={siteUrl(`/projects/${project.slug}`)}
        className="card-visual-link"
        aria-label={`View ${project.title} case study`}
      >
        <ProjectMedia project={project} />
      </a>
      <div className="card-meta">
        <span>
          {project.number} / {project.eyebrow}
        </span>
        <span>CASE STUDY</span>
      </div>
      <div className="card-title-row">
        <h3>
          <a href={siteUrl(`/projects/${project.slug}`)}>{project.title}</a>
        </h3>
        <a
          className="circle-link"
          href={siteUrl(`/projects/${project.slug}`)}
          aria-label={`View ${project.title}`}
        >
          <Arrow diagonal />
        </a>
      </div>
      <p>{project.summary}</p>
      <div className="tag-row">
        {project.technologies.slice(0, 3).map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  link,
  linkLabel,
}: {
  number: string;
  eyebrow: string;
  title: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-kicker">
          <b>{number}</b> / {eyebrow}
        </span>
        <h2>{title}</h2>
      </div>
      {link && (
        <a className="text-link" href={siteUrl(link)}>
          {linkLabel || "View all"} <Arrow diagonal />
        </a>
      )}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="pulse-dot" /> COMPUTER & COMMUNICATIONS ENGINEER{" "}
            <span className="hero-eyebrow-end">/ 01</span>
          </div>
          <h1>
            Engineering
            <br />
            from the <br className="mobile-break" />
            <span className="scribble-word">
              circuit
              <svg
                viewBox="0 0 320 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M3 14 Q82 3 160 11 T317 6" />
              </svg>
            </span>{" "}
            up<span className="period">.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              I’m <strong>Mohammad Youssef.</strong> I build systems that
              connect hardware, software, and networks—from physical prototypes
              to complete digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={siteUrl("/projects")}>
                Explore my work <Arrow diagonal />
              </a>
              <a className="underlined-link" href={siteUrl("/about")}>
                More about me <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div
          className="hero-panel"
          aria-label="Illustration of connected engineering systems"
        >
          <div className="hero-panel-top">
            <span>MY.ENGINEERING / SYSTEM MAP</span>
            <span>001—004</span>
          </div>
          <div className="system-map">
            <div className="map-ring ring-outer" />
            <div className="map-ring ring-inner" />
            <div className="map-center">
              <span>MY</span>
              <small>BUILD / CONNECT</small>
            </div>
            <span className="map-node map-hardware">
              01 <b>HARDWARE</b>
            </span>
            <span className="map-node map-firmware">
              02 <b>FIRMWARE</b>
            </span>
            <span className="map-node map-software">
              03 <b>SOFTWARE</b>
            </span>
            <span className="map-node map-networks">
              04 <b>NETWORKS</b>
            </span>
            <div className="map-axis axis-one" />
            <div className="map-axis axis-two" />
          </div>
          <div className="hero-panel-bottom">
            <span>
              ONE SYSTEM.
              <br />
              EVERY LAYER.
            </span>
            <span className="panel-coordinates">
              BUILD / TEST
              <br />
              CONNECT / REFINE
            </span>
          </div>
        </div>
      </section>
      <div className="discipline-strip">
        <div className="container">
          <span>EMBEDDED SYSTEMS</span>
          <i>✳</i>
          <span>SOFTWARE</span>
          <i>✳</i>
          <span>ELECTRONICS</span>
          <i>✳</i>
          <span>NETWORKS</span>
          <i>✳</i>
          <span>BUILT END TO END</span>
        </div>
      </div>
      <section className="container section featured-section">
        <SectionHeading
          number="01"
          eyebrow="SELECTED WORK"
          title="Projects with a point of view."
          link="/projects"
          linkLabel="All projects"
        />
        <div className="projects-grid">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <ProjectCard project={p} index={i} key={p.slug} />
            ))}
        </div>
      </section>
      <section className="approach-section">
        <div className="container approach-grid">
          <div>
            <span className="section-kicker">
              <b>02</b> / HOW I WORK
            </span>
            <h2>
              From signal
              <br />
              to <em>screen.</em>
            </h2>
          </div>
          <div className="approach-right">
            <p>
              Good engineering lives between disciplines. I’m interested in the
              whole path: what a sensor sees, how firmware responds, how a
              system communicates, and how people use the result.
            </p>
            <a className="text-link" href={siteUrl("/about")}>
              Explore my approach <Arrow diagonal />
            </a>
            <div className="approach-steps">
              <div>
                <span>01</span>
                <b>Understand the system</b>
              </div>
              <div>
                <span>02</span>
                <b>Build the connections</b>
              </div>
              <div>
                <span>03</span>
                <b>Test in the real world</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container section skills-preview">
        <SectionHeading
          number="03"
          eyebrow="TOOLKIT"
          title="Across every layer."
          link="/about"
          linkLabel="More about me"
        />
        <div className="skill-preview-grid">
          {skills.slice(0, 4).map((skill, i) => (
            <div className="skill-preview" key={skill.name}>
              <span>
                0{i + 1} / {skill.name.toUpperCase()}
              </span>
              <p>{skill.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const filters: Array<"All" | Category> = [
    "All",
    "Embedded",
    "Systems",
    "Web",
    "Electronics",
  ];
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <main className="page-main container">
      <div className="page-intro">
        <span className="eyebrow">INDEX / 001—004</span>
        <h1>
          Selected <em>work.</em>
        </h1>
        <p>
          Engineering projects across physical systems, Linux, and the web. Open
          a project to see its context, architecture, and technical decisions.
        </p>
      </div>
      <div
        className="filter-bar"
        role="group"
        aria-label="Filter projects by discipline"
      >
        <span>FILTER BY /</span>
        {filters.map((f) => (
          <button
            type="button"
            key={f}
            onClick={() => setFilter(f)}
            className={filter === f ? "selected" : ""}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
        <span className="filter-count">
          {String(visible.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      {visible.length ? (
        <div className="projects-grid index-grid">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>NO ENTRIES YET /</span>
          <h2>Electronics work is on its way.</h2>
          <p>
            Dedicated PCB and electronics projects will appear here as
            documentation becomes available.
          </p>
          <button type="button" onClick={() => setFilter("All")}>
            Show all projects <Arrow />
          </button>
        </div>
      )}
    </main>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="project-detail">
      <div className="container">
        <div className="breadcrumbs">
          <a href={siteUrl("/projects")}>Projects</a>
          <span>/</span>
          <span>{project.shortTitle}</span>
        </div>
        <div className="detail-heading">
          <div>
            <span className="eyebrow">
              PROJECT {project.number} / {project.eyebrow}
            </span>
            <h1>
              {project.title}
              <span className="period">.</span>
            </h1>
          </div>
          <p>{project.summary}</p>
        </div>
        <ProjectMedia project={project} large />
        <div className="detail-info-row">
          <div>
            <span>DISCIPLINE</span>
            <b>{project.category}</b>
          </div>
          <div>
            <span>ROLE</span>
            <b>{project.role}</b>
          </div>
          <div>
            <span>STACK</span>
            <b>{project.technologies.slice(0, 4).join(" / ")}</b>
          </div>
        </div>
        <div className="case-layout">
          <aside className="case-aside">
            <span>CASE STUDY / {project.number}</span>
            <a href="#overview">01 Overview</a>
            <a href="#architecture">02 Architecture</a>
            <a href="#engineering">03 Engineering notes</a>
            <a href="#outcome">04 Outcome</a>
          </aside>
          <div className="case-content">
            <section id="overview" className="case-section">
              <span className="eyebrow">01 / THE CONTEXT</span>
              <h2>Overview</h2>
              <p className="case-lead">{project.overview}</p>
              <div className="role-note">
                <span>MY ROLE</span>
                <p>{project.role}</p>
              </div>
            </section>
            <section id="architecture" className="case-section">
              <span className="eyebrow">02 / HOW IT CONNECTS</span>
              <h2>Architecture</h2>
              <p>
                The system can be understood as a small set of connected layers:
              </p>
              <div className="architecture-flow">
                {project.architecture.map((step, i) => (
                  <div className="architecture-node" key={step}>
                    <small>0{i + 1}</small>
                    <strong>{step}</strong>
                    {i < project.architecture.length - 1 && (
                      <span className="flow-arrow">↓</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="tech-block">
                <span>TOOLS & COMPONENTS</span>
                <div className="tag-row">
                  {project.technologies.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </section>
            <section id="engineering" className="case-section">
              <span className="eyebrow">03 / THE ENGINEERING</span>
              <h2>Technical notes</h2>
              <div className="notes-list">
                {project.notes.map((note, i) => (
                  <div key={note.title}>
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{note.title}</h3>
                      <p>{note.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section id="outcome" className="case-section">
              <span className="eyebrow">04 / STATUS</span>
              <h2>Outcome & next details</h2>
              <p>{project.outcome}</p>
              {(project.github || project.demo) && (
                <div className="source-links">
                  {project.github && (
                    <a
                      className="button button-dark"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View source <Arrow diagonal />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      className="button button-outline"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <Arrow diagonal />
                    </a>
                  )}
                </div>
              )}
            </section>
          </div>
        </div>
        <div className="next-project">
          <span>NEXT PROJECT /</span>
          {(() => {
            const next =
              projects[(projects.indexOf(project) + 1) % projects.length];
            return (
              <a href={siteUrl(`/projects/${next.slug}`)}>
                {next.title} <Arrow diagonal />
              </a>
            );
          })()}
        </div>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-main container">
      <div className="page-intro about-intro">
        <span className="eyebrow">ABOUT / THE ENGINEER</span>
        <h1>
          Curious across
          <br />
          <em>every layer.</em>
        </h1>
        <p>
          I’m Mohammad Youssef, a computer and communications engineer focused
          on the places where physical systems and software meet.
        </p>
      </div>
      <div className="about-statement">
        <div className="statement-mark">✳</div>
        <p>
          “I like understanding the whole system—from the electronics on the
          bench to the interface someone actually uses.”
        </p>
      </div>
      <div className="about-columns">
        <div>
          <span className="section-kicker">
            <b>01</b> / MY DIRECTION
          </span>
          <h2>
            Built to
            <br />
            connect things.
          </h2>
        </div>
        <div>
          <p>
            My work spans embedded control, Linux and networking, full-stack
            applications, and web platforms. The common thread is systems
            thinking: understanding each component, then making the pieces work
            together.
          </p>
          <p>
            That range helps me move between a board, a terminal, and a browser
            while keeping the end result in view.
          </p>
        </div>
      </div>
      <section className="about-skills">
        <SectionHeading
          number="02"
          eyebrow="CAPABILITIES"
          title="A practical toolkit."
        />
        <div className="skills-table">
          {skills.map((s, i) => (
            <div className="skills-row" key={s.name}>
              <span>0{i + 1}</span>
              <h3>{s.name}</h3>
              <p>{s.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ExperiencePage() {
  return (
    <main className="page-main container">
      <div className="page-intro">
        <span className="eyebrow">EXPERIENCE / PRACTICE</span>
        <h1>
          Work in <em>context.</em>
        </h1>
        <p>
          Professional experience and hands-on engineering projects inform the
          way I approach new systems.
        </p>
      </div>
      <div className="experience-layout">
        <div className="experience-lead">
          <span className="section-kicker">
            <b>01</b> / PROFESSIONAL
          </span>
          <h2>
            Applied
            <br />
            engineering.
          </h2>
        </div>
        <div className="experience-timeline">
          <article>
            <div className="timeline-top">
              <span>2025 — PRESENT</span>
              <span className="timeline-dot" />
            </div>
            <h3>Software Engineer</h3>
            <p className="company">ITXI</p>
            <p>Software engineering experience at ITXI.</p>
          </article>
          <article>
            <div className="timeline-top">
              <span>PROJECT PRACTICE</span>
              <span className="timeline-dot" />
            </div>
            <h3>Independent engineering work</h3>
            <p className="company">Embedded / Systems / Web</p>
            <p>
              Hands-on work across an ESP32 elevator controller, PYNQ-Z2 network
              storage, and web platforms.
            </p>
            <a className="text-link" href={siteUrl("/projects")}>
              Explore projects <Arrow diagonal />
            </a>
          </article>
        </div>
      </div>
    </main>
  );
}

function ResumePage() {
  return (
    <main className="page-main container resume-page">
      <div className="page-intro">
        <span className="eyebrow">RÉSUMÉ / QUICK VIEW</span>
        <h1>
          At a <em>glance.</em>
        </h1>
        <p>
          A concise view of my experience and technical range. Use your
          browser’s print option to save a copy.
        </p>
        <div className="resume-actions">
          <button className="button button-dark" onClick={() => window.print()}>
            Print / save as PDF <Arrow diagonal />
          </button>
          {profile.resume && (
            <a
              className="button button-outline"
              href={assetUrl(profile.resume)}
              download
            >
              Download résumé <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
      <div className="resume-sheet">
        <div className="resume-sheet-top">
          <div>
            <span className="eyebrow">COMPUTER & COMMUNICATIONS ENGINEER</span>
            <h2>
              Mohammad
              <br />
              Youssef.
            </h2>
          </div>
          <div className="resume-contact">
            {profile.email && (
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            )}
            {profile.github && <a href={profile.github}>GitHub ↗</a>}
            {profile.linkedin && <a href={profile.linkedin}>LinkedIn ↗</a>}
          </div>
        </div>
        <div className="resume-section">
          <h3>Profile</h3>
          <p>
            Engineer working across embedded systems, electronics, software, and
            networks. Interested in building connected systems from physical
            prototype through application interface.
          </p>
        </div>
        <div className="resume-section">
          <h3>Experience</h3>
          <div className="resume-entry">
            <span>2025 — PRESENT</span>
            <div>
              <strong>Software Engineer · ITXI</strong>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <h3>Selected projects</h3>
          {projects.slice(0, 3).map((p) => (
            <div className="resume-entry" key={p.slug}>
              <span>{p.category.toUpperCase()}</span>
              <div>
                <strong>{p.title}</strong>
                <p>{p.summary}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="resume-section">
          <h3>Technical skills</h3>
          <div className="resume-skill-list">
            {skills.map((s) => (
              <div key={s.name}>
                <strong>{s.name}</strong>
                <span>{s.items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  const links = [
    { label: "Email", url: profile.email ? `mailto:${profile.email}` : "" },
    { label: "GitHub", url: profile.github },
    { label: "LinkedIn", url: profile.linkedin },
  ].filter((link) => link.url);
  return (
    <main className="page-main container contact-page">
      <div className="page-intro">
        <span className="eyebrow">CONTACT / OPEN CHANNEL</span>
        <h1>
          Let’s make
          <br />
          <em>something work.</em>
        </h1>
        <p>
          Interested in embedded systems, software, or a project that connects
          both? I’d like to hear about it.
        </p>
      </div>
      <div className="contact-panel">
        <div>
          <span className="section-kicker">
            <b>01</b> / START A CONVERSATION
          </span>
          <h2>
            Good work starts
            <br />
            with a question.
          </h2>
        </div>
        <div className="contact-links">
          {links.length ? (
            links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
              >
                <span>{link.label}</span>
                <Arrow diagonal />
              </a>
            ))
          ) : (
            <div className="contact-pending">
              <span>CONTACT DETAILS</span>
              <p>
                Direct contact links will appear here when they’re available. In
                the meantime, explore the projects and résumé.
              </p>
              <a className="text-link" href={siteUrl("/projects")}>
                View projects <Arrow diagonal />
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="page-main container not-found">
      <span className="eyebrow">404 / PAGE NOT FOUND</span>
      <h1>
        Wrong turn<span className="period">.</span>
      </h1>
      <p>
        That route does not exist. The project index is a good place to restart.
      </p>
      <a className="button button-dark" href={siteUrl("/projects")}>
        View projects <Arrow />
      </a>
    </main>
  );
}

function App() {
  const fullPath = window.location.pathname.replace(/\/$/, "") || "/";
  const path =
    (fullPath === basePath
      ? "/"
      : fullPath.startsWith(`${basePath}/`)
      ? fullPath.slice(basePath.length)
      : fullPath) || "/";
  const project = path.startsWith("/projects/")
    ? projects.find((p) => p.slug === path.split("/")[2])
    : undefined;
  useEffect(() => {
    const name = project
      ? project.title
      : (
          {
            "/": "Home",
            "/projects": "Projects",
            "/about": "About",
            "/experience": "Experience",
            "/resume": "Résumé",
            "/contact": "Contact",
          } as Record<string, string>
        )[path] || "Page not found";
    document.title = `${name} — Mohammad Youssef`;
  }, [path, project]);
  let page;
  if (path === "/") page = <Home />;
  else if (path === "/projects") page = <ProjectsPage />;
  else if (project) page = <ProjectDetail project={project} />;
  else if (path === "/about") page = <AboutPage />;
  else if (path === "/experience") page = <ExperiencePage />;
  else if (path === "/resume") page = <ResumePage />;
  else if (path === "/contact") page = <ContactPage />;
  else page = <NotFound />;
  return (
    <div id="top">
      <Header path={path} />
      {page}
      <Footer />
    </div>
  );
}

export default App;

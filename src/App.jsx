import { useState } from "react";
import "./App.css";

const skills = [
  { title: "Programming", items: ["Java", "Java OOP", "Exception Handling", "Collections"] },
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React"] },
  { title: "Database", items: ["MySQL", "SQL Queries", "Joins", "Subqueries"] },
  { title: "Tools & Concepts", items: ["Git / GitHub (add your profile)", "Responsive Design", "Problem Solving"] },
];

const projects = [
  {
    number: "01",
    title: "Library Management System",
    category: "JAVA · DATABASE",
    description: "A system concept for organizing book records, tracking availability, and managing library operations.",
    tags: ["Java", "OOP", "MySQL"],
    link: "#contact",
  },
  {
    number: "02",
    title: "E-Commerce Website",
    category: "FULL STACK WEB",
    description: "A shopping website experience with product browsing and a responsive interface.",
    tags: ["React", "HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    link: "#contact",
  },
  {
    number: "03",
    title: "College Event Management",
    category: "WEB APPLICATION",
    description: "A web-based concept to share college event information and organize registrations.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    link: "#contact",
  },
  {
    number: "04",
    title: "TaskTracker",
    category: "PRODUCTIVITY TOOL",
    description: "A clean task-tracking interface designed to help users organize tasks and monitor progress.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#contact",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Somesh Waran home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">SOMESH<span>WARAN</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="/resume.pdf" download>Resume <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot"></span> OPEN TO ENTRY-LEVEL OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Somesh<br /><span>Waran.</span></h1>
            <h2 className="hero-role">Java Full Stack Developer <span className="role-divider">/</span> Fresher</h2>
            <p className="hero-summary">
              I build clean, responsive web experiences and enjoy turning ideas into practical applications.
              I’m growing my skills across Java, frontend development, and databases.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
              <a className="button button-ghost" href="/resume.pdf" download>Download résumé <span>↓</span></a>
            </div>
            <div className="hero-meta">
              <span><i className="meta-line"></i> JAVA · REACT · MYSQL</span>
              <span className="meta-location">Bengaluru, India <span className="location-dot">●</span></span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" aria-hidden="true"></div>
            <div className="photo-frame">
              <div className="photo-topline"><span>PROFILE / 001</span><span>2026</span></div>
              <img src="/profile.jpeg" alt="Somesh Waran profile portrait" className="profile-photo" />
              <div className="photo-caption">
                <div><span className="caption-label">DEVELOPER IN PROGRESS</span><strong>Curious by nature.<br />Builder by choice.</strong></div>
                <span className="caption-arrow">↗</span>
              </div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon">{"</>"}</span> Code with purpose</div>
            <div className="floating-chip chip-bottom"><span className="chip-pulse"></span> Always learning</div>
            <div className="hero-index">01 <span>—</span> 07</div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-wheel"></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="01 / ABOUT ME" title={<>A little about <span>my approach.</span></>} description="Early in my career, focused on learning deeply and building things that work." />
          <div className="about-grid">
            <div className="about-statement">
              <span className="quote-mark">“</span>
              <p>I believe good software comes from <em>clear thinking, consistent practice,</em> and a willingness to keep improving.</p>
            </div>
            <div className="about-details">
              <p>I’m a fresher pursuing opportunities as a Java Full Stack Developer. I enjoy working across user interfaces, application logic, and database fundamentals. Through academic and personal projects, I’m developing a practical understanding of how web applications are planned and built.</p>
              <p>I’m looking for a team where I can contribute, learn from experienced developers, and grow into a dependable software engineer.</p>
              <a className="text-link" href="#contact">Let’s connect <span>↗</span></a>
            </div>
          </div>
          <div className="stats-row">
            <div><strong>04</strong><span>PROJECTS TO EXPLORE</span></div>
            <div><strong>06<span className="stat-plus">+</span></strong><span>CORE TECHNOLOGIES</span></div>
            <div><strong>∞</strong><span>WILLINGNESS TO LEARN</span></div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="02 / TOOLKIT" title={<>Skills I’m <span>building with.</span></>} description="A growing toolkit for creating useful, maintainable applications." />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-symbol">{["⌘", "◈", "▤", "↗"][index]}</span></div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
            <p className="skills-note"><span>✳</span> Skills listed reflect my current learning and practice. I’m continuously expanding this toolkit.</p>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Projects with a <span>purpose.</span></>} description="A selection of projects that reflect my interest in web development and practical problem-solving." />
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href={project.link} className="project-link" aria-label={`Ask about ${project.title}`}>↗</a>
              </article>
            ))}
          </div>
          <p className="project-footnote">Add your GitHub repository and live demo links to each project before sharing this portfolio.</p>
        </section>

        <section className="education-section" id="education">
          <div className="section-wrap education-grid">
            <div>
              <SectionHeading eyebrow="04 / EDUCATION" title={<>The foundation <span>so far.</span></>} description="Update the placeholders below with your exact qualification and institution details." />
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-dot"></span>
                <p className="timeline-date">[YEAR – YEAR]</p>
                <h3>[Your Degree / Qualification]</h3>
                <p className="timeline-place">[College / University Name]</p>
                <p className="timeline-detail">[Branch / Specialization] · [CGPA or Percentage, if you want to include it]</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot"></span>
                <p className="timeline-date">TRAINING / INTERNSHIP</p>
                <h3>Java Full Stack Development</h3>
                <p className="timeline-place">[Institute / Training Provider] · [Dates]</p>
                <p className="timeline-detail">Learning Java, web technologies, React, and database fundamentals. Replace this text with the exact training completed and technologies covered.</p>
              </article>
              <article className="timeline-item">
                <span className="timeline-dot"></span>
                <p className="timeline-date">JUN – JUL 2023</p>
                <h3>Python Intern</h3>
                <p className="timeline-place">BYTS India Limited</p>
                <p className="timeline-detail">Exposure to Python, data structures and algorithms, libraries, automation, and data analysis.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-orbit orbit-one"></div><div className="contact-orbit orbit-two"></div>
            <p className="eyebrow">05 / CONTACT</p>
            <h2>Have a role<br />or idea in <span>mind?</span></h2>
            <p className="contact-copy">I’m open to entry-level software development opportunities and conversations about building useful products.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="someshwaran8531@gmail.com">Email me <span>↗</span></a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
              <a className="button button-ghost" href="https://github.com/your-github" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            </div>
            <p className="contact-placeholder-note">Replace the sample email and profile URLs with your real contact details.</p>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SOMESH<span>WARAN</span></span></a>
        <p>Designed with curiosity. Built with React.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Somesh Waran</span><span>JAVA FULL STACK DEVELOPER · FRESHER</span></div>
      </footer>
    </div>
  );
}

export default App;

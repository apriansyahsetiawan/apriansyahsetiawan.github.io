"use client";

import { useState } from "react";

type Lang = "en" | "id";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");

  const t = translations[lang];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="page-root">
        {/* Navbar */}
        <header className="navbar">
          <div className="nav-inner">
            <div className="nav-left" onClick={() => handleScroll("home")}>
              <span className="nav-logo">MAS</span>
              <span className="nav-title">Muhammad Apriansyah Setiawan</span>
            </div>
            <nav className="nav-links">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "portfolio",
                "achievements",
                "education",
                "contact",
              ].map((id) => (
                <button
                  key={id}
                  className="nav-link"
                  onClick={() => handleScroll(id)}
                >
                  {t.menu[id as keyof typeof t.menu]}
                </button>
              ))}
            </nav>
            <div className="nav-right">
              <button
                className={`lang-toggle ${lang === "id" ? "active" : ""}`}
                onClick={() => setLang("id")}
              >
                ID
              </button>
              <span className="lang-sep">/</span>
              <button
                className={`lang-toggle ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>

              <a
                href="#"
                className="btn-outline small"
              // TODO: ganti ke link CV github/drive
              >
                {t.actions.downloadCV}
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <main>
          <section id="home" className="section hero">
            <div className="hero-gradient" />
            <div className="container hero-grid fade-in">
              <div>
                <p className="eyebrow">{t.hero.eyebrow}</p>
                <h1 className="hero-title">
                  Muhammad Apriansyah{" "}
                  <span className="hero-title-highlight">Setiawan</span>
                </h1>
                <p className="hero-subtitle">
                  {t.hero.roleLine1}
                  <br />
                  {t.hero.roleLine2}
                </p>
                <p className="hero-tagline">{t.hero.tagline}</p>
                <div className="hero-actions">
                  <button
                    className="btn-primary"
                    onClick={() => handleScroll("portfolio")}
                  >
                    {t.actions.viewWork}
                  </button>
                  <button
                    className="btn-ghost"
                    onClick={() => handleScroll("contact")}
                  >
                    {t.actions.contactMe}
                  </button>
                </div>
                <div className="hero-metrics">
                  <div className="metric">
                    <div className="metric-value">5+</div>
                    <div className="metric-label">{t.metrics.years}</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">10K+</div>
                    <div className="metric-label">{t.metrics.users}</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">7</div>
                    <div className="metric-label">{t.metrics.products}</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">3</div>
                    <div className="metric-label">{t.metrics.sectors}</div>
                  </div>
                </div>
              </div>
              <div className="hero-card">
                <div className="hero-card-inner">
                  <p className="hero-quote">
                    “Finish What You Start, Stop When You Finish.”
                  </p>
                  <p className="hero-card-text">{t.hero.summary}</p>
                  <div className="hero-badges">
                    <span className="pill">Product Owner</span>
                    <span className="pill">IT Consultant</span>
                    <span className="pill">IT Project Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="section">
            <div className="container fade-in">
              <div className="section-header">
                <h2>{t.about.title}</h2>
                <p className="section-subtitle">{t.about.subtitle}</p>
              </div>
              <div className="grid-2">
                <div className="card">
                  <p className="paragraph">{t.about.p1}</p>
                  <p className="paragraph">{t.about.p2}</p>
                  <p className="paragraph">{t.about.p3}</p>
                </div>
                <div className="card">
                  <h3 className="card-title">{t.about.focusTitle}</h3>
                  <ul className="list-check">
                    {t.about.focusPoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <h3 className="card-title mt-lg">{t.about.domainTitle}</h3>
                  <p className="paragraph">{t.about.domainText}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience / Timeline */}
          <section id="experience" className="section">
            <div className="container fade-in">
              <div className="section-header">
                <h2>{t.experience.title}</h2>
                <p className="section-subtitle">{t.experience.subtitle}</p>
              </div>
              <div className="timeline">
                {t.experience.items.map((item) => (
                  <div key={item.company + item.period} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-content card">
                      <div className="timeline-header">
                        <h3>{item.role}</h3>
                        <span className="timeline-period">{item.period}</span>
                      </div>
                      <p className="timeline-company">{item.company}</p>
                      <p className="paragraph mb-sm">{item.summary}</p>
                      <ul className="bullet-list">
                        {item.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills & Tech Stack */}
          <section id="skills" className="section">
            <div className="container fade-in">
              <div className="section-header">
                <h2>{t.skills.title}</h2>
                <p className="section-subtitle">{t.skills.subtitle}</p>
              </div>
              <div className="grid-2">
                <div className="card">
                  <h3 className="card-title">{t.skills.productTitle}</h3>
                  <ul className="list-dot">
                    {t.skills.productSkills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <h3 className="card-title mt-lg">{t.skills.leadershipTitle}</h3>
                  <ul className="list-dot">
                    {t.skills.leadershipSkills.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h3 className="card-title">{t.skills.techTitle}</h3>
                  <div className="badge-group">
                    {t.skills.techBadges.map((b) => (
                      <span key={b} className="badge">
                        {b}
                      </span>
                    ))}
                  </div>
                  <h3 className="card-title mt-lg">{t.skills.toolsTitle}</h3>
                  <div className="badge-group">
                    {t.skills.toolBadges.map((b) => (
                      <span key={b} className="badge">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section id="portfolio" className="section">
            <div className="container fade-in">
              <div className="section-header">
                <h2>{t.portfolio.title}</h2>
                <p className="section-subtitle">{t.portfolio.subtitle}</p>
              </div>
              <div className="card-grid">
                {t.portfolio.projects.map((p) => (
                  <div key={p.name} className="card card-hover">
                    <div className="card-tag-row">
                      <span className="pill pill-soft">{p.type}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p className="card-role">{p.role}</p>
                    <p className="paragraph">{p.description}</p>
                    <div className="tag-row">
                      {p.tags.map((tag) => (
                        <span key={tag} className="badge small">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="card-link"
                      >
                        {t.portfolio.viewDetail}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section id="achievements" className="section">
            <div className="container fade-in">
              <div className="section-header">
                <h2>{t.achievements.title}</h2>
                <p className="section-subtitle">{t.achievements.subtitle}</p>
              </div>
              <div className="metrics-grid">
                {t.achievements.items.map((item) => (
                  <div key={item.label} className="metric-card">
                    <div className="metric-value large">{item.value}</div>
                    <div className="metric-label">{item.label}</div>
                    <p className="paragraph small">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="section">
            <div className="container fade-in">
              <div className="section-header">
                <h2>{t.education.title}</h2>
                <p className="section-subtitle">{t.education.subtitle}</p>
              </div>
              <div className="card-grid">
                {t.education.items.map((e) => (
                  <div key={e.school} className="card">
                    <p className="edu-period">{e.period}</p>
                    <h3>{e.school}</h3>
                    <p className="card-role">{e.degree}</p>
                    <p className="paragraph">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="section section-muted">
            <div className="container fade-in">
              <div className="section-header">
                <h2>{t.contact.title}</h2>
                <p className="section-subtitle">{t.contact.subtitle}</p>
              </div>
              <div className="grid-2">
                <div className="card">
                  <h3 className="card-title">{t.contact.readyTitle}</h3>
                  <p className="paragraph">{t.contact.readyText}</p>
                  <ul className="list-dot">
                    {t.contact.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <div className="contact-row">
                    <span className="contact-label">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/muhammad-apriansyah-setiawan/"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      Muhammad Apriansyah Setiawan
                    </a>
                  </div>
                  <div className="contact-row">
                    <span className="contact-label">Email</span>
                    <a
                      href="mailto:mapriansyahsetiawan@gmail.com"
                      className="contact-link"
                    >
                      mapriansyahsetiawan@gmail.com
                    </a>
                  </div>
                  <div className="contact-row">
                    <span className="contact-label">{t.contact.locationLabel}</span>
                    <span className="contact-text">Jakarta Selatan, Indonesia</span>
                  </div>
                  <button
                    className="btn-primary full"
                    onClick={() =>
                    (window.location.href =
                      "mailto:mapriansyahsetiawan@gmail.com")
                    }
                  >
                    {t.actions.contactMe}
                  </button>
                </div>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="container footer-inner">
              <span className="footer-text">
                © {new Date().getFullYear()} Muhammad Apriansyah Setiawan.
              </span>
              <span className="footer-text">
                {t.footer.madeWith}{" "}
                <span role="img" aria-label="coffee">
                  ☕
                </span>{" "}
                & React / Next.js
              </span>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

const translations = {
  en: {
    menu: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      portfolio: "Portfolio",
      achievements: "Achievements",
      education: "Education",
      contact: "Contact",
    },
    actions: {
      downloadCV: "Download CV",
      viewWork: "View Portfolio",
      contactMe: "Contact Me",
    },
    hero: {
      eyebrow: "Product Owner • IT Project Manager • IT Consultant",
      roleLine1: "Product Owner & IT Project Manager",
      roleLine2: "with Software Engineering background",
      tagline: "Bridging business goals, user needs, and technology.",
      summary:
        "I design and deliver digital products that solve real problems, from early discovery to launch and iteration. Experienced in SaaS platforms, certification systems, and large-scale government solutions.",
    },
    metrics: {
      years: "Years in tech & product",
      users: "Users served",
      products: "Digital products shipped",
      sectors: "Industry & public sectors",
    },
    about: {
      title: "About Me",
      subtitle: "A product-minded technologist who enjoys solving complex problems.",
      p1: "I'm a Product Owner with more than 5 years of experience in technology companies. One of the key products I led is NAS Online, a SaaS platform for professional certification used by 10,000+ applicants.",
      p2: "I work closely with stakeholders to understand their needs, prioritize features, and ensure the product roadmap aligns with both business goals and user experience. I'm comfortable facilitating discussions between business, operations, and engineering.",
      p3: "My early career as a Software Engineer and later as a Technical Lead helps me make realistic decisions about scope, effort, and risk while still protecting product value and user experience.",
      focusTitle: "What I Focus On",
      focusPoints: [
        "Translating business problems into clear product requirements",
        "Balancing user needs, technical constraints, and timelines",
        "Building scalable systems with measurable impact",
        "Ensuring smooth collaboration across cross-functional teams",
      ],
      domainTitle: "Domains & Contexts",
      domainText:
        "I have worked on SaaS platforms, certification systems (LSP), government and public sector solutions, including large-scale learning and talent management ecosystems.",
    },
    experience: {
      title: "Experience & Career Timeline",
      subtitle: "A quick look at how my roles evolved over time.",
      items: [
        {
          company: "Technology & Consulting Projects",
          role: "IT Consultant & Product Advisor",
          period: "2023 – Present",
          summary:
            "Advising on system design, product strategy, and implementation for digital platforms in education, certification, and public sector.",
          highlights: [
            "Helped align product features with regulatory requirements and operational workflows.",
            "Provided guidance on architecture, integration, and roadmap planning.",
          ],
        },
        {
          company: "Product Company",
          role: "Product Owner & IT Project Manager",
          period: "2019 – Present",
          summary:
            "Leading the end-to-end lifecycle of digital products, from discovery to delivery, with a focus on SaaS and large-scale platforms.",
          highlights: [
            "Led NAS Online, a professional certification SaaS used by 10K+ applicants.",
            "Managed cross-functional teams (engineering, QA, operations, and business).",
            "Introduced product practices like backlog grooming, roadmap, and release planning.",
          ],
        },
        {
          company: "Previous Roles",
          role: "Software Engineer & Technical Lead",
          period: "2016 – 2019",
          summary:
            "Built and maintained web and mobile applications while growing into a leadership role.",
          highlights: [
            "Wrote clean, maintainable code across frontend and backend.",
            "Collaborated with designers and PMs to bring features from idea to production.",
          ],
        },
      ],
    },
    skills: {
      title: "Skills & Tech Stack",
      subtitle: "Combining product mindset, leadership, and technical understanding.",
      productTitle: "Product & Delivery",
      productSkills: [
        "Product discovery & requirement gathering",
        "Writing clear user stories & acceptance criteria",
        "Roadmap & release planning",
        "Backlog management & prioritization",
        "Agile delivery with Scrum/Kanban",
      ],
      leadershipTitle: "Leadership & Collaboration",
      leadershipSkills: [
        "Leading cross-functional teams",
        "Facilitating stakeholder workshops",
        "Risk management and trade-off decisions",
        "Mentoring & supporting team members",
      ],
      techTitle: "Tech Stack (Familiar / Worked With)",
      techBadges: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Golang",
        "REST API",
        "PostgreSQL",
        "Docker",
        "Git",
        "CI/CD",
      ],
      toolsTitle: "Product & Collaboration Tools",
      toolBadges: ["Jira", "Confluence", "Notion", "Whimsical", "Figma", "Miro"],
    },
    portfolio: {
      title: "Selected Projects",
      subtitle:
        "A mix of SaaS platforms, public sector systems, and digital products I helped shape.",
      viewDetail: "View details / case study",
      projects: [
        {
          name: "NAS Online",
          type: "SaaS Platform",
          role: "Product Owner & Technical Lead",
          description:
            "Professional certification SaaS platform enabling applicants to register, schedule, and take certification exams online.",
          tags: ["Certification", "SaaS", "LSP", "Web App"],
          link: "",
        },
        {
          name: "Sertimedia",
          type: "Web App",
          role: "Product Owner",
          description:
            "Platform to manage training and certification media, improving content management and delivery for stakeholders.",
          tags: ["Content Management", "Training", "Web"],
          link: "",
        },
        {
          name: "Manajemen Mutu LSP",
          type: "Enterprise System",
          role: "IT Consultant & Product Owner",
          description:
            "Quality management system to support LSP operations, workflows, and compliance with standards.",
          tags: ["LSP", "Quality Management", "Workflow"],
          link: "",
        },
        {
          name: "buangsampah.com",
          type: "Web Platform",
          role: "Product & Tech",
          description:
            "Digital initiative encouraging better waste management through awareness and simple digital tools.",
          tags: ["Environmental", "Campaign", "Web"],
          link: "",
        },
        {
          name: "HPJI App",
          type: "Mobile App",
          role: "Product Consultant",
          description:
            "Application for professional association members to access information, events, and membership services.",
          tags: ["Association", "Mobile", "Community"],
          link: "",
        },
        {
          name: "Siksorogo Super App",
          type: "Super App",
          role: "Product Owner",
          description:
            "Super app concept integrating multiple services into a single access point for users.",
          tags: ["Super App", "Mobile", "Integration"],
          link: "",
        },
        {
          name: "OneKlik BPSDM Kemhan",
          type: "Enterprise Platform",
          role: "Product Owner & System Designer",
          description:
            "Integrated ecosystem for learning, assessment, and talent management within BPSDM Kemhan.",
          tags: ["Government", "LMS/TMS", "Enterprise"],
          link: "",
        },
      ],
    },
    achievements: {
      title: "Achievements",
      subtitle: "Some highlights from the products and teams I've worked with.",
      items: [
        {
          value: "10K+",
          label: "Certification Applicants",
          detail:
            "Registered and served through NAS Online and related platforms.",
        },
        {
          value: "7+",
          label: "Major Digital Products",
          detail:
            "From SaaS certification to government and public sector solutions.",
        },
        {
          value: "5+",
          label: "Years in Product & Delivery",
          detail:
            "Working across product ownership, IT project management, and consulting.",
        },
        {
          value: "4+",
          label: "Domains",
          detail:
            "Certification, education, public sector, and professional associations.",
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "Formal background that supports my work in tech & product.",
      items: [
        {
          school: "University of Indonesia",
          degree: "Master of Information Technology",
          period: "Feb 2019 – Jan 2022",
          detail:
            "Focused on information systems, software engineering, and digital transformation.",
        },
        {
          school: "University of Lampung",
          degree: "Bachelor of Computer Science",
          period: "Sept 2013 – Mar 2018",
          detail:
            "Built a strong foundation in computer science and software development.",
        },
      ],
    },
    contact: {
      title: "Let’s Work Together",
      subtitle: "Open to collaboration, consulting, and product discussions.",
      readyTitle: "Ready for the next challenge",
      readyText:
        "If you are looking for someone who can translate complex requirements into clear digital products, I'd be happy to talk.",
      points: [
        "Product ownership and IT project management",
        "System design for learning, certification, or public sector",
        "Advisory on product strategy and implementation",
      ],
      locationLabel: "Based in",
    },
    footer: {
      madeWith: "Made with",
    },
  },

  id: {
    menu: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      skills: "Keahlian",
      portfolio: "Portofolio",
      achievements: "Pencapaian",
      education: "Pendidikan",
      contact: "Kontak",
    },
    actions: {
      downloadCV: "Unduh CV",
      viewWork: "Lihat Portofolio",
      contactMe: "Hubungi Saya",
    },
    hero: {
      eyebrow: "Product Owner • IT Project Manager • IT Consultant",
      roleLine1: "Product Owner & IT Project Manager",
      roleLine2: "dengan latar belakang Software Engineering",
      tagline: "Menjembatani tujuan bisnis, kebutuhan pengguna, dan teknologi.",
      summary:
        "Saya membantu merancang dan mengantarkan produk digital dari tahap ide, discovery, hingga rilis dan iterasi. Berpengalaman di platform SaaS, sistem sertifikasi, dan solusi berskala besar untuk sektor publik.",
    },
    metrics: {
      years: "Tahun di dunia teknologi & produk",
      users: "Pengguna yang terlayani",
      products: "Produk digital yang dirilis",
      sectors: "Sektor industri & publik",
    },
    about: {
      title: "Tentang Saya",
      subtitle:
        "Seorang technologist berorientasi produk yang senang menyelesaikan masalah kompleks.",
      p1: "Saya bekerja sebagai Product Owner dengan pengalaman lebih dari 5 tahun di perusahaan teknologi. Salah satu produk utama yang saya pimpin adalah NAS Online, platform SaaS sertifikasi profesi yang telah digunakan oleh lebih dari 10.000 pemohon.",
      p2: "Saya terbiasa berkolaborasi dengan berbagai stakeholder untuk memahami kebutuhan, memprioritaskan fitur, dan memastikan roadmap produk selaras dengan target bisnis dan pengalaman pengguna.",
      p3: "Latar belakang saya sebagai Software Engineer dan pernah dipercaya menjadi Technical Lead membantu saya mengambil keputusan yang realistis terkait scope, effort, dan risiko, tanpa mengorbankan value dan kualitas produk.",
      focusTitle: "Fokus Utama",
      focusPoints: [
        "Menerjemahkan masalah bisnis menjadi requirement produk yang jelas",
        "Menjaga keseimbangan antara kebutuhan pengguna, teknis, dan waktu",
        "Membangun sistem yang skalabel dengan dampak terukur",
        "Memastikan kolaborasi yang sehat antar tim lintas fungsi",
      ],
      domainTitle: "Domain & Konteks",
      domainText:
        "Saya berpengalaman di platform SaaS, sistem sertifikasi (LSP), solusi pemerintahan dan sektor publik, termasuk ekosistem pembelajaran dan manajemen talenta berskala besar.",
    },
    experience: {
      title: "Pengalaman & Timeline Karier",
      subtitle: "Ringkasan perjalanan karier saya dalam beberapa tahun terakhir.",
      items: [
        {
          company: "Berbagai Proyek Teknologi & Konsultasi",
          role: "IT Consultant & Product Advisor",
          period: "2023 – Sekarang",
          summary:
            "Memberikan masukan terkait desain sistem, strategi produk, dan implementasi solusi digital di area pembelajaran, sertifikasi, dan sektor publik.",
          highlights: [
            "Membantu menyelaraskan fitur produk dengan regulasi dan proses operasional.",
            "Memberikan rekomendasi arsitektur, integrasi, dan prioritas roadmap.",
          ],
        },
        {
          company: "Perusahaan Teknologi",
          role: "Product Owner & IT Project Manager",
          period: "2019 – Sekarang",
          summary:
            "Memimpin lifecycle produk digital end-to-end dengan fokus pada platform SaaS dan sistem berskala besar.",
          highlights: [
            "Memimpin NAS Online, platform sertifikasi profesi yang digunakan 10K+ pemohon.",
            "Mengelola tim lintas fungsi (engineering, QA, operasi, dan bisnis).",
            "Membangun praktik produk seperti backlog grooming, roadmap, dan release planning.",
          ],
        },
        {
          company: "Peran Sebelumnya",
          role: "Software Engineer & Technical Lead",
          period: "2016 – 2019",
          summary:
            "Mengembangkan dan memelihara aplikasi web dan mobile, sekaligus berkembang ke peran leadership.",
          highlights: [
            "Menulis kode yang rapi dan maintainable di sisi frontend dan backend.",
            "Berkoordinasi dengan desainer dan PM untuk merealisasikan fitur hingga production.",
          ],
        },
      ],
    },
    skills: {
      title: "Keahlian & Tech Stack",
      subtitle:
        "Perpaduan mindset produk, kepemimpinan, dan pemahaman teknis yang kuat.",
      productTitle: "Produk & Delivery",
      productSkills: [
        "Product discovery & penggalian kebutuhan",
        "Menulis user story & acceptance criteria yang jelas",
        "Perencanaan roadmap & release",
        "Manajemen backlog & prioritas",
        "Agile delivery (Scrum/Kanban)",
      ],
      leadershipTitle: "Kepemimpinan & Kolaborasi",
      leadershipSkills: [
        "Memimpin tim lintas fungsi",
        "Memfasilitasi diskusi dan workshop dengan stakeholder",
        "Manajemen risiko dan pengambilan keputusan trade-off",
        "Mendukung dan mengarahkan anggota tim",
      ],
      techTitle: "Tech Stack (Pernah Digunakan / Familiar)",
      techBadges: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Golang",
        "REST API",
        "PostgreSQL",
        "Docker",
        "Git",
        "CI/CD",
      ],
      toolsTitle: "Tools Produk & Kolaborasi",
      toolBadges: ["Jira", "Confluence", "Notion", "Whimsical", "Figma", "Miro"],
    },
    portfolio: {
      title: "Proyek Terpilih",
      subtitle:
        "Beberapa produk digital yang saya bantu rancang dan kembangkan.",
      viewDetail: "Lihat detail / studi kasus",
      projects: [
        {
          name: "NAS Online",
          type: "Platform SaaS",
          role: "Product Owner & Technical Lead",
          description:
            "Platform SaaS sertifikasi profesi untuk pendaftaran, penjadwalan, dan pelaksanaan uji sertifikasi secara online.",
          tags: ["Sertifikasi", "SaaS", "LSP", "Web App"],
          link: "",
        },
        {
          name: "Sertimedia",
          type: "Aplikasi Web",
          role: "Product Owner",
          description:
            "Platform untuk mengelola media pelatihan dan sertifikasi sehingga distribusi konten ke peserta lebih terstruktur.",
          tags: ["Manajemen Konten", "Pelatihan", "Web"],
          link: "",
        },
        {
          name: "Manajemen Mutu LSP",
          type: "Sistem Enterprise",
          role: "IT Consultant & Product Owner",
          description:
            "Sistem manajemen mutu untuk mendukung operasional LSP dan pemenuhan standar mutu sertifikasi.",
          tags: ["LSP", "Manajemen Mutu", "Workflow"],
          link: "",
        },
        {
          name: "buangsampah.com",
          type: "Platform Web",
          role: "Produk & Teknologi",
          description:
            "Inisiatif digital untuk mendorong pengelolaan sampah yang lebih baik melalui kampanye dan fitur sederhana.",
          tags: ["Lingkungan", "Kampanye", "Web"],
          link: "",
        },
        {
          name: "HPJI App",
          type: "Aplikasi Mobile",
          role: "Konsultan Produk",
          description:
            "Aplikasi anggota asosiasi untuk mengakses informasi, kegiatan, dan layanan keanggotaan.",
          tags: ["Asosiasi", "Mobile", "Komunitas"],
          link: "",
        },
        {
          name: "Siksorogo Super App",
          type: "Super App",
          role: "Product Owner",
          description:
            "Konsep super app yang mengintegrasikan berbagai layanan dalam satu akses aplikasi.",
          tags: ["Super App", "Mobile", "Integrasi"],
          link: "",
        },
        {
          name: "OneKlik BPSDM Kemhan",
          type: "Platform Enterprise",
          role: "Product Owner & Perancang Sistem",
          description:
            "Ekosistem terpadu untuk pembelajaran, assessment, dan manajemen talenta di lingkungan BPSDM Kemhan.",
          tags: ["Pemerintahan", "LMS/TMS", "Enterprise"],
          link: "",
        },
      ],
    },
    achievements: {
      title: "Pencapaian",
      subtitle: "Beberapa capaian dari produk dan tim yang saya tangani.",
      items: [
        {
          value: "10K+",
          label: "Pemohon Sertifikasi",
          detail:
            "Terlayani melalui NAS Online dan platform terkait lainnya.",
        },
        {
          value: "7+",
          label: "Produk Digital Utama",
          detail:
            "Mulai dari platform SaaS sertifikasi hingga solusi sektor publik.",
        },
        {
          value: "5+",
          label: "Tahun di Produk & Delivery",
          detail:
            "Berperan di product ownership, IT project management, dan konsultasi.",
        },
        {
          value: "4+",
          label: "Domain",
          detail:
            "Sertifikasi, pendidikan, sektor publik, dan asosiasi profesi.",
        },
      ],
    },
    education: {
      title: "Pendidikan",
      subtitle: "Latar belakang akademik yang menunjang karier saya.",
      items: [
        {
          school: "Universitas Indonesia",
          degree: "Magister Teknologi Informasi",
          period: "Feb 2019 – Jan 2022",
          detail:
            "Fokus di sistem informasi, rekayasa perangkat lunak, dan transformasi digital.",
        },
        {
          school: "Universitas Lampung",
          degree: "Sarjana Ilmu Komputer",
          period: "Sept 2013 – Mar 2018",
          detail:
            "Membangun fondasi kuat di bidang ilmu komputer dan pengembangan perangkat lunak.",
        },
      ],
    },
    contact: {
      title: "Mari Berkolaborasi",
      subtitle: "Terbuka untuk diskusi, konsultasi, dan kerja sama.",
      readyTitle: "Siap untuk tantangan berikutnya",
      readyText:
        "Jika Anda membutuhkan seseorang yang dapat menerjemahkan kebutuhan kompleks menjadi produk digital yang jelas dan terukur, saya siap membantu.",
      points: [
        "Product ownership dan IT project management",
        "Perancangan sistem pembelajaran, sertifikasi, atau sektor publik",
        "Diskusi strategi produk dan implementasi",
      ],
      locationLabel: "Berbasis di",
    },
    footer: {
      madeWith: "Dibuat dengan",
    },
  },
} as const;

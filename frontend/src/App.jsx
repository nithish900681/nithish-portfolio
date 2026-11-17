import { useCallback, useEffect, useState } from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  UserRound,
  X,
  Volume2,
  Zap,
  Cpu,
  Database,
  Globe,
} from "lucide-react";

import {
  profile,
  skills,
  experience,
  projects,
  certifications,
  softSkills,
  PHOTO_PATH,
} from "./data";

const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const greeting =
  "Hello recruiter! Welcome to my portfolio. I'm Nithish, a Python Full Stack Developer. Thank you for visiting. Explore my skills, experience and projects. I look forward to connecting with you.";

// MALE VOICE FUNCTION
function speakGreeting(onStart = () => {}, onEnd = () => {}) {
  if (!("speechSynthesis" in window)) {
    alert("Your browser does not support voice playback.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(greeting);

  utterance.lang = "en-IN";
  utterance.rate = 0.95;
  utterance.pitch = 0.85;
  utterance.volume = 1;

  let started = false;

  const startSpeaking = () => {
    if (started) return;
    started = true;

    const voices = window.speechSynthesis.getVoices();

    // Try to find a male English voice
    const maleVoice = voices.find((voice) =>
      /david|mark|guy|james|ryan|daniel|male|alex|google uk english male/i.test(
        voice.name
      )
    );

    // Prefer Indian English if a male voice is unavailable
    const indianEnglishVoice = voices.find(
      (voice) => voice.lang.toLowerCase() === "en-in"
    );

    // Otherwise use another available English voice
    const englishVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith("en")
    );

    utterance.voice =
      maleVoice || indianEnglishVoice || englishVoice || null;

    window.speechSynthesis.speak(utterance);
  };

  utterance.onstart = onStart;
  utterance.onend = onEnd;

  utterance.onerror = (event) => {
    console.log("Speech error:", event.error);
    onEnd();
  };

  const voices = window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    startSpeaking();
  } else {
    window.speechSynthesis.addEventListener(
      "voiceschanged",
      startSpeaking,
      { once: true }
    );

    setTimeout(() => {
      if (!started) {
        startSpeaking();
      }
    }, 1000);
  }
}

// AVATAR
function Avatar({ className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`avatar-fallback ${className}`}>
        <UserRound size={34} />
      </div>
    );
  }

  return (
    <img
      className={`avatar ${className}`}
      src={PHOTO_PATH}
      alt="Nithish K R"
      onError={() => setFailed(true)}
    />
  );
}

// WELCOME SCREEN
function Welcome({ onEnter }) {
  const [speaking, setSpeaking] = useState(false);
  const [played, setPlayed] = useState(false);

  // AUTOMATIC REDIRECT AFTER 10 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      window.speechSynthesis?.cancel();
      onEnter();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onEnter]);

  const playVoice = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    setPlayed(true);

    speakGreeting(
      () => setSpeaking(true),
      () => setSpeaking(false)
    );
  };

  const handleEnter = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    onEnter();
  };

  return (
    <main className="welcome-screen">
      <div className="welcome-orb orb-one" />
      <div className="welcome-orb orb-two" />
      <div className="welcome-grid" />

      <div className="welcome-content">

        <div className="welcome-kicker">
          <Sparkles size={14} />
          A PERSONAL INTRODUCTION
        </div>

        <div
          className={`anime-scene ${
            speaking ? "is-speaking" : ""
          }`}
        >
          <div className="anime-halo" />

          <div className="anime-character">

            <div className="anime-hair">
              <i />
              <i />
              <i />
              <i />
            </div>

            <div className="anime-face">

              <div className="anime-ear left" />
              <div className="anime-ear right" />

              <div className="anime-brow left" />
              <div className="anime-brow right" />

              <div className="anime-eye left">
                <i />
              </div>

              <div className="anime-eye right">
                <i />
              </div>

              <div className="anime-blush left" />
              <div className="anime-blush right" />

              <div className="anime-nose" />

              <div className="anime-mouth">
                <i />
              </div>

            </div>

            <div className="anime-neck" />

            <div className="anime-body">
              <div className="hoodie-line" />
              <div className="hoodie-mark">N</div>
            </div>

            <div className="anime-arm">
              <div className="anime-hand">✦</div>
            </div>

          </div>

          <div className="speech-bubble">
            {speaking ? "Hello recruiter!" : "Hey there! 👋"}
          </div>

          <span className="spark spark-a">✦</span>
          <span className="spark spark-b">✧</span>
          <span className="spark spark-c">✦</span>

        </div>

        <h1>
          Hey there, <span>recruiter!</span>
        </h1>

        <p className="welcome-line">
          Welcome to my portfolio. I'm{" "}
          <strong>Nithish</strong>.
        </p>

        <p className="welcome-sub">
          A little introduction before you explore my work.
        </p>

        {/* SOUND BUTTON */}
        <div className="welcome-actions">

          <button
            className="sound-button"
            onClick={playVoice}
            type="button"
          >
            <Volume2 size={18} />

            {speaking
              ? "Stop Voice"
              : played
                ? "Replay Greeting"
                : "Play Voice Greeting"}
          </button>

          <button
            className="skip-button"
            onClick={handleEnter}
            type="button"
          >
            Skip intro <ArrowUpRight size={15} />
          </button>

        </div>

        <p className="audio-note">
          {speaking
            ? "Playing your welcome message..."
            : "Click Play Voice Greeting to hear my introduction."}
        </p>

      </div>
    </main>
  );
}

// SECTION TITLE
function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </div>
  );
}

// HEADER
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Contact", "contact"],
  ];

  return (
    <header className="topbar">

      <a href="#home" className="brand">
        <span className="brand-mark">N.</span>

        <span>
          NITHISH<span className="brand-dot">.</span>
        </span>
      </a>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>

        {links.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}

      </nav>

      <a className="top-contact" href="#contact">
        Let's connect <ArrowUpRight size={15} />
      </a>

    </header>
  );
}

// HERO
function Hero({ onReplay }) {
  return (
    <section className="hero section-wrap" id="home">

      <div className="hero-copy">

        <div className="availability">
          <span />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Nithish <span>K R</span><b>.</b>
        </h1>

        <h2>Python Full Stack Developer</h2>

        <p className="hero-description">
          {profile.summary}
        </p>

        <div className="hero-tags">
          <span>Python</span>
          <span>React.js</span>
          <span>AI & Data</span>
          <span>FastAPI</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="button-primary">
            Explore my work <ArrowUpRight size={17} />
          </a>
        </div>

        <button
          className="replay-button"
          onClick={onReplay}
          type="button"
        >
          <Volume2 size={14} />
          Replay welcome voice
        </button>

      </div>

      <div className="hero-visual">

        <div className="visual-ring ring-one" />
        <div className="visual-ring ring-two" />

        <div className="profile-frame">
          <Avatar className="hero-photo" />
        </div>

        <div className="floating-card card-python">
          <span className="float-icon">Py</span>

          <span>
            <b>Python</b>
            <small>Development</small>
          </span>
        </div>

        <div className="floating-card card-ai">
          <Sparkles size={17} />

          <span>
            <b>AI & Data</b>
            <small>Building smart tools</small>
          </span>
        </div>

        <div className="hero-index">
          01 <i /> PORTFOLIO
        </div>

      </div>

      <a href="#about" className="scroll-cue">
        <ArrowDown size={15} />
        SCROLL TO EXPLORE
      </a>

    </section>
  );
}

// ABOUT
function About() {
  return (
    <section className="section-wrap section-block" id="about">

      <SectionTitle
        eyebrow="01 / ABOUT ME"
        title="A little about my journey"
        text="Curious by nature. Developer by choice. Focused on turning ideas into useful digital experiences."
      />

      <div className="about-grid">

        <div className="about-panel">

          <div className="panel-icon">
            <UserRound />
          </div>

          <h3>Building with purpose.</h3>

          <p>{profile.summary}</p>

          <p>
            I enjoy working across the stack — from shaping
            backend APIs and handling data to creating clear,
            responsive user experiences.
          </p>

          <div className="about-location">
            <MapPin size={15} />
            Bengaluru, India
          </div>

        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <strong>8.81</strong>
            <span>CGPA / 10</span>
            <small>Engineering degree</small>
          </div>

          <div className="stat-card">
            <strong>03</strong>
            <span>FEATURED PROJECTS</span>
            <small>Across software & IoT</small>
          </div>

          <div className="stat-card">
            <strong>01</strong>
            <span>INTERNSHIP</span>
            <small>Full stack development</small>
          </div>

          <div className="stat-card">
            <strong>02</strong>
            <span>CERTIFICATIONS</span>
            <small>Generative AI</small>
          </div>

        </div>

      </div>

    </section>
  );
}

// SKILLS
function Skills() {
  const groups = [...new Set(skills.map((s) => s.group))];

  const icons = {
    Programming: Code2,
    Web: Globe,
    Backend: Zap,
    Data: Database,
    Tools: Cpu,
    AI: Sparkles,
  };

  return (
    <section className="section-wrap section-block" id="skills">

      <SectionTitle
        eyebrow="02 / TOOLKIT"
        title="Skills & technologies"
        text="The tools and technologies I use to build, connect and improve applications."
      />

      <div className="skill-groups">

        {groups.map((group) => {
          const Icon = icons[group] || Code2;

          return (
            <div className="skill-group" key={group}>

              <div className="skill-group-title">
                <Icon size={18} />
                <h3>{group}</h3>
              </div>

              <div className="skill-pills">

                {skills
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <span key={s.name}>{s.name}</span>
                  ))}

              </div>

            </div>
          );
        })}

      </div>

      <div className="soft-skills">

        <span className="eyebrow">HOW I WORK</span>

        {softSkills.map((s) => (
          <span key={s}>
            <Check size={13} /> {s}
          </span>
        ))}

      </div>

    </section>
  );
}

// EXPERIENCE
function Experience() {
  return (
    <section className="section-wrap section-block" id="experience">

      <SectionTitle
        eyebrow="03 / EXPERIENCE"
        title="Where I've contributed"
        text="Hands-on experience building applications, collaborating with a team and shipping features."
      />

      <div className="timeline">

        <div className="timeline-dot" />

        <div className="experience-card">

          <div className="experience-top">

            <div>

              <span className="eyebrow">
                JAN 2026 — MAY 2026
              </span>

              <h3>{experience.role}</h3>

              <p>
                {experience.company} <span>·</span>{" "}
                {experience.location}
              </p>

            </div>

            <div className="company-stamp">SX</div>

          </div>

          <ul>
            {experience.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <div className="experience-foot">
            <Award size={16} />
            CEO Commendation — Technical Excellence
          </div>

        </div>

      </div>

    </section>
  );
}

// PROJECTS
function Projects() {
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionTitle
        eyebrow="04 / SELECTED WORK"
        title="Projects I've brought to life"
        text="A selection of projects that reflect my interests in AI, data, full-stack development and connected systems."
      />

      <div className="project-grid">
        {projects.map((p) => (
          <article
            className={`project-card ${p.accent || ""}`}
            key={p.number}
          >
            <div className="project-card-top">
              <span className="project-number">{p.number} / PROJECT</span>
              <span className="project-period">{p.period}</span>
            </div>

            {/* PROJECT IMAGE */}
            <div
              className="project-image"
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #172033, #263b58)",
                margin: "18px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.title} project screenshot`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.parentElement.textContent =
                      "Project image not found. Check the image filename in public/images.";
                    event.currentTarget.parentElement.style.padding = "20px";
                    event.currentTarget.parentElement.style.color = "#ffffff";
                    event.currentTarget.parentElement.style.textAlign = "center";
                  }}
                />
              ) : (
                <span style={{ color: "#ffffff", padding: "20px", textAlign: "center" }}>
                  Add an image path for this project in data.js
                </span>
              )}
            </div>

            <div className="project-content">
              <span className="project-subtitle">{p.subtitle}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <ul>
                {(p.highlights || []).map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>

              <div className="tech-list">
                {(p.stack || []).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Code2 size={15} />
                    GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Live demo
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// EDUCATION
function Education() {
  return (
    <section className="section-wrap section-block" id="education">

      <SectionTitle
        eyebrow="05 / EDUCATION"
        title="The foundation"
        text="A strong academic foundation in information science and engineering."
      />

      <div className="education-card">

        <div className="education-icon">
          <GraduationCap size={28} />
        </div>

        <div className="education-info">

          <span className="eyebrow">
            {profile.education.duration}
          </span>

          <h3>{profile.education.degree}</h3>

          <h4>{profile.education.field}</h4>

          <p>{profile.education.college}</p>

        </div>

        <div className="cgpa">
          <strong>8.81</strong>
          <span>CGPA / 10.0</span>
        </div>

      </div>

      <div className="cert-grid">

        {certifications.map((c) => (
          <div className="cert-card" key={c.name}>

            <div className="cert-icon">
              <Award size={19} />
            </div>

            <div>
              <h4>{c.name}</h4>
              <p>{c.issuer}</p>
              <small>{c.date}</small>
            </div>

            <Check size={17} className="cert-check" />

          </div>
        ))}

      </div>

    </section>
  );
}

// CONTACT
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Portfolio enquiry",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    setBusy(true);
    setStatus("");

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Backend unavailable");
      }

      const data = await response.json();

      setStatus(data.message || "Message sent!");

      setForm({
        name: "",
        email: "",
        subject: "Portfolio enquiry",
        message: "",
      });

    } catch {
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;

      window.location.href = mailto;

      setStatus(
        "Opening your email app to send the message."
      );

    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      className="section-wrap section-block contact-section"
      id="contact"
    >

      <SectionTitle
        eyebrow="06 / GET IN TOUCH"
        title="Let's build something meaningful."
        text="Have an opportunity, project idea or just want to connect? I'd be happy to hear from you."
      />

      <div className="contact-grid">

        <div className="contact-info">

          <a href={`mailto:${profile.email}`}>
            <span><Mail /></span>

            <div>
              <small>EMAIL</small>
              <b>{profile.email}</b>
            </div>

            <ArrowUpRight />
          </a>

          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <span><Phone /></span>

            <div>
              <small>PHONE</small>
              <b>{profile.phone}</b>
            </div>

            <ArrowUpRight />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span><BriefcaseBusiness /></span>

            <div>
              <small>LINKEDIN</small>
              <b>Connect professionally</b>
            </div>

            <ArrowUpRight />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span><Code2 /></span>

            <div>
              <small>GITHUB</small>
              <b>Explore my code</b>
            </div>

            <ArrowUpRight />
          </a>

        </div>

        <form className="contact-form" onSubmit={submit}>

          <div className="form-row">

            <label>
              Your name

              <input
                required
                minLength={2}
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Enter your name"
              />
            </label>

            <label>
              Email address

              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
              />
            </label>

          </div>

          <label>
            Subject

            <input
              required
              name="subject"
              value={form.subject}
              onChange={update}
            />
          </label>

          <label>
            Message

            <textarea
              required
              minLength={10}
              rows={4}
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Write your message..."
            />
          </label>

          <button
            className="button-primary"
            disabled={busy}
            type="submit"
          >
            {busy ? "Sending..." : "Send message"}
            <Send size={15} />
          </button>

          {status && (
            <p className="form-status">{status}</p>
          )}

        </form>

      </div>

    </section>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="footer">

      <a href="#home" className="brand">
        <span className="brand-mark">N.</span>

        <span>
          NITHISH<span className="brand-dot">.</span>
        </span>
      </a>

      <p>
        Designed & built with curiosity by Nithish K R.
      </p>

      <a href="#home" className="back-top">
        BACK TO TOP ↑
      </a>

      <small>
        © {new Date().getFullYear()} Nithish K R.
        All rights reserved.
      </small>

    </footer>
  );
}

// MAIN APP
export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [entered, setEntered] = useState(false);

  // Stable function prevents the 10-second timer from restarting.
  const enter = useCallback(() => {
    window.speechSynthesis?.cancel();

    setShowWelcome(false);
    setEntered(true);
  }, []);

  const replay = () => {
    speakGreeting();
  };

  useEffect(() => {
    if (entered) {
      document.body.classList.add("portfolio-ready");
    }

    return () => {
      document.body.classList.remove("portfolio-ready");
    };
  }, [entered]);

  return showWelcome ? (
    <Welcome onEnter={enter} />
  ) : (
    <div className="app-shell">

      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <Header />

      <main>
        <Hero onReplay={replay} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}
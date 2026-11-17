export const PHOTO_PATH = "/images/profile.jpg";
export const profile = {
  name: "Nithish K R",
  role: "Python Full Stack Developer",
  focus: "AI · Data Processing · Web Development",
  email: "nithishreddy10102002@gmail.com",
  phone: "+91 9972338351",
  linkedin: "https://www.linkedin.com/in/nithish-reddy-631004nn9",
  github: "https://github.com/nithish900681",
  summary:
    "B.E. graduate in Information Science and Engineering with hands-on Python development experience building and deploying applications with FastAPI backends, REST APIs and SQL. Interested in AI-powered features, automation, data processing and building useful products.",
  education: {
    degree: "Bachelor of Engineering",
    field: "Information Science and Engineering",
    college: "R R Institute of Technology, Bengaluru",
    duration: "Aug 2022 – May 2026",
    cgpa: "8.81 / 10.0"
  }
};

export const skills = [
  { name: "Python", group: "Programming" },
  { name: "SQL", group: "Programming" },
  { name: "JavaScript", group: "Programming" },
  { name: "HTML", group: "Web" },
  { name: "CSS3", group: "Web" },
  { name: "React.js", group: "Web" },
  { name: "FastAPI", group: "Backend" },
  { name: "REST APIs", group: "Backend" },
  { name: "Pandas", group: "Data" },
  { name: "NumPy", group: "Data" },
  { name: "Plotly", group: "Data" },
  { name: "TypeScript", group: "Web" },
  { name: "Git & GitHub", group: "Tools" },
  { name: "Generative AI", group: "AI" },
  { name: "Computer Vision", group: "AI" },
  { name: "Arduino IDE", group: "Tools" }
];

export const experience = {
  role: "Full Stack Developer – Python and AI",
  company: "Skyllx Technologies",
  location: "Bengaluru",
  duration: "Jan 2026 – May 2026",
  bullets: [
    "Developed and shipped three production applications with Python backends and React.js frontends across four Agile sprints.",
    "Built REST API integrations between services and automated data exchange, reducing manual data-handling overhead by 30%.",
    "Led Git/GitHub version control and code reviews for a five-person team, reducing merge conflicts by 40%.",
    "Collaborated with the team to understand product requirements and deliver production-ready features.",
    "Received a CEO commendation as one of two company-wide top performers recognised for technical excellence and professionalism."
  ]
};

export const projects = [
  {
    number: "01",
    title: "DataSnap",
    image: "/images/datasnap.png",
    subtitle: "AI-Powered Web Analytics Platform",
    period: "Feb 2026 – Jun 2026",
    description: "A web analytics platform that automates CSV data processing, cleaning, exploratory analysis and reporting, with AI-assisted insights and interactive dashboards.",
    stack: ["Python", "FastAPI", "Pandas", "NumPy", "React.js", "TypeScript", "Plotly", "Vercel"],
    highlights: [
      "Processes and analyses CSV datasets containing 500+ rows in under five seconds.",
      "AI insight engine for trend detection, anomaly flagging and chart recommendations.",
      "Five interactive chart types, dynamic group-by filtering and shareable KPI dashboards.",
      "Reported 60% reduction in time-to-insight for non-technical stakeholders."
    ],
    accent: "violet",
    github: "https://github.com/nithish900681",
    demo: "https://datasnap-app.vercel.app/"
  },
  {
    number: "02",
    title: "Soldier Health & Position Tracking System",
    image: "/images/soldier-tracking.png",
    subtitle: "KSCST Sponsored — State-Level Selection 2026",
    period: "2025 – 2026",
    description: "An IoT-based monitoring system designed to track soldier health parameters and GPS position, with emergency alerts and a live monitoring dashboard.",
    stack: ["ESP32", "NEO-6M GPS", "GSM", "React.js", "JavaScript", "HTML", "CSS", "Arduino IDE"],
    highlights: [
      "Monitors heart rate, blood oxygen saturation and body temperature.",
      "Integrates GPS location tracking and GSM-based emergency alerts.",
      "React dashboard visualises personnel health metrics and GPS coordinates.",
      "Selected for KSCST state-level sponsorship in 2026."
    ],
    accent: "cyan",
    github: "https://github.com/nithish900681",
    demo: ""
  },
  {
    number: "03",
    title: "AI Pantry & Recipe Assistant",
    image: "/images/ai-pantry.png",
    subtitle: "AI-powered ingredient and recipe companion",
    period: "2026",
    description: "An assistant that identifies ingredients from pantry or fridge images and suggests recipes based on available ingredients.",
    stack: ["Python", "Generative AI", "Computer Vision", "React.js"],
    highlights: [
      "Uses image recognition to convert pantry photos into a structured ingredient list.",
      "Suggests recipes based on available ingredients.",
      "Creates grocery lists for missing ingredients.",
      "Provides estimated calories and macronutrient breakdowns per meal."
    ],
    accent: "orange",
    github: "https://github.com/nithish900681",
    demo: "https://ai-pantry-pi.vercel.app/"
  }
];

export const certifications = [
  { name: "Certificate of Excellence in Generative AI", issuer: "Innomatics Research Labs", date: "Mar 2026" },
  { name: "Generative AI for Beginners", issuer: "Simplilearn SkillUp", date: "Sep 2025" }
];

export const softSkills = ["Problem Solving", "Analytical Thinking", "Adaptability", "Team Collaboration"];

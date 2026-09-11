// Centralized Portfolio Data for Oladoke Simeon Temitope

export const personalInfo = {
  name: "Oladoke Simeon Temitope",
  nickname: "Hackerton",
  tagline: "Building resilient full-stack systems, intelligent AI agents, and data-driven web applications.",
  titles: [
    "Full Stack Developer",
    "Mobile App Developer (Flutter & React Native)",
    "TypeScript & Frontend Specialist",
    "Backend & Systems Engineer",
    "AI Agent Builder",
    "Data Analytics Specialist",
  ],
  bio: [
    "I am a versatile and results-driven Software Engineer with extensive experience designing and deploying scalable web, mobile, and backend architectures.",
    "My expertise spans modern mobile and web technologies (Flutter, React Native, TypeScript, React.js, Next.js), robust backends (Node.js, Laravel/PHP, Python Django & Flask, C++), intelligent autonomous AI agents, multi-model database management, and deep data analytics.",
    "Passionate about clean code, intuitive UI/UX, and software engineering solutions that deliver high impact."
  ],
  location: "Lagos, Nigeria (Open to Global Remote)",
  email: "oladoke27@gmail.com",
  phone: "+234 703 953 7938, +234 903 593 9419",
  whatsapp: "https://wa.me/2347039537938?text=Hello%20Oladoke,%20I%20came%20across%20your%20portfolio",
  github: "https://github.com/hackcoder445",
  linkedin: "https://www.linkedin.com/in/oladoke-simeon-temitope-059152303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  twitter: "https://x.com/Hackerton_Tech/",
  stats: [
    { label: "Technologies Mastered", value: "20+" },
    { label: "Core Domains", value: "Full Stack & AI" },
    { label: "Code Architecture", value: "Clean & Scalable" },
    { label: "Availability", value: "Open to Work" }
  ]
};

export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "mobile", name: "Mobile App Development" },
  { id: "frontend", name: "Frontend & Web" },
  { id: "backend", name: "Backend & Systems" },
  { id: "ai", name: "AI & Agents" },
  { id: "database", name: "Databases" },
  { id: "analytics", name: "Data Analytics" },
  { id: "devops", name: "DevOps & Tools" }
];

export const skills = [
  // Mobile App Development
  { name: "Flutter", category: "mobile", level: "Advanced", icon: "SiFlutter" },
  { name: "React Native", category: "mobile", level: "Advanced", icon: "TbBrandReactNative" },
  { name: "Dart", category: "mobile", level: "Advanced", icon: "SiDart" },
  { name: "Mobile App Architecture", category: "mobile", level: "Expert", icon: "FaMobileAlt" },

  // Frontend & Web
  { name: "TypeScript", category: "frontend", level: "Advanced", icon: "SiTypescript" },
  { name: "React.js", category: "frontend", level: "Expert", icon: "SiReact" },
  { name: "Next.js", category: "frontend", level: "Advanced", icon: "SiNextdotjs" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "Expert", icon: "SiJavascript" },
  { name: "HTML5 & CSS3", category: "frontend", level: "Expert", icon: "SiHtml5" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced", icon: "SiTailwindcss" },
  { name: "Bootstrap 5", category: "frontend", level: "Advanced", icon: "SiBootstrap" },

  // Backend & Systems
  { name: "Node.js", category: "backend", level: "Advanced", icon: "SiNodedotjs" },
  { name: "Laravel (PHP)", category: "backend", level: "Advanced", icon: "SiLaravel" },
  { name: "PHP", category: "backend", level: "Advanced", icon: "SiPhp" },
  { name: "Python", category: "backend", level: "Advanced", icon: "SiPython" },
  { name: "Django", category: "backend", level: "Advanced", icon: "SiDjango" },
  { name: "Flask", category: "backend", level: "Intermediate", icon: "SiFlask" },
  { name: "C++", category: "backend", level: "Intermediate", icon: "SiCplusplus" },

  // AI & Intelligent Agents
  { name: "AI Agents Architecture", category: "ai", level: "Advanced", icon: "FaRobot" },
  { name: "Python AI & LLM Tooling", category: "ai", level: "Advanced", icon: "SiPython" },
  { name: "NPM Agent Packages", category: "ai", level: "Intermediate", icon: "SiNpm" },
  { name: "Prompt & Workflow Engineering", category: "ai", level: "Advanced", icon: "HiSparkles" },

  // Database Management
  { name: "PostgreSQL", category: "database", level: "Advanced", icon: "SiPostgresql" },
  { name: "MongoDB", category: "database", level: "Advanced", icon: "SiMongodb" },
  { name: "MySQL", category: "database", level: "Advanced", icon: "SiMysql" },

  // Data Analytics
  { name: "Python Analytics (Pandas/NumPy)", category: "analytics", level: "Advanced", icon: "SiPandas" },
  { name: "Power BI", category: "analytics", level: "Intermediate", icon: "FaChartBar" },
  { name: "Microsoft Excel", category: "analytics", level: "Advanced", icon: "SiMicrosoftexcel" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "devops", level: "Expert", icon: "SiGit" },
  { name: "VS Code", category: "devops", level: "Expert", icon: "VscCode" },
  { name: "CI / CD Pipelines", category: "devops", level: "Intermediate", icon: "VscGitMerge" },
  { name: "AWS Cloud", category: "devops", level: "Intermediate", icon: "SiAmazonaws" }
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "portals", name: "Result Portals & Systems" },
  { id: "schools", name: "School Websites" },
  { id: "companies", name: "Company & Corporate" },
  { id: "fullstack", name: "Full Stack" },
  { id: "ai", name: "AI & Agents" },
  { id: "backend", name: "Backend & Systems" },
  { id: "analytics", name: "Data Analytics" },
  { id: "frontend", name: "Frontend & Mobile" }
];

export const projects = [
  // ── Client & Institutional Projects ──
  {
    id: 1,
    title: "Delight International School Result Portal",
    category: "portals",
    badge: "Academic Result Portal",
    tags: ["PHP", "MySQL", "Authentication", "Student Portal", "Automated Grading"],
    description: "Cloud-based student academic grading and examination result processing system for Delight International School, Apapa, Lagos. Features dedicated portal architectures for both Primary and Secondary school divisions.",
    features: [
      "Secure student login and terminal report sheet generation",
      "Automated computation of scores, grades, GPA, and subject position ranking",
      "Dedicated independent portals for Primary and Secondary school branches"
    ],
    demoLink: "https://resultsportal.delightschoolsinternational.com",
    extraLinks: [
      { label: "Primary Portal", url: "https://resultportal.delightschoolsinternational.com" },
      { label: "Secondary Portal", url: "https://resultsportal.delightschoolsinternational.com" }
    ]
  },
  {
    id: 2,
    title: "GTC Odomola Result System Portal",
    category: "portals",
    badge: "Academic Result Portal",
    tags: ["PHP", "MySQL", "Authentication", "Lagos State TVET", "Transcript Engine"],
    description: "Enterprise academic records and terminal result management portal for Government Technical College, Odomola, Epe, Lagos State. Streamlines continuous assessment recording, technical certification grading, and report generation.",
    features: [
      "Role-based secure authentication gateway for administrative staff and students",
      "Automated evaluation of technical, vocational, and general education results",
      "Printable report cards with permanent academic transcript management"
    ],
    demoLink: "https://resultportal.gtcodomola.com/login.php",
    buttonText: "Access Portal"
  },
  {
    id: 3,
    title: "Government Technical College, Odomola",
    category: "schools",
    badge: "School Website",
    tags: ["Full Stack Web", "JavaScript", "PHP/MySQL", "Responsive Design", "SEO"],
    description: "Official institutional web portal for Government Technical College, Odomola, Epe, Lagos State. Showcases technical curricula, vocational departments, admissions guidelines, administrative news, and campus events.",
    features: [
      "Comprehensive trade department directories and vocational courses",
      "Online admission guidelines and announcement bulletin",
      "Mobile-friendly, high-performance institutional portal"
    ],
    demoLink: "https://www.gtcodomola.com",
    buttonText: "Visit Website"
  },
  {
    id: 4,
    title: "Delight International School, Apapa",
    category: "schools",
    badge: "School Website",
    tags: ["Web Design", "JavaScript", "PHP/HTML5", "School CMS", "Mobile Optimized"],
    description: "Official academic web platform for Delight International School in Apapa, Lagos State. Features complete curriculum information from Nursery and Primary through College, academic calendar, and admission workflows.",
    features: [
      "Interactive academic programs and admission inquiry workflows",
      "School calendar, faculty highlights, and campus photo gallery",
      "Direct integration with the school's online student result portals"
    ],
    demoLink: "https://www.delightschoolsinternational.com",
    buttonText: "Visit Website"
  },
  {
    id: 5,
    title: "Prime Imperia Consult LTD",
    category: "companies",
    badge: "Company Website",
    tags: ["Corporate Web", "JavaScript", "PHP", "Modern CSS", "Responsive UI"],
    description: "Official corporate web platform for Prime Imperia Consult LTD, showcasing professional management consulting, strategic business advisory, and corporate development frameworks.",
    features: [
      "Modern corporate layout engineered for executive credibility and trust",
      "Interactive service inquiries and client consultation contact forms",
      "Fast page loading performance with mobile-responsive architecture"
    ],
    demoLink: "https://www.primeimperiaconsult.com",
    buttonText: "Visit Website"
  },
  {
    id: 6,
    title: "Naselo Consulting LTD",
    category: "companies",
    badge: "Company Website",
    tags: ["Full Stack", "JavaScript", "Corporate Branding", "SEO", "Responsive"],
    description: "Corporate digital presence for Naselo Consulting LTD, delivering strategic consulting, enterprise advisory services, and business transformation frameworks to global clients.",
    features: [
      "Structured practice area showcases and consulting briefs",
      "Dynamic client contact workflow and appointment booking integration",
      "Cross-browser compatibility with high accessibility standards"
    ],
    demoLink: "https://www.naseloconsulting.com",
    buttonText: "Visit Website"
  },
  {
    id: 7,
    title: "XY Studios Nigeria",
    category: "companies",
    badge: "Creative Studio",
    tags: ["Creative Web", "JavaScript", "Media Portfolio", "CSS Animations", "UI/UX"],
    description: "High-impact creative production studio website engineered with immersive visuals, multimedia showcase galleries, and sleek studio portfolio layouts.",
    features: [
      "Dynamic visual media showcase and studio portfolio gallery",
      "Client production inquiry and project booking system",
      "Modern aesthetic with fluid transitions and responsive layouts"
    ],
    demoLink: "https://www.xystudiosng.com",
    buttonText: "Visit Website"
  },

  // ── Formal Architectural & Engineering Projects ──
  {
    id: 8,
    title: "AI Autonomous Agent Hub",
    category: "ai",
    badge: "AI & Automation",
    tags: ["Python", "AI Agents", "FastAPI", "React.js", "MongoDB"],
    description: "Intelligent autonomous agent system capable of reasoning, calling multi-step tools, fetching live data, and automating business workflows with contextual memory.",
    features: [
      "Dynamic tool calling and task orchestration",
      "Multi-agent collaborative reasoning workflow",
      "Interactive conversational UI with live streaming output"
    ],
    ghLink: "https://github.com/hackcoder445",
    demoLink: "https://github.com/hackcoder445",
    buttonText: "View on GitHub"
  },
  {
    id: 9,
    title: "Enterprise Multi-Vendor Commerce Platform",
    category: "fullstack",
    badge: "Full Stack",
    tags: ["Next.js", "Node.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
    description: "A production-grade full-stack commerce engine featuring secure payment gateways, vendor dashboards, real-time inventory tracking, and role-based access control.",
    features: [
      "Stripe and localized payment gateway integration",
      "Admin & vendor performance analytics dashboards",
      "Optimized relational PostgreSQL schema with indexing"
    ],
    ghLink: "https://github.com/hackcoder445",
    demoLink: "https://github.com/hackcoder445",
    buttonText: "Explore Platform"
  },
  {
    id: 10,
    title: "Sales & Operational Intelligence Dashboard",
    category: "analytics",
    badge: "Data Analytics",
    tags: ["Power BI", "Python (Pandas)", "Excel", "MySQL"],
    description: "A comprehensive data analytics pipeline turning raw transactional data into interactive KPIs, executive Power BI visuals, and automated reporting.",
    features: [
      "ETL data cleaning and modeling in Python",
      "Interactive Power BI executive dashboards with DAX metrics",
      "Automated forecast projections and variance analysis"
    ],
    ghLink: "https://github.com/hackcoder445",
    demoLink: "https://github.com/hackcoder445",
    buttonText: "View Analytics"
  },
  {
    id: 11,
    title: "High-Performance REST & GraphQL Microservices",
    category: "backend",
    badge: "Backend Core",
    tags: ["Python (Django/Flask)", "Node.js", "PostgreSQL", "Docker", "AWS"],
    description: "Scalable backend microservice architecture featuring JWT authentication, rate limiting, asynchronous background workers, and containerized deployment.",
    features: [
      "Modular MVC and repository pattern architecture",
      "Automated CI/CD testing pipelines with GitHub Actions",
      "AWS deployment with scalable caching layers"
    ],
    ghLink: "https://github.com/hackcoder445",
    demoLink: "https://github.com/hackcoder445",
    buttonText: "View Architecture"
  },
  {
    id: 12,
    title: "Cross-Platform Smart Mobile Application",
    category: "frontend",
    badge: "Mobile App",
    tags: ["React Native", "Tailwind (NativeWind)", "Node.js", "Firebase"],
    description: "A fast, responsive mobile application for iOS and Android featuring offline sync, push notifications, intuitive bottom-sheet interactions, and dark mode.",
    features: [
      "Smooth 60fps gesture-driven animations",
      "Offline-first state synchronization",
      "Cross-platform responsive design"
    ],
    ghLink: "https://github.com/hackcoder445",
    demoLink: "https://github.com/hackcoder445",
    buttonText: "View App"
  },
  {
    id: 13,
    title: "Modern SaaS Analytics Landing & App",
    category: "frontend",
    badge: "Frontend UI",
    tags: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript"],
    description: "A high-conversion, responsive SaaS interface with interactive pricing calculators, animated showcase bento grids, and clean visual aesthetics.",
    features: [
      "Fully responsive across all screen sizes",
      "Subtle micro-interactions and smooth scroll reveals",
      "Accessible semantic HTML5 and WCAG-compliant design"
    ],
    ghLink: "https://github.com/hackcoder445",
    demoLink: "https://github.com/hackcoder445",
    buttonText: "View Demo"
  }
];

export const experience = [
  {
    period: "2023 - Present",
    role: "Full Stack & AI Agent Developer",
    company: "Freelance & Independent Client Work",
    description: "Architecting end-to-end web applications, custom autonomous AI agent workflows, and scalable backend APIs across web and mobile platforms."
  },
  {
    period: "2024 - 2025",
    role: "NYSC / Physics Teacher & Lab Attendant",
    company: "Government Technical College, Odomola, Epe, Lagos State",
    description: "Taught Physics, managed the laboratory, and provided computer system support and training."
  },
  {
    period: "2021 - 2023",
    role: "Software Solutions Developer & Network Engineer",
    company: "Department of Computer Science / Statistics, Federal Polytechnic Bida",
    description: "Developed software solutions for departmental academic projects. Formatted, configured, and deployed wireless local networking for 42 desktop workstations."
  },
  {
    period: "2020 - 2021",
    role: "Office Desk Secretary & IT Support",
    company: "Ramaj Engineering Services",
    description: "Managed database systems, digital documentation, project coordination, and engineering correspondence."
  },
  {
    period: "2015 - 2017",
    role: "Computer Systems Operator & Trainer",
    company: "Tundex Computer and Stationary Store",
    description: "Trained students in computer applications, performed hardware diagnostics, OS installation, and system maintenance."
  }
];

export const education = [
  {
    degree: "Postgraduate Diploma in Education (PGDE in View)",
    institution: "Tai Solarin Federal University of Education (TASUED), Ogun State",
    period: "2026 - Present",
    details: "Specializing in Computer & Physics General Education"
  },
  {
    degree: "Higher National Diploma (HND) in Computer Science",
    institution: "The Federal Polytechnic Bida, Niger State",
    period: "2021 - 2023",
    details: "Web Development (98%), Graphics & Product Branding (98%), IT Support & Troubleshooting (90%), Data Analytics (85%)"
  },
  {
    degree: "National Diploma (ND) in Computer Science",
    institution: "The Federal Polytechnic Bida, Niger State",
    period: "2017 - 2019",
    details: "Foundational software development, hardware maintenance, network infrastructure, and database administration"
  }
];

export const certifications = [
  {
    issuer: "Cisco Networking Academy (NetAcad)",
    title: "Software Development",
    skills: "Python Essentials (1 & 2), JavaScript Essentials (1 & 2), HTML & CSS Essentials"
  },
  {
    issuer: "Cisco Networking Academy (NetAcad)",
    title: "Data Science & Artificial Intelligence",
    skills: "Introduction to Modern AI, Data Science Essentials with Python, Data Analytics Essentials"
  },
  {
    issuer: "Cisco Networking Academy (NetAcad)",
    title: "Security & Networking",
    skills: "Ethical Hacker (Fundamentals), Introduction to Cybersecurity, Networking Basics, IoT Protocols"
  },
  {
    issuer: "Cisco Networking Academy (NetAcad)",
    title: "IT Operations & Support",
    skills: "Linux Essentials, IT Customer Support Basics, Hardware Diagnostics"
  }
];

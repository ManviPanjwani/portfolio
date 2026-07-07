import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Manvi Panjwani",
  title: "I build reliable AI systems and cloud platforms.",
  subTitle: emoji(
    "Software engineer and AI researcher focused on agentic workflows, evaluation systems, cloud infrastructure, and production-grade developer tooling."
  ),
  resumeLink: "PanjwaniManviResume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/ManviPanjwani",
  linkedin: "https://www.linkedin.com/in/manvi-panjwani/",
  gmail: "manvi.panjwani@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I build",
  subTitle: "AI SYSTEMS, CLOUD PLATFORMS, AND FULL-STACK PRODUCTS",
  skills: [
    emoji("⚡ Design agentic AI and RAG workflows with measurable evaluation pipelines"),
    emoji("⚡ Build reliable cloud infrastructure with AWS, GCP, Docker, Kubernetes, and Terraform"),
    emoji("⚡ Ship full-stack products and APIs with Python, TypeScript, React, and FastAPI")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "AI / LLM", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Clark University",
      logo: require("./assets/images/ClarkUniversityLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "December 2025",
      desc: "STEM program focused on software engineering, AI/ML, cloud computing, and data analysis."
    },
    {
      schoolName: "Amity University",
      logo: require("./assets/images/AmityUniversityLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "May 2022",
      desc: "Graduated with a strong foundation in programming and networking."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "AI & LLM systems", progressPercentage: "92%" },
    { Stack: "Software engineering", progressPercentage: "95%" },
    { Stack: "Cloud & DevOps", progressPercentage: "90%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Visiting Researcher",
      company: "Softmax",
      companylogo: require("./assets/images/SoftmaxLogo.svg"),
      date: "Jan 2026 – Mar 2026",
      desc: "Built reinforcement-learning experiments for multi-agent AI systems and developed evaluation and observability pipelines to benchmark reasoning, coordination, and alignment at scale."
    },
    {
      role: "Governance Engineer Intern",
      company: "GlaxoSmithKline",
      companylogo: require("./assets/images/GSK.png"),
      date: "May 2025 – August 2025",
      desc: "Implemented policy-as-code with Open Policy Agent and Rego, improved engineering onboarding, and supported CI/CD and Terraform deployment workflows for scalable governance."
    },
    {
      role: "Associate Software Engineer",
      company: "Nokia",
      companylogo: require("./assets/images/NokiaLOGO.png"),
      date: "Jul 2022 – Jan 2024",
      desc: "Improved the reliability and operational efficiency of large-scale distributed network management systems through production debugging, automation, monitoring, and validation workflows."
    },
    {
      role: "Graduate Engineer Trainee Intern",
      company: "Nokia",
      companylogo: require("./assets/images/NokiaLOGO.png"),
      date: "Mar 2022 – Jun 2022",
      desc: "Conducted research and documented NSP operations, enhancing stakeholder engagement."
    }
  ]
};

const openSource = {
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the impactful tech I've built",
  projects: [
    {
      image: require("./assets/images/AILogo.png"),
      projectName: "PocketPilot",
      projectDesc: "AI-powered assistant that interprets natural language, produces structured outputs, and connects LLM workflows to real-time backend APIs.",
      footerLink: []
    },
    {
      image: require("./assets/images/SafeBitesLogo.png"),
      projectName: "AI/ML Ingredient Classification",
      projectDesc: "Full-stack barcode-scanning web and mobile product that assesses the health impact of food and personal-care ingredients.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications & recognitions",
  achievementsCards: [
    {
      title: "Google Cloud Professional Machine Learning Engineer",
      subtitle: "Certified by Google Cloud (2025)",
      image: require("./assets/images/GoogleCloudMLBadge.png"),
      footerLink: []
    },
    {
      title: "AWS certified Developer",
      subtitle: "Certified by Amazon Web Services (2025)",
      image: require("./assets/images/AWS.jpeg"),
      footerLink: []
    },
    {
      title: "AWS certified AI Practitioner",
      subtitle: "Certified by Amazon Web Services (2025)",
      image: require("./assets/images/AWS.jpeg"),
      footerLink: []
    },
    {
      title: "CCNA Routing and Switching",
      subtitle: "Certified by Cisco (2020)",
      image: require("./assets/images/CiscoLogo.png"),
      footerLink: []
    },
    {
      title: "Campus Ambassador at IMUN",
      subtitle: "Certified by The Australian Embassy and UN (2020)",
      image: require("./assets/images/IMUNLogo.jpeg"),
      footerLink: []
    },
    {
      title: "IBM Python for Data Science",
      subtitle: "Completed Machine Learning and Python developer certification (2021)",
      image: require("./assets/images/IBMLogo.png"),
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing what I learn through writing",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Always open to sharing knowledge"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Stay tuned for future podcast talks",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my updated resume",
  display: true
};

const contactInfo = {
  title: emoji("Let's build something useful"),
  subtitle: "I'm open to software engineering, AI, and platform opportunities.",
  number: "+1-331-203-2895",
  email_address: "manvi.panjwani@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

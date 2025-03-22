import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Manvi Panjwani",
  title: "Hi all, I'm Manvi Panjwani",
  subTitle: emoji(
    "An enthusiastic Computer Science graduate student with hands-on experience in software engineering, cloud security, and AI-driven application development. Skilled in full-stack development and passionate about solving real-world problems through scalable tech solutions."
  ),
  resumeLink: "https://drive.google.com/file/d/1qZBDD6X7A-_-RV1ESEIQ4kR60LDMwIym/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/ManviPanjwani",
  linkedin: "https://www.linkedin.com/in/manvi-panjwani/",
  gmail: "MPanjwani@clarku.edu",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER WHO LOVES TO EXPLORE TECH",
  skills: [
    emoji("⚡ Build responsive Websites and Mobile apps"),
    emoji("⚡ Optimize cloud infrastructure using Kubernetes, Docker, and AWS"),
    emoji("⚡ Work with AI/ML and Data Science for smart applications")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
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
      duration: "Expected December 2025",
      desc: "STEM Program with focus on software engineering, AI/ML, cloud computing and data analysis."
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
    { Stack: "Frontend", progressPercentage: "80%" },
    { Stack: "Backend", progressPercentage: "95%" },
    { Stack: "Cloud & DevOps", progressPercentage: "90%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Nokia",
      companylogo: require("./assets/images/NokiaLOGO.png"),
      date: "Jul 2022 – Jan 2024",
      desc: "Managed tasks related to node discovery, router domain management, and security association configuration, significantly improving the platform’s operational speed and reliability."
    },
    {
      role: "Graduate Engineer Trainee Intern",
      company: "Nokia",
      companylogo: require("./assets/images/NokiaLOGO.png"),
      date: "Mar 2022 – Jun 2022",
      desc: "Conducted research and documented NSP operations, enhancing stakeholder engagement."
    },
    {
      role: "Data Science Project Lead Intern",
      company: "Technocolabs Software",
      companylogo: require("./assets/images/TechnocolabsSoftwareLogo.png"),
      date: "Mar 2021 – Apr 2021",
      desc: "Led a team of 12 in machine learning projects, presented analytical reports to stakeholders."
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
      projectName: "AI-Powered Cloud Security System",
      projectDesc: "Optimizes containerized apps and detects cloud threats using AI.",
      footerLink: []
    },
    {
      image: require("./assets/images/SafeBitesLogo.png"),
      projectName: "Ingredient Classifier App",
      projectDesc: "Barcode scanning app to assess health impact of food & personal care products.",
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
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to collaborate or chat? Reach out!",
  number: "+1-331-203-2895",
  email_address: "MPanjwani@clarku.edu"
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

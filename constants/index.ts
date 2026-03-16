import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/vanshtandel",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/vanshtandel",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/vanshtandel",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "FinAgent",
    description:
      "An AI-Powered Financial Automation Platform. Built an agentic AI system to automate financial workflows including payments, transfers, and investments. Integrated LLM-driven intent detection and decision orchestration with human-in-the-loop security controls.",
    image: "/projects/project-1.png",
    link: "https://github.com/vanshtandel/finagent",
  },
  {
    title: "InnoMate",
    description:
      "A Collaborative Hackathon and Project Teaming Platform. Designed a full-stack platform for hackathon team formation based on skills, roles, and project interests. Implemented JWT-based authentication with role-aware workflows and real-time team group chat using WebSockets.",
    image: "/projects/project-2.png",
    link: "https://github.com/vanshtandel/innomate",
  },
  {
    title: "ShushrutAI",
    description:
      "An AI-Native Dermatology Diagnostic Platform. Built a multi-agent AI pipeline using Gemini 2.0 for skin lesion analysis and automated clinical reporting. Developed a secure practitioner dashboard for patient management and real-time diagnosis previews.",
    image: "/projects/project-3.png",
    link: "https://github.com/vanshtandel/shushrutai",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/vanshtandel",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/vanshtandel",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/vanshtandel",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:tandelvansh0511@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/vanshtandel/space-portfolio",
};

export const EDUCATION = [
  {
    institution: "Nirma University",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "August 2023 – May 2027",
    location: "Ahmedabad, Gujarat, India",
    description: "Expected Graduation: May 2027 | Current CGPA: 8.30",
  }
];

export const ACHIEVEMENTS = [
  {
    title: "HackNUthon 6.0 Winner (Reve Soils Track)",
    description: "Led a multidisciplinary team to Third place at Nirma University by building an AI-driven skin disease classification (Mar 2025)",
  },
  {
    title: "IIT Bombay TechFest– Financial Agent Hackathon",
    description: "Selected among the Top 25 teams nationwide for developing an agentic AI-based financial automation platform (Dec 2025)",
  },
  {
    title: "Smart India Hackathon (SIH)",
    description: "Cleared internal selection rounds twice (2024, 2025) for problem statements in AI and applied systems",
  },
  {
    title: "Team Leadership",
    description: "Served as team lead across multiple national-level hackathons, driving system design, task execution, and final presentations",
  }
];

export const CERTIFICATIONS = [
  "Certified in full-stack web dev by Dr. Angela Yu on Udemy.",
  "Currently pursuing Krish Naik's course on Deep Learning and NLP on Udemy.",
  "Certified in The Python Bootcamp by Dr. Angela Yu on Udemy.",
  "AWS Certified Cloud Practitioner (In Progress)",
  "Certified in Cybersecurity and Ethical Hacking from Rinex Org. in association with Skill India.",
];

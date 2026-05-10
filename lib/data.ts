export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "inu",
    title: "Inu",
    description:
      "Lead Frontend development for a comprehensive Next.js application with modern UI/UX patterns and optimized performance.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "afritrails",
    title: "Afritrails",
    description:
      "Built serverless architecture on AWS with Lambda functions, API Gateway, and DynamoDB for scalable backend services.",
    tags: ["AWS Lambda", "Serverless", "Node.js", "DynamoDB", "Next.js"],
  },
  {
    id: "golf-api",
    title: "Golf API",
    description:
      "Developed RESTful API using Express.js and Prisma ORM with PostgreSQL for golf course management system.",
    tags: ["Express.js", "Prisma", "PostgreSQL", "REST API"],
  },
  {
    id: "real-time-translation",
    title: "Real-time Translation",
    description:
      "Implemented real-time communication features using Socket.io for instant message translation across multiple languages.",
    tags: ["Socket.io", "Node.js", "WebSockets", "Real-time"],
  },
  {
    id: "referral-ai",
    title: "Referral-AI",
    description:
      "Created reusable React component library for AI-powered referral system with clean architecture.",
    tags: ["React", "TypeScript", "Component Library"],
  },
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "React Query"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Prisma", "Sequelize"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (Lambda, RDS, S3)", "Docker", "CI/CD", "Vercel"],
  },
];

export const experiences: Experience[] = [
  {
    id: "coding-mountain-sr",
    company: "CodingMountain Pvt. Ltd",
    role: "Senior Software Engineer",
    period: "Aug 2022 - Present",
    description: [
      "Lead frontend development for multiple client projects",
      "Architected scalable solutions using Next.js and React",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: "young-innovations",
    company: "YoungInnovations Pvt. Ltd",
    role: "Junior Frontend Engineer",
    period: "Jan 2018 - Dec 2020",
    description: [
      "Built interactive user interfaces with React",
      "Collaborated with design team on UI/UX implementation",
      "Contributed to open-source projects",
    ],
  },
];

export const socialLinks = {
  email: "rai.saugat.sr@gmail.com",
  github: "https://github.com/raisaugat",
  linkedin: "https://linkedin.com/in/raisaugat",
};

export const navItems = [
  // { label: 'Work', href: '#projects' },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

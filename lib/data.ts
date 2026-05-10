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
        role: "Sr. Software Engineer",
        period: "Aug 2022 - Present",
        description: [
            "Architected the 'Inu' frontend with Next.js and React Query, integrating NextAuth.js for secure, scalable authentication.",
            "Built RESTful APIs for the 'Golf' project using Express.js and Prisma ORM, covering auth and group management end-to-end.",
            "Deployed serverless features for 'Afritrails' on AWS Lambda and S3, optimizing API routing and query performance.",
            "Built a real-time translation app with Socket.io, cutting communication lag during live multilingual presentations.",
        ],
    },
    {
        id: "referral-ai",
        company: "CodingMountain Pvt. Ltd",
        role: "Software Engineer",
        period: "Dec 2020 - Aug 2022",
        description: [
            "Built a reusable React component library with CSS Modules, improving consistency and speeding up feature delivery.",
            "Optimized Redux state management to eliminate unnecessary re-renders and improve overall UI responsiveness.",
            "Shipped features consistently in an Agile team through sprint planning and daily stand-ups.",
        ],
    },
    {
        id: "young-innovations-jr",
        company: "YoungInnovations Pvt. Ltd",
        role: "Jr. Frontend Engineer",
        period: "Jan 2018 - Dec 2020",
        description: [
            "Built responsive React and React Native interfaces across web and mobile for multiple client projects.",
            "Delivered the 'Khabar Garau' UI with full cross-device compatibility, contributing to supporting backend APIs.",
            "Translated Figma designs into clean, reusable components for 'Skjutsgruppen' and a Municipality mobile app.",
        ],
    },
    {
        id: "young-innovations-intern",
        company: "YoungInnovations Pvt. Ltd",
        role: "Intern & Trainee",
        period: "May 2017 - Jan 2018",
        description: [
            "Automated localization workflows, reducing manual translation effort across multiple applications.",
            "Built pixel-perfect, responsive pages with HTML, CSS, and JavaScript to corporate coding standards.",
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

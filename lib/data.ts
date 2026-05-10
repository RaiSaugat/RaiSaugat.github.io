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
            "Architected the frontend for the 'Inu' project using Next.js, integrating React Query for efficient server-state management and NextAuth.js for secure authentication.",
            "Enhanced the 'Nusan' project by engineering a custom QR code generation system and a CRM notice module, leveraging PostgreSQL and Sequelize.",
            "Developed a comprehensive RESTful API from scratch for the 'Golf' project using Express.js and Prisma ORM, implementing secure user authentication and complex group CRUD operations.",
            "Engineered and deployed full-stack features for 'Afritrails' leveraging AWS Serverless (Lambda, S3), optimizing API routing and database queries for high availability.",
            "Built a real-time translation application utilizing Socket.io, eliminating communication lag between presenters and translators during live presentations.",
        ],
    },
    {
        id: "referral-ai",
        company: "CodingMountain Pvt. Ltd",
        role: "Software Engineer",
        period: "Dec 2020 - Aug 2022",
        description: [
            "Developed a scalable library of reusable UI components using React and CSS Modules, ensuring design consistency and accelerating the development cycle for new features.",
            "Optimized complex global state management using Redux, reducing unnecessary component re-renders and improving overall UI performance.",
            "Collaborated in an Agile environment, contributing to sprint planning and daily stand-ups to ensure timely delivery of production-ready frontend solutions.",
        ],
    },
    {
        id: "young-innovations-jr",
        company: "YoungInnovations Pvt. Ltd",
        role: "Jr. Frontend Engineer",
        period: "Jan 2018 - Dec 2020",
        description: [
            "Specialized in building responsive, cross-browser compatible interfaces using React and React Native, ensuring seamless experience across mobile and web platforms.",
            "Engineered responsive UIs for the 'Khabar Garau' project, ensuring cross-device compatibility and contributing to supporting backend APIs.",
            "Developed mobile applications ('Skjutsgruppen' and 'Municipality app') by translating complex Figma designs into clean, reusable component architectures.",
            "Improved user engagement for 'NGODistro' by implementing fluid animations and responsive design patterns.",
        ],
    },
    {
        id: "young-innovations-intern",
        company: "YoungInnovations Pvt. Ltd",
        role: "Intern & Trainee",
        period: "May 2017 - Jan 2018",
        description: [
            "Streamlined localization workflows by automating translation processes, reducing manual effort and ensuring linguistic accuracy across applications.",
            "Developed pixel-perfect, responsive web pages using HTML, CSS, and JavaScript, adhering to corporate coding standards and project lifecycles.",
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

import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
// import angular from "@/public/logos/angular.svg";
import azure from "@/public/logos/azure.svg";
import react from "@/public/logos/react.svg";
import typescript from "@/public/logos/typescript.svg";
// import css from "@/public/logos/css.svg";
// import html from "@/public/logos/html.svg";
import javascript from "@/public/logos/javascript.svg";
import node from "@/public/logos/node.svg";
// import c from "@/public/logos/c.svg";
import java from "@/public/logos/java.svg";
import python from "@/public/logos/python.svg";
import spring from "@/public/logos/spring.svg";
import firebase from "@/public/logos/firebase.svg";
import postgres from "@/public/logos/postgres.svg";
import framerMotion from "@/public/logos/framer-motion.svg";
import docker from "@/public/logos/docker.svg";
import msql from "@/public/logos/mssql.svg";
import mysql from "@/public/logos/mysql.svg";
import heroku from "@/public/logos/heroku.svg";
import mongodb from "@/public/logos/mongodb.svg";
import postman from "@/public/logos/postman.svg";
// import bash from "@/public/logos/bash.svg";
import next from "@/public/logos/next.svg";
import aws from "@/public/logos/aws.svg";
// import ionic from "@/public/logos/ionic.svg";
import cplusplus from "@/public/logos/c++.svg";
import csharp from "@/public/logos/csharp.svg";
import dotnet from "@/public/logos/dotnet.svg";

// import vercel from "@/public/logos/vercel.svg";
// import netlify from "@/public/logos/netlify.svg";
// import s3 from "@/public/logos/amazon-s3.svg";
import git from "@/public/logos/git.svg";
import CMS1 from "public/images/CMS_1.png";

export const skillsData = [
    {
        title: "Web Development",
        skills: [
            { name: "Next.js", svg: next },
            { name: "React", svg: react },
            // { name: "Angular", svg: angular },
            { name: "Node.js", svg: node },
            { name: "Typescript", svg: typescript },
            // { name: 'Framer Motion', svg: framerMotion },
            { name: "Javascript", svg: javascript },
            // { name: 'HTML5', svg: html },
            // { name: 'CSS3', svg: css },
            // { name: 'Ionic', svg: ionic },
        ],
    },
    {
        title: "Programming & Scripting",
        skills: [
            { name: "C#", svg: csharp },
            { name: ".NET", svg: dotnet },
            { name: "Java", svg: java },
            { name: 'Spring', svg: spring },
            { name: 'Python', svg: python },
            {name: "C++" , svg: cplusplus},
        ],
    },
    {
        title: "Database Management",
        skills: [
            { name: "PostgreSQL", svg: postgres },
            { name: "MongoDB", svg: mongodb },
            { name: "MySQL", svg: mysql },
            // { name: "Amazon S3", svg: s3 },
        ],
    },
    {
        title: "Cloud & AI",
        skills: [
            { name: "AWS", svg: aws },
            { name: "Azure", svg: azure },
            { name: "Docker", svg: docker },
            { name: "Git", svg: git },
            { name: "Postman", svg: postman },
            {name:"Heroku", svg: heroku},
            ,
        ],
    },
] as const;

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Education",
        hash: "#education",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

const nice =
    "jr, cdmv, iata, dollarama, sommets, exfo, infrastructure ontario, hilo, ";

export const workExperience = [
        {
        title: "Graduate Assistant Software Engineer",
        company: "Georgia Department of Public Health - GSU ",
        location: "Atlanta, USA",
        description: [
            "Transformed healthcare data assessment system using React.js,NPMJavaScript frontend with Java Spring Boot microservices and Apache Kafka event-driven architecture, reducing processing time by 80% (5 days to 24 hours) whileprocessing 1,000+ daily health records for 10K+ Georgia residents with 60% fewer integration errors.",
            "Engineered HIPAA-compliant data architecture with AWS RDS Aurora PostgreSQL, RESTful APIs (Postman,Swagger), and resilient AWS infrastructure (EC2, S3) maintaining 99.9% uptime and optimized SQL schemas and implemented CloudWatch monitoring, achieving 30% better database performance and 45% faster incident resolution.",
            "Accelerated development cycles by 65% through Git, Maven, and Agile JIRA sprints while implementing test-driven development (JUnit, Jest), achieving 85% code coverage and reducing critical production bugs by 70%."            
        ],
        icon: React.createElement(CgWorkAlt),
        date: "Sep 2024 - Present",
    },
    {
        title: "Full Stack Developer, OGMS Lab",
        company: "Georgia State University",
        location: "Atlanta, USA",
        description: [
            "Led complete overhaul of university’s computer science portal from PHP to modern tech stack React, Node.js, Python,PostgreSQL, transforming it into a responsive SPA serving 50,000+ monthly users.",
            "Architected error boundary components to gracefully handle and report React rendering failures These improvementsresulted in 30% faster admission processing, 40% reduced page load time, and 60% faster debugging capabilities.",
            "Implemented comprehensive DevOps practices and Synchronized deployment pipelines for React components, reducing build times by 40% while managing strict accessibility standards and enhancing performance.",
            
        ],
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2023 - Aug 2024",
    },
    {
        title: "Full Stack Developer",
        company: " Silicon Bridge Technologies",
        location: "Bengaluru, India",
        description: [
            "Devised client user interfaces using JSP and created Controller Servlets for handling HTTP requests from JSP pages.",
            "Pioneered full-stack development with Java 8 microservices and dynamic JavaScript frontends, structuring a scalable system slashed deployment complexity by 40% while optimizing application performance and evaluated by JUNIT and Unit Testing, Optimized MySQL schemas and stored procedures, improving database performance by 30%.",
            "Extensively used GIT for version controlling and regularly pushed the Code to GitHub. Used JIRA as a bug tracking system to track and maintain history of bugs. Worked with Jenkins to implement CI/CD process.",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2022 - May 2023",
    },
    {
        title: "Cyber Security Virtual Intern",
        company: " CISCO Networking Academy",
        location: "Remote, India",
        description: [
            "Completed Cisco Networking Academy's Cybersecurity Virtual Internship Program 2021, where I designed and implemented a secure campus network infrastructure with proper segmentation, access controls, and threat monitoring systems.",
            "Utilized Cisco Packet Tracer to simulate and troubleshoot complex network security scenarios, successfully identifying and mitigating potential vulnerabilities while maintaining network performance.",
            "Developed comprehensive network security documentation and policies aligned with industry best practices, demonstrating proficiency in implementing the CIA triad (Confidentiality, Integrity, Availability) in real-world applications.",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "May 2021 - July 2021",
    },

] as const;

export const education = [
    {
        title: "Master's in Computer Science",
        company: "Georgia State University",
        location: "Atlanta,USA",
        description: ["Graduate Research Assistanat as Full Stack Developer from 2023-2025"],
        icon: React.createElement(LuGraduationCap),
        date: "Aug 2023 - Present",
    },
    {
        title: "Bachelor's in Computer Science",
        company: "Karunya University",
        location: "Coimbatore, INDIA",
        description: ["KHACKS Team Member"],
        icon: React.createElement(LuGraduationCap),
        date: "Aug 2019 - May 2023",
    },
    
] as const;

export const projectImages = [
// Cardiovascular Disease Prediction
    [
        {
            image: "/images/CVPS.png",
            alt: "Cardiovascular Disease Prediction using ML",
        },
    ],

    // Conference Management System
    [
        {
            image: "/images/CMS.png",
            alt: "Conference Management System",
        },
    ],
    // Wordle Clone 2
    [
        {
            image: "/images/GAPR.png",
            alt: "Gapr Webiste",
        },
    ],
    // Basic Weather Application
    [
        {
            image: "/images/WA.png",
            alt: "Basic Weather Application ",
        },
    ],
    // Online Graduate Student Management System
    [
        {
            image: "/images/OGMS.png",
            alt: "Online Graduate Student Management System",
        },
    ],
    // Movie Tracker
    [
        {
            image: "/images/OGMS.png",
            alt: "Online Graduate Student Management System",
        },
    ],
    // Portfolio
    [
        {
            image: "/images/Portfolio.png",
            alt: "Next Portfolio 1",
        },
    ],
] as const;

export const videos = [
    // Banano Blockchain
    [
        {
            video: "https://youtu.be/zs1Nq2s_uy4?si=EuYO_DyvYbk8MxrM",
            alt: "Youtube Demo",
        },
    ],
] as const;

export const projectsData = [
    {
        title: "Conference Management System",
        tech: ["Java", "JSP", "Agile", "HTML", "CSS", "Postgre SQL", "Apache Tomcat",],
        description: `Engineered a high-performance Conference Management System leveraging JavaScript, HTML5, and CSS3, delivering automated review workflows and real-time submission tracking. Optimized PostgreSQL database architecture reduced CRUD operation complexity by 30%, while dynamic scheduling interfaces and streamlined registration processes accelerated event organization by 60%. Implemented responsive design patterns to enhance participant engagement and system usability.`,
        codeURL: "https://github.com/jaswanthuriti/Conference-Management-System",
        videoDemoURL: "https://youtu.be/-3m2_wHWXf4?si=Tl90BJCX7S2MKHF2",
        carouselImage: projectImages[1],
    },
    {
        title: "Cardiovascular Disease Prediction using ML",
        tech: ["React", "MySQL", "HTML", "Tailwind", "CSS","ML"],
        description: `Developed a cloud-based application that leverages advanced ML techniques to identify diseases, quantify risk percentages, 
        and determine contributing factors. The system integrates ML algorithms, achieving a 94.5% accuracy rate on 34,000 medical records. 
        It suggests medications based on the generated risk factors. Additionally, an AI chatbot provides tailored medication recommendations 
        through risk analysis. This innovative approach significantly enhances disease prediction and treatment guidance.`,
        codeURL: "https://github.com/jaswanthuriti/Heart-Disease-Prediction",
        videoDemoURL: "https://youtu.be/tSBAag6lAQo?si=LeJToyAM0wXCZj2i",
        carouselImage: projectImages[0],
    },
    {
        title: "Jaswanth's Portfolio ",
        tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
        description: `I created my portfolio with Next.js to showcase my work experience and knowledge of web frameworks such as React/Next.js.`,
        codeURL: "",
        liveDemoURL: "",
        carouselImage: projectImages[6],
    },
    {
        title: "Online Graduate Student Management System",
        tech: ["React.js", "AWS", "Python", "PHP", "GraphQL", "DEvops", "Github Actions", "Selenium",],
        description: ` Spearheaded migration from PHP to React/TypeScript/Java stack with  and GraphQL, creating a responsive SPA that improved data retrieval by 45% for 50,000+ monthly users. Engineered robust error handling system that delivered 30% faster processing and 40% reduced load times. Established streamlined DevOps pipeline with Selenium testing, cutting build times by 40% while maintaining accessibility standards `,
        codeURL: "https://ogmsv2.cs.gsu.edu/home/Dashboard",
        videoDemoURL: "https://ogmsv2.cs.gsu.edu/home/Dashboard",
        carouselImage: projectImages[5],
    },
    {
        title: "Georgia Performance Measures Management System",
        tech: ["React.js", "Java", "CSS","Heroku","SpringBoot","AWS","PostgreSQL","Rest API",],
        description: `Revolutionized healthcare assessment system with React/Java Spring Boot microservices and Kafka architecture, slashing processing time by 80% while handling 1,000+ daily records with 60% fewer errors. Built HIPAA-compliant AWS infrastructure (RDS Aurora, EC2, S3) with optimized APIs maintaining 99.9% uptime, improving database performance by 30%. Implemented Agile methodologies with comprehensive testing (85% code coverage), accelerating development cycles by 65% and reducing critical bugs by 70%.`,
        codeURL: "https://gapr.herokuapp.com/",
        videoDemoURL: "https://gapr.herokuapp.com/",
        carouselImage: projectImages[2],
    },
    {
        title: "Basic Weather Application",
        tech: [
            "React",
            "JavaScript",
            "API",
            "UI/UX",
            "Github",
        ],
        description: ` The weather application built with React that delivers real-time weather data through OpenWeatherMap API. This responsive app offers instant city searches worldwide, providing comprehensive weather information including temperature, humidity, and wind conditions in a clean, intuitive interface. Built with React, Vite, and Tailwind CSS for optimal performance and user experience.`,
        codeURL: "https://github.com/jaswanthuriti/Basic-Weather-App",
        videoDemoURL: "https://youtu.be/zs1Nq2s_uy4?si=EuYO_DyvYbk8MxrM",
        carouselImage: projectImages[3],
    },
] as const;

export const showMoreProjectsList = [
    {
        title: "Portfolio Front End Application",
        tech: ["React.js", "MaterialUI", "CSS"],
        description: `This portfolio website is coded in React.js and CSS to showcase my technical
            knowledge and application. The website was styled with responsive design in
            mind.`,
        codeURL: "",
        liveDemoURL: "",
        image: "",
    },
    {
        title: "Boulder Dash Clone",
        tech: ["Java"],
        description: `In this project, I recreated the classic arcade game "Boulder Dash". In this
            game, the player will travel through the maze and collect diamonds and
            attempt to proceed to the next level. The level is loaded from a text file
            and all the game logic is coded in Java.`,
        codeURL: "",
        videoDemoURL: "",
        image: "",
    },
] as const;

export const useInViewSettings = {
    // threshold: 0.8,
    // initialInView: true,
    // triggerOnce: true,
    rootMargin: "-40% 0% -40% 0%",
} as const;

export const MetadataValues = {
    Title: "Jaswanth Uriti",
    Description:
        "I'm Jaswanth Uriti, a Software Developer who is passionate about creating modern Real-time applications",
};

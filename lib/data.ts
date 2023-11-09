import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lit from "@/public/lit.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Manchester",
    description:
      "I graduated after 6 months of studying, and soon found my first tech job at Mirrorweb.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Customer Success Engineer",
    location: "Manchester",
    description:
      "I worked at Mirrorweb learning how to capture and replay websites. Invaluable experience debugging and understanding modern websites",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Full-Stack Developer",
    location: "West Yorkshire - Manchester and Leeds",
    description:
      "I am now a full-stack developer working as a freelancer. My tech stack includes JavaScript, HTML, CSS, React, Next.js and TypeScript. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Lit.js and Shoelace",
    description: "A Codepen of experiements with ",
    tags: ["Lit.js", "Shoelace.js", "TypeScript"],
    imageUrl: lit,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "Git",
  "Tailwind",
  "User Experience",
  "MongoDB",
  "Redux",
  "GraphQL",
  "API Development",
  "Express",
  "PostgreSQL",
  "Python",
  "Problem Solving",
  "Agile",
  "Framer Motion",
  "Typscript",
  "Vercel",
  "Test Driven Development",
  "REST APIs",
  "OOP",
  "Pair Programming",
  "Jest",
  "Heritrix",
  "jQuery",
  "XML",
  "JSON",
  "Debugging using Web Browsers",
] as const;

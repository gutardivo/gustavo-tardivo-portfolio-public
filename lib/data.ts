import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsTools } from "react-icons/bs";
import { HiOutlineTranslate } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";

import mcmalwareImg from "@/public/mcmalware.png";
import instagramSearchImg from "@/public/instagram-search.png";
import mercurymsgImg from "@/public/mercurymsg.png";

export const links = [
  {
    nameEn: "Home",
    namePt: "Home",
    hash: "#home",
  },
  {
    nameEn: "About",
    namePt: "Sobre",
    hash: "#about",
  },
  {
    nameEn: "Projects",
    namePt: "Projetos",
    hash: "#projects",
  },
  {
    nameEn: "Skills",
    namePt: "Habilidades",
    hash: "#skills",
  },
  {
    nameEn: "Experience",
    namePt: "Experiência",
    hash: "#experience",
  },
  {
    nameEn: "Contact",
    namePt: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
      titleEn: "Volunteer translator",
      titlePt: "Tradutor voluntário",
      location: "Hillsong Church",
      descriptionEn:
        "I volunteered on the translation and interpretation team on Sundays, welcoming people from all over the world, explaining how the meetings functioned, communicating in English and Spanish, and practicing some basic German with germans and swiss people 😂.",
      descriptionPt:
        "Fui voluntário na equipe de tradução e interpretação aos domingos, onde recebia pessoas de todo o mundo e explicava para elas o funcionamento das reuniões, me comunicava em inglês, espanhol e treinava um pouco do meu básico alemão com os alemães e suiços 😂.",
      icon: React.createElement(HiOutlineTranslate),
      dateEn: "2018 - 2019",
      datePt: "2018 - 2019",
    },
    {
      titleEn: "Apprentice",
      titlePt: "Aprendiz",
      location: "Mercedes-Benz",
      descriptionEn:
        "I was hired in the automotive production course at SENAI Mercedes-Benz within the factory, where I learned automotive mechanics, machining, tooling, and welding.",
      descriptionPt:
        "Fui contratado no curso de producão veicular do SENAI Mercedes-Benz dentro da fábrica, onde aprendi mecânica automotiva, mecânica de usinagem, ferramentaria e soldagem.",
      icon: React.createElement(BsTools),
      dateEn: "2018 - 2019",
      datePt: "2018 - 2019",
    },
    {
      titleEn: "Founder and CTO",
      titlePt: "Fundador e CTO",
      location: "Tinglee Co.",
      descriptionEn:
        "I co-founded this startup with a friend, and after a year and a half, we sold it. On the first day of sales, we sold half the stock after reaching 1 million organic views on TikTok with a product for parties and in-person gatherings, right in the middle of a pandemic.",
      descriptionPt:
        "Fundei esta startup com um amigo e depois de 1 ano e meio nós a vendemos. No primeiro dia de vendas, já vendemos metade do estoque depois de alcançar 1 milhão de views no tiktok de forma orgânica com um produto para festas e encontros presenciais, em plena pandemia.",
      icon: React.createElement(CgWorkAlt),
      dateEn: "2020 - 2021",
      datePt: "2020 - 2021",
    },
    {
      titleEn: "Full-Stack Developer",
      titlePt: "Desenvolvedor Full-Stack",
      location: "Mercury Messenger",
      descriptionEn:
        "I established this startup few months before selling Tinglee, a WhatsApp automation tool.",
      descriptionPt:
        "Criei esta startup um pouco antes de vender a Tinglee, uma ferramenta de automação para WhatsApp.",
      icon: React.createElement(BiCodeAlt),
      dateEn: "2020 - 2023",
      datePt: "2020 - 2023",
    },
    {
      titleEn: "Full-Stack Developer",
      titlePt: "Desenvolvedor Full-Stack",
      location: "Freelancer",
      descriptionEn:
        "Currently, I'm 100% focused on developing full-stack applications using modern technologies like React, Next.js, and Python. I freelance, but I'm also open to full-time opportunities in this field.",
      descriptionPt:
        "Atualmente, estou 100% focado no desenvolvimento de aplicações full-stack usando tecnologias modernas como React, Next.js e Python. Faço freelancing, mas também estou aberto a oportunidades de emprego nessa área.",
      icon: React.createElement(AiOutlineCode),
      dateEn: "2021 - present",
      datePt: "2021 - atual"
    }    
] as const;

export const projectsData = [
  {
    title: "Multi Client Malware",
    link: "https://github.com/gutardivo/multiClient-reverseShell.git",
    descriptionEn:
      "I made this code to show how a malware works and hide itself from anti-virus.",
    descriptionPt:
      "Eu criei este código para mostrar como um malware funciona e se esconde dos antivírus.",
    tags: ["Kali Linux", "Bash", "Go Lang", "Windows", "Ethical Hacking", "CyberSecurity"],
    imageUrl: mcmalwareImg,
  },
  {
    title: "Instagram Search AI",
    link: "https://github.com/gutardivo/instagram-search-ai",
    descriptionEn:
    "Created this repository to search for someone based on characteristics in the followers of an Instagram account.",
    descriptionPt:
      "Criei este repositório para encontrar alguém com base em características nos seguidores de uma conta no Instagram.",
    tags: ["Python", "Web Scrapping", "AI", "PyTorch"],
    imageUrl: instagramSearchImg,
  },
  {
    title: "Mercury Messenger",
    link: "https://mercury-next.vercel.app/",
    descriptionEn:
      "I worked in this startup for 3 years long as full-stack developer and now working as freelancer pentester.",
    descriptionPt:
      "Trabalhei nesta startup por 3 anos como desenvolvedor full-stack e agora trabalho como pentester freelancer.",
    tags: ["Kali Linux", "Bash", "Burp Suite", "nMap", "Next.js", "Django", "TypeScript", "Tailwind", "Prisma"],
    imageUrl: mercurymsgImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Kali Linux",
  "Ethical Hacking",
  "CyberSecurity",
  "Bash",
  "Node.js",
  "Tailwind",
  "Prisma",
  "Express",
  "TensorFlow",
  "PyTorch",
  "Go Lang",
  "Python",
] as const;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import english from '@/public/languages/en.js';
import portuguese from '@/public/languages/pt.js';

const languages: any = {
  english,
  portuguese,
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const { language } = useLanguage();
  const languageData = languages[language];

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{ languageData.myProjects }</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

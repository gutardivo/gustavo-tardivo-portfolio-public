"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import english from '@/public/languages/en.js';
import portuguese from '@/public/languages/pt.js';

const languages: any = {
  english,
  portuguese,
};


export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { language } = useLanguage();
  const languageData = languages[language];

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{ languageData.experience }</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#101012",
                boxShadow: "none",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              date={ language == 'english' ? item.dateEn : item.datePt }
              icon={item.icon}
              iconStyle={{
                background: "#10101f",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold">{ language == 'english' ? item.titleEn : item.titlePt }</h3>
              <p className="font-normal text-gray-500 !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-white/75">
              { language == 'english' ? item.descriptionEn : item.descriptionPt }
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

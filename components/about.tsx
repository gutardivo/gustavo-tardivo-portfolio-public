"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import english from '@/public/languages/en.js';
import portuguese from '@/public/languages/pt.js';

const languages: any = {
  english,
  portuguese,
};

export default function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguage();
  const languageData = languages[language];

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{ languageData.aboutMe }</SectionHeading>
      <p className="mb-3">
        { languageData.about }
      </p>
    </motion.section>
  );
}

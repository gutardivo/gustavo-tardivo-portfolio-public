"use client";

import { useLanguage } from "@/context/language-context";
import React from "react";
import { US } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleLanguage}
    >
      {language === "english" ? <US className="w-8 rounded-md" /> : <BR className="w-8 rounded-md" />}
    </button>
  );
}

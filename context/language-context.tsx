"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Language = "english" | "portuguese";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("english");

  const toggleLanguage = () => {
    if (language === "english") {
      setLanguage("portuguese");
      window.localStorage.setItem("language", "portuguese");
      // document.documentElement.classList.add("portuguese");
    } else {
      setLanguage("english");
      window.localStorage.setItem("language", "english");
      // document.documentElement.classList.remove("portuguese");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === "portuguese") {
        document.documentElement.classList.add("portuguese");
      }
    } else if (window.matchMedia("(prefers-color-scheme: portuguese)").matches) {
      setLanguage("portuguese");
      document.documentElement.classList.add("portuguese");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}

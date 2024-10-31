'use client'

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect } from "react";
import axios from 'axios';

export default function Home() {
  useEffect(() => {
    document.getElementById('transition-green')!.classList.remove('w-screen')
    document.getElementById('transition-green')!.classList.add('w-0')
    document.getElementById('transition-white')!.classList.remove('w-screen')
    document.getElementById('transition-white')!.classList.add('w-0')

    const sendDataToAPI = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json?token=YOUR_TOKEN');
        var { ip, city, region, country, loc } = response.data;
      } catch (error) {
        console.error('IPinfo error:', error);
      }

      try {
        const requestData = {
          origin: window.location.href,
          page: '/portfolio',
          useragent: navigator.vendor + ' || ' + navigator.userAgent,
          location: ip + ', ' + city + ', ' + region + ', ' + country + ', ' + loc,
          utm: window.location.href.split('?')[1],
        };

        await axios.post('/api/sendPageview', requestData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    sendDataToAPI();
  
  }, []);
  

  return (
    <>
      <div id="transition-green" style={{height:"300vh",zIndex:"1000"}} className="fixed min-h-screen w-screen bg-green-500 transition-all duration-[1000ms] ease-in-out"></div>
      <div id="transition-white" style={{height:"300vh",zIndex:"999"}} className="fixed min-h-screen w-screen bg-white transition-all duration-[1300ms] ease-in-out"></div>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

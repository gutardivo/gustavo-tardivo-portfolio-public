// 'use client'

// import React, { useEffect } from 'react';
// import Script from 'next/script'
// import axios from 'axios';

// const IPINFO_TOKEN = process.env.NEXT_PUBLIC_IPINFO_TOKEN

// export default function Home() {
//   let i = 0
//   let commandIndex = 0
//   let commandInputIndex = 0
//   var autoTypedCommand = ['']
//   var responses: any[] = []
  
//   useEffect(() => {
//     const sendDataToAPI = async () => {
//       try {
//         const response = await axios.get(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`);
//         var { ip, city, region, country, loc } = response.data;
//       } catch (error) {
//         console.error('IPinfo error:', error);
//       }

//       try {
//         const requestData = {
//           origin: window.location.href,
//           page: '/',
//           useragent: navigator.vendor + ' || ' + navigator.userAgent,
//           location: ip + ', ' + city + ', ' + region + ', ' + country + ', ' + loc,
//           utm: window.location.href.split('?')[1],
//         };

//         await axios.post('/api/sendPageview', requestData);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     sendDataToAPI();

//     let initialCommand = 'help'

//     const autoType = () => {
//       const commandToType = initialCommand;
      
//       if (i < commandToType.length) {
//         autoTypedCommand[commandIndex] = autoTypedCommand[commandIndex] + commandToType[i]
//         document.getElementsByTagName("input")[commandInputIndex].value = autoTypedCommand[commandIndex];
//         i++
//       } else {
//         document.getElementsByTagName("input")[commandInputIndex].value = initialCommand;
//         handleCommandSubmit(autoTypedCommand[commandIndex])
//         clearInterval(intervalType);
//       }

//     }

//     const intervalType = setInterval(autoType, 200);

//     return () => {
//       clearInterval(intervalType);
//     };
//   }, []);

//   useEffect(() => {
//     let t = 0
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'Enter') {
//         const command = document.getElementsByTagName("input")[commandInputIndex].value
//         handleCommandSubmit(command);
//         t = 0
//       } else if (event.key === 'ArrowUp' && (commandInputIndex + t) > 0) {
//         t--
//         document.getElementsByTagName("input")[commandInputIndex].value = document.getElementsByTagName("input")[commandInputIndex + t].value
//       } else if (event.key === 'ArrowDown' && t <= 0) {
//         if (t == 0) {
//           document.getElementsByTagName("input")[commandInputIndex].value = ''
//         } else {
//           t++
//           document.getElementsByTagName("input")[commandInputIndex].value = document.getElementsByTagName("input")[commandInputIndex + t].value
//         }
//       }
//     };
    
//     document.addEventListener('keydown', handleKeyDown);
  
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   const handleCommandSubmit = (command: string) => {
//       if (command === 'whoami') {
//         responses.push(`My name is Gustavo, I am ${myAge('2000-03-01')} years old, living in São Paulo, Brazil\nI am a detail-oriented dedicated cybersecurity professional with a passion for safeguarding digital landscapes.\nLeveraging expertise in penetration testing, vulnerability assessment, and incident response to ensure robust protection against cyber threats.\nCommitted to upholding the integrity and confidentiality of sensitive information while mitigating risks.\nSeeking to contribute comprehensive knowledge and skills to a dynamic team in the ever-evolving realm of cybersecurity.`)
//       } else if (command === 'help') {
//         responses.push(`Instructions: type 'open portfolio' command and press Enter to open my portfolio.\n\nList of commands:\nhelp      pwd      cat    \nls        ls -a    ls -l    \nls -la    whoami   open`)
//       } else if (command === 'pwd') {
//         responses.push(`/home/gustavo/Desktop/`)
//       } else if (command === 'ls') {
//         responses.push(`portfolio`)
//       } else if (command === 'ls -a') {
//         responses.push(`.    ..    .gitignore    portfolio`)
//       } else if (command === 'ls -l') {
//         responses.push(`-rw-r--r--    1 gustavo  staff    1411 Mar  1 11:55 portfolio`)
//       } else if (command === 'ls -la' || command === 'ls -al') {
//         responses.push(`drwxr-xr-x    4 gustavo  staff    1411 Jun  2 11:51 .\ndrwxr-xr-x    2 gustavo  staff     728 Jun 10 11:53 ..\n-rw-r--r--    1 gustavo  staff     368 Nov  6 12:18 .gitignore\n-rw-r--r--    1 gustavo  staff    2348 Mar  1 11:55 portfolio`)
//       } else if (command === 'cat portfolio') {
//         responses.push(`Use 'open portfolio' command and see!`)
//       } else if (command === 'cat' || command === 'cat ') {
//         responses.push(`Missing one argument`)
//       } else if (command === 'open portfolio') {
//         responses.push(`Opening...`)
        
//         setTimeout(() => { 
//           document.getElementById('transition-green')!.classList.add('w-screen')
//           document.getElementById('transition-white')!.classList.add('w-screen')
//         },400)

//         setTimeout(() => { 
//           const a = document.createElement('a')
//           a.href = window.location.href.split('?')[1] ? '/portfolio?' + window.location.href.split('?')[1] : "/portfolio"
//           a.click()

//         },1600)
//         setTimeout(() => { document.getElementById('itsgone')?.classList.remove('hidden') },4000)

//       } else {
//         responses.push(`This command does not exist`)
//       }

//     setTimeout(() => {
//       document.getElementsByTagName('pre')[commandIndex].innerHTML = responses[commandIndex]

//       commandIndex++
//       commandInputIndex++

//       const newInputField = document.createElement('div');
//       newInputField.innerHTML = `
//         <div class="flex mt-8">
//           <p class="p-2 pr-0 bg-black font-mono whitespace-pre-wrap text-green-400 focus:outline-none">$</p>
//           <input
//             type="text"
//             placeholder="Enter a command"
//             class="p-2 bg-black font-mono whitespace-pre-wrap text-green-400 focus:outline-none"
//             spellCheck="false"
//             onkeyup="return forceLower(this)"
//           />
//         </div>
//         <div style="padding: 0 0.5rem" className="bg-black">
//           <pre className="text-white font-mono whitespace-pre-wrap"></pre>
//         </div>`;

//       const mainElement = document.getElementById('cli');
//       if (mainElement && command !== 'open portfolio') {
//         setTimeout(() => {
//           mainElement.appendChild(newInputField);
//           // After appending the newInputField, set focus to the input field
//           const inputField = newInputField.querySelector('input');
//           if (inputField) {
//             inputField.focus();
//           }
//         }, 500);
//       }
//     },200)

//   };

//   const myAge = (birthdate: string) => {
//     const birthDate: any = new Date(birthdate);
//     const currentDate: any = new Date();

//     const ageInMilliseconds = currentDate - birthDate;
//     const ageDate = new Date(ageInMilliseconds);

//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   return (
//     <>
//     <div className="mt-16 flex flex-col justify-center">
//       <div id="transition-green" style={{height:"300vh"}} className="fixed z-10 min-h-screen w-0 bg-green-500 transition-all duration-[1300ms] ease-in-out"></div>
//       <div id="transition-white" style={{height:"300vh"}} className="fixed min-h-screen w-0 bg-white transition-all duration-[1000ms] ease-in-out"></div>
//       <div id="itsgone" className="fixed text-xl hidden text-center w-screen z-20 text-black "><code>Everything is gone hehe :)</code></div>
//       <main id='cli' className="flex flex-col">
//         <div className="flex">
//           <p className="p-2 pr-0 bg-black font-mono whitespace-pre-wrap text-green-400 focus:outline-none">$</p>
//           <input
//             type="text"
//             readOnly
//             placeholder="Enter a command"
//             className="p-2 bg-black font-mono whitespace-pre-wrap text-green-400 focus:outline-none"
//             spellCheck="false"
//           />
//         </div>
//         <div className="bg-black p-2 py-0">
//           <pre className="text-white font-mono whitespace-pre-wrap"></pre>
//         </div>
//       </main>
//     </div>
//     <Script src="/forceLower.js" />
//     </>
//   );
// }

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

const IPINFO_TOKEN = process.env.NEXT_PUBLIC_IPINFO_TOKEN

export default function Home() {
  useEffect(() => {
    document.getElementById('transition-green')!.classList.remove('w-screen')
    document.getElementById('transition-green')!.classList.add('w-0')
    document.getElementById('transition-white')!.classList.remove('w-screen')
    document.getElementById('transition-white')!.classList.add('w-0')

    const sendDataToAPI = async () => {
      try {
        const response = await axios.get(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`);
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
      <div id="transition-green" style={{height:"300vh",zIndex:"1000"}} className="fixed top-0 min-h-screen w-screen bg-green-500 transition-all duration-[1000ms] ease-in-out"></div>
      <div id="transition-white" style={{height:"300vh",zIndex:"999"}} className="fixed top-0 min-h-screen w-screen bg-white transition-all duration-[1300ms] ease-in-out"></div>
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

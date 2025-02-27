import React, { useState, useEffect } from "react";
import ButtonBrand from "../../components/home/buttonBrand";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faFire,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia, coy } from "react-syntax-highlighter/dist/esm/styles/prism"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const words = ["Freelancer", "MERN Stack Developer", "Open Source Contributor"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [theme, setTheme] = useState("coy");
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  useEffect(() => {
    const updateTheme = () => {
      if(document.documentElement.classList.contains('dark')) {
        setTheme('dark');
      } else {
        setTheme('coy');
      }

    }
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    }); 
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    console.log("Current Theme:", theme);
    console.log("Computed Style:", window.getComputedStyle(document.querySelector("pre")));
  }, [theme]);
 const codeString = `
 const developer = {
    name: 'Nguyen Vu Nguyen',
    skills: ['React', 'Redux', 'NextJS', 'NodeJS',
    'NestJS', 'NoSQL', 'SQL'],
    hardworker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return (
        this.hardworker && 
        this.problemSolver && 
        this.skills.length >= 5
      );
    }
  };
 `;
  
  return (
   
   
   <div className="flex flex-row items-start w-full  gap-24 relative">
      {/* Content */}
      <div className="w-1/2 flex flex-col z-2 justify-center gap-10">
        {/* Hello */}
        <div className="flex flex-col gap-5">
          {/* Title */}
          <div className="flex flex-row items-center justify-start gap-4">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Hi There!
            </h1>
            <img
              className="w-10 h-10 m-0 p-0"
              src="https://media2.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif"
              alt="hi"
            />
          </div>
          <h1>
            <span className="text-3xl font-semibold text-gray-900 dark:text-white">
              I'M
            </span>
            <strong className="text-3xl text-[#ec4899] font-semibold p-3">
              NHSMAI
            </strong>
          </h1>
          <div className="inline-block">
            <h2 className="text-gray-900 overflow-hidden whitespace-nowrap text-2xl md:text-xl pr-5 dark:text-green-500">
              {words[index].substring(0, subIndex)}
              <span className="animate-blink">|</span>
            </h2>
          </div>
        </div>
        {/* Social Buttons */}
        <div className="flex flex-row gap-4 items-baseline">
          <ButtonBrand brand="Github" link="https://github.com/nhsmai04" icon={faGithub} />
          <ButtonBrand brand="Github" link="https://www.facebook.com/nhsmai04/" icon={faFacebook} />
          <ButtonBrand brand="Github" link="https://github.com/nhsmai04" icon={faInstagram} />
        </div>
        <div className="flex flex-row gap-4  items-center">
           <button 
              className='flex flex-row items-center gap-2 py-3 px-6 rounded-3xl border-2 border-[#ec4899] dark:text-white'
            >
            <p className="font-semibold">MY SKILL</p>
            <FontAwesomeIcon icon={faFire} className='text-orange-600 ' />
          </button> 
          <button 
              className='flex flex-row items-center gap-2 py-3 px-6 text-white rounded-3xl  bg-gradient-to-r from-purple-500 to-pink-500 '
            >
            <p className="font-semibold">GET RESUME</p>
            <FontAwesomeIcon icon={faDownload} className='text-white ' />
          </button> 
        </div>
      </div>
      <div className="w-1/2 flex flex-col rounded-lg border border-gray-300 dark:border-gray-700">
  {/* Thanh tiêu đề của cửa sổ */}
  <div className="flex flex-row gap-2 border-b-2 p-3 border-gray-600 bg-gray-100 dark:bg-gray-800">
    <FontAwesomeIcon icon={faCircle} className="text-[#ec4899] text-sm" />
    <FontAwesomeIcon icon={faCircle} className="text-[#ec4899] text-sm" />
    <FontAwesomeIcon icon={faCircle} className="text-[#ec4899] text-sm" />
  </div>

  {/* Khung chứa mã code */}
    <SyntaxHighlighter
    key={theme} 
    language="javascript"
    style={theme === "dark" ? okaidia : coy} 
    wrapLines={true}
    customStyle={{
      padding: "0px 1em !important",  
      fontSize: "0.75em ",
      margin: "0px ",           
      borderRadius: "0.3em ",  
      backgroundColor: theme === "dark" ? "#1f2937" : "transparent",
      boxSizing: "border-box",
      overflow: "auto",
      color: theme === "dark" ? "#f8f8f2" : "#333", // Sửa lại để chỉ đặt màu chữ
    }}
    
  >
    {codeString}
  </SyntaxHighlighter>
  </div>
</div>
  );
}

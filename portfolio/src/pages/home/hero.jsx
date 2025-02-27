import React from 'react'
import { useState,useEffect } from 'react'
const words = ["Freelancer", "MERN Stack Developer", "Open Source Contributor"];
export default function hero() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
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

    }, [subIndex, isDeleting,index]);
    return (
    // container
    <div className='flex flex-row items-start width-full gap-32 position-relative '>
        {/*  content */}
        <div className='width-1/2 flex flex-col z-2 justify-center gap-12 '>
            {/* hello */}
            <div className='flex flex-col gap-5 '>
                  {/* titile */}
                  <div className='flex flex-row  items-center justify-start gap-4' >
                    <h1 className='text-3xl  font-semibold text-gray-900 dark:text-white' >Hi There!</h1>
                    <img className='w-10 h-10 m-0 p-0' src="https://media2.giphy.com/media/w1OBpBd7kJqHrJnJ13/giphy.gif?cid=6c09b9525naakrhnxbhm11umldks61f6ogfikmgl5xiz3obh&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="hi" />
                  </div> 
                  <h1><span className='text-3xl font-semibold text-gray-900 dark:text-white'>I'M</span>  <strong className='text-3xl text-[#ec4899] font-semibold p-3 '>NHSMAI</strong></h1> 
                  <div className="inline-block fit-content">
                    <h2  className="text-green-500 overflow-hidden  whitespace-nowrap text-2xl md:text-xl pr-5">
                            {words[index].substring(0, subIndex)}
                            <span className="animate-blink">|</span>
                    </h2>                
            </div>

            </div>
        </div>

    </div>
  )
}

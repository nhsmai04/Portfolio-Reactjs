
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faInstagram,
    faTiktok,
  } from "@fortawesome/free-brands-svg-icons";
export default function ButtonBrand( {brand,link,icon} ) {
  return (  
        <a href={link}
        target="_blank"
        
        className='flex rounded-full  size-9 text-blue-700 text-2xl dark:text-[#ff5e78] '
        >
           <FontAwesomeIcon icon={icon} /> 
        </a>
    
  )
}

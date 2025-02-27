import React from 'react'
import { useState ,useEffect} from 'react'
import {Sun, Moon,ChevronDown} from 'lucide-react'


export default function header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === "dark"){
      setDarkMode(true)
      document.documentElement.classList.add('dark');  
    }

  },[])
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if(!darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme','dark')
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme','light')
  }
}   
    return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 '>
       <div className='max-w-screen-lg mx-auto p-4 flex justify-between items-center'> 
            <a href="#" className='flex items-center space-x-3 rtl:space-x-reverse'>
                <img src="https://flowbite.com/docs/images/logo.svg" alt="react" className='w-8 h-8' />
                <span className='text-2xl font-semibold self-center  dark:text-white'>Nhsmai04</span>
            </a>

            <div className='hidden w-full md:block md:w-auto'>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 dark:text-white  dark:hover:text-blue-500' >Home</a>
                    
                </li>
                <li>
                    <a href="#" className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 dark:text-white  dark:hover:text-blue-500'>Project</a>
                
                </li>
                <li>
                    <a href="#" className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 dark:text-white  dark:hover:text-blue-500'>About</a>
                </li>
            </ul>
            
            </div>

            <div className='flex items-center space-x-4 flex-row'>
            <button onClick={toggleTheme} className="p-2 rounded-lg">
            {darkMode ? (
              <Sun size={24} className="text-yellow-500" />
            ) : (
              <Moon size={24} className="text-gray-900 dark:text-white" />
            )}
          </button> 
              
            <div className='relative'>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center  py-2  text-gray-900 rounded-sm hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 dark:text-white  dark:hover:text-blue-500"
            >
              Ngôn Ngữ
              <ChevronDown size={16} className="ml-2" />
            </button>  
            {/* Menu dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0  w-44 bg-white border rounded-lg shadow-md dark:bg-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Tiếng Việt
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Tiếng Anh
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Tiếng Nhật
                    </a>
                  </li>
                </ul>
                
              </div>
            )}  
            </div>
            
            </div>        
            


            
        </div>
          
    </nav>
  )
}

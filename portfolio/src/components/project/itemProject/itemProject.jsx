import React from 'react'

const ItemProject = () => {
  return (
    <div className='flex py-12 px-6 md:w-1/3 w-full ' >
          <div className='rounded-md border-1 border-gray-900  shadow-2xl  cursor-pointer  hover:border-blue-700 hover:scale-105 transition-all duration-500 ease-in-out dark:shadow-blue-800 dark:border-2 dark:hover:border-pink-800'>
               <img className='w-full h-auto rounded-t-md   ' src="src\assets\pj_logo\react_native.png" alt="" />
               <div className='m-4'>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-300'>Soli Tea App</h2>
                    <p className='text-gray-900 dark:text-gray-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className='m-4'>
                  <a role='button' 
                      className='inline-flex items-center  justify-center gap-2 py-2 px-4 bg-blue-700 rounded-md text-white text-sm font-medium hover:bg-blue-800 transition-all duration-300'
                  href="#">
                  <img className='w-7 h-7 object-contain' src="src/assets/logo/GitHub-logo.png" alt="GitHub Logo" />
                   GitHub
                  </a>
                </div>
               
               
          </div>  
    </div>
  )
}

export default ItemProject
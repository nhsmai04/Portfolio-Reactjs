import React from 'react'
import ListProject from './listProject'

export default function project() {
  return (
    <main className='flex flex-col  container w-full h-full mx-auto bg-white dark:bg-gray-900 py-20 px-24'>
          <div className='flex flex-col items-center justify-center mb-7'>
              <h2 className='text-3xl font-semibold text-gray-800 dark:text-gray-300 '>My Recent <span className='dark:text-[#ec4899]'>Works</span></h2>
              <br />
              <p className='font-semibold text-gray-800 dark:text-gray-300 '>Here are a few project I've worked on recently</p>
          </div>
          <ListProject />
    </main>
  )
}

import React from 'react'
import Hero from './hero'
import IntroMyself from './introMyself'
const home = () => {
  return (
    <main className='flex flex-col gap-14 container w-full h-full mx-auto bg-white dark:bg-gray-900 py-20 px-24'>
      <Hero />
      <IntroMyself />
    </main>
  )
}
export default home

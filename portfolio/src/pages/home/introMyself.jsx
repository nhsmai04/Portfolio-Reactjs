import React from 'react';

const IntroMyself = () => {
    return(
        
        <div className='relative w-full border-b-[1px] border-gray-300 pb-28'> 
        <div className='flex  flex-row items-start w-full  '>
            <div className=' w-full sm:w-full md:w-3/4'>
                <h2 className=' text-md-start text-3xl font-semibold text-gray-900 dark:text-white'>LET ME <span className='text-[#ec4899] font-semibold'>INTRODUCE</span> MY SELF</h2>
                <br />
                <p className=' text-gray-900 dark:text-white'>
                I fell in love with programming and I have at least learnt something, I think… 🤔
                <br />
                <br />
                I am fluent in classics like <i className='text-[#ec4899] font-semibold'>PHP and Javascript</i>
                <br />
                <br />
                My field of Interest's are building new <i className='text-[#ec4899] font-semibold'>Web Technologies and Products</i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products with <i className='text-[#ec4899] font-semibold'>Node.js</i> and <i className='text-[#ec4899] font-semibold'>MVC</i>
                </p>
            </div>
            <div className='hidden md:block md:w-1/4'>
                <div className="transition-transform duration-[400ms]  [transition-timing-function:cubic-bezier(0.03,0.98,0.52,0.99)] will-change-transform perspective-[1000px] rotate-x-0 rotate-y-0 scale-100">
                    <img className='fluid' src="https://cv.hoidanit.vn/assets/avatar-Bf33_FYj.svg" alt="" />
                </div>  
            </div>
            
        </div>
        <div className='flex flex-col items-center absolute top-[60px] right-[-30px]'>   
            <span className='bg-[#1a1443] w-fit text-white rotate-90 py-[0.5em] px-[1em] text-[1.25em] uppercase rounded-md'>About-me</span>
            <span className='h-44 w-[2px] bg-[#1a1443]   '></span>
        </div>
        </div>
        
        
        
    );

}
export default IntroMyself;
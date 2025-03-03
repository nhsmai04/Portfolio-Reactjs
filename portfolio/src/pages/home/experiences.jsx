import React from 'react'
import {Fade} from 'react-awesome-reveal'
import { computer } from '../../assets/index'
import Lottie from 'lottie-react'
import Card from '../../components/home/card/card'
import {
    faBriefcase,
    faLaptopCode,
    faComputer,
  } from "@fortawesome/free-solid-svg-icons";
const Experiences = () => {
  return (
    <div className=" w-full border-b  ">
    {/* Tiêu đề Experiences */} 
        <div className='mb-12'>
            <h2 className="text-center text-3xl font-semibold text-black dark:text-white">Experiences</h2>
        </div>
        
    
    <div className='flex items-center justify-center flex-col md:flex-row'>

    <div className="flex items-center justify-center w-full md:w-1/2 ">
        <Fade direction="left" triggerOnce>
            <Lottie animationData={computer} className='w-full h-full object-contain'/>
        </Fade>
    </div>

    {/* Danh sách kinh nghiệm */}
    <div className="flex flex-col items-center w-full md:w-1/2 ">
        <Fade direction="right" triggerOnce>
            {/* Thẻ trải nghiệm, hiển thị theo chiều dọc trên mobile, ngang trên desktop */}
            <div className="flex flex-col w-full gap-4">
                {/* Card 1 */}
                <Card time="Jun 2022 - Jan 2024" title="Fullstack Developer" company="Sun* (Intern)" icon={faLaptopCode} />
                <Card time="Jun 2022 - Jan 2024" title="Fullstack Developer" company="MKI (Intern)" icon={faLaptopCode} />    
                {/* Card 2 */}
                
            </div>
        </Fade>
    </div>
    </div>
    {/* Hình minh họa */}
    
</div>

  )
}
export default Experiences

import React from 'react'
import Marquee from 'react-fast-marquee'
import CardSkill from '../../components/home/skills/cardSkill'
import {
  html,
  css,
  tailwind,
  bootstrap,
  react,
  node,
  mysql,
  firebase,
  git,
  github,
  figma
} from '../../assets/index'
const Skill = () => {
  return (
    <div className='w-full flex flex-col py-10'>
      <h2 className='text-3xl text-center font-semibold mb-12  dark:text-gray-100'>Skill</h2>
      <div className='h-fit overflow-hidden  '>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          className='flex h-36 flex-row gap-2 justify-center items-center overflow-hidden '
          autoFill={true}
          
        >
          <CardSkill title='HTML' logo={html} />
          <CardSkill title='CSS' logo={css} />
          <CardSkill title='Tailwind' logo={tailwind} />
          <CardSkill title='Bootstrap' logo={bootstrap} />
          <CardSkill title='React' logo={react} />
          <CardSkill title='Node' logo={node} />
          <CardSkill title='Mysql' logo={mysql} />
          <CardSkill title='Firebase' logo={firebase} />
          <CardSkill title='Git' logo={git} />
          <CardSkill title='Github' logo={github} />
          <CardSkill title='Figma' logo={figma} />
        </Marquee>
      </div>
    </div>
  )
}
export default Skill

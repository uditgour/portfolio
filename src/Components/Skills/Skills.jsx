import React from 'react'
import { bootstrap, html, css, javascript, reactjs, nodejs, expressjs, mongodb, database, angular, java, spring,git } from '../../assets/skills'
import SphereCanvas from '../Canvas/Sphere'
import { SectionWrapper } from '../../hoc'

const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Oracle Database",
    icon: database
  },
  {
    name: "Express JS",
    icon: expressjs
  },
  {
    name: "Bootstrap",
    icon: bootstrap
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "Spring Boot",
    icon: spring
  }
]
const Skills = () => {
  return (
    <div>
      <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0 mb-6'>My Skills</p>
      <div className='flex flex-row flex-wrap justify-center gap-10 items-center'>
        {skills.map((skill) => (
          <div className='w-28 h-28' key={skill.name}>
            <SphereCanvas icon={skill.icon} />
            <div className='ml-8'>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, '#skills')

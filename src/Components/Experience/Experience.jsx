import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faAngular } from '@fortawesome/free-brands-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-brands-svg-icons'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};
const Experience = () => {
  return (
    <div id='experience'>
      <motion.div variants={textVariant()}>
        <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0'>WHAT I HAVE DONE SO FAR...</p>
        <h2 className='lg:text-[80px] sm:text-[60px] min-[380px]:50px text-[40px] text-white ubuntu m-0'>Work Experience</h2>
      </motion.div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins "
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="September, 2023 - present"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faLeaf} />}
        >
          <h3 className="vertical-timeline-element-title text-[#ae3ace]">JavaScript Developer</h3>
          <h4 className="vertical-timeline-element-subtitle text-[#ae3ace]">Infosys, Pune</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Designed and developed RESTful APIs using Spring Boot to enable seamless communication between client and server systems.</li>
            <li>Implemented microservices architecture, breaking down monolithic applications into scalable, independent services using Spring Boot and Spring Cloud.</li>
            <li>Integrated relational databases (MySQL/PostgreSQL) with Spring Data JPA and Hibernate for efficient data persistence and retrieval.</li>
            <li>Secured applications with Spring Security, implementing JWT-based authentication and authorization protocols.</li>
            <li>Tested and validated APIs with JUnit and Mockito, achieving a high level of code coverage.</li>
            <li>Collaborated with front-end teams to integrate APIs seamlessly and with DevOps engineers to build CI/CD pipelines for automated builds and deployments.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="August, 2022 - September, 2023"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faAngular} />}
        >
          <h3 className="vertical-timeline-element-title  text-[#ae3ace]">Angular Developer</h3>
          <h4 className="vertical-timeline-element-subtitle  text-[#ae3ace]">Infosys, Pune</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Experienced in developing dynamic web applications using Angular, implementing reusable components and optimizing performance for responsive, high-speed user experiences.</li>
            <li>Implemented client-side routing with Angular Router, enabling navigation, route guards, and lazy loading modules.</li>
            <li>Integrated REST APIs with Angular's HttpClient to enable seamless communication between the frontend and backend systems.</li>
            <li>Managed state efficiently using RxJS Observables, Subjects, and BehaviorSubjects, ensuring data consistency and scalability.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="June,2022 - July,2022"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faGears} />}
        >
          <h3 className="vertical-timeline-element-title text-[#ae3ace]">Angular and Spring Boot - Training</h3>
          <h4 className="vertical-timeline-element-subtitle text-[#ae3ace]">Infosys, Pune</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Undergone training in the domain Angular and Spring Boot and developed a real time project during the training.</li>
            <li>In Angular training i got hands-on experience in building responsive web applications using Angular Material, Reactive Forms, and RxJS</li>
            <li>In Spring Boot training i got hands-on experience RESTful API development, JPA with Hibernate for database integration, and Spring Security for authentication and authorization.</li>
            <li>During the training I have also worked on Spring Microservices architecture for creating RESTful APIs, distributed systems, and integrating with cloud-based solutions for scalable and high-performance applications.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default SectionWrapper(Experience, '#experience')

import React from 'react';
import { motion } from "framer-motion";
import styles from './about.module.css';

const skills = [
  'Javascript', 'TypeScript', 'React.js', 'Next.js', 'SCSS', 'Tailwind CSS',
  'MongoDB', 'MySQL', 'Node.js', 'Express.js', 'Redux', 'Framer Motion',
  'Vite', 'Firebase', 'Git', 'Jenkins', 'Docker', 'Docker Compose'
];

const experiences = [
  {
    title: 'Full-Stack Developer',
    desc: 'Experienced in building dynamic web applications with React and Next.js on the frontend. Backend expertise in Node.js and Express, with a focus on creating scalable APIs. Proficient in both relational MySQL, PostgreSQL and non-relational databases MongoDB. State management using Redux, data fetching with React Query. Familiar with testing tools Jest, Cypress and version control Git.',
    date: 'Present',
    company: 'Software University - Sofia',
  },
  {
    title: 'React JS',
    desc: 'Developing Single Page Applications using ReactJS technology. Writing with JSX syntax, handling requests and Promises, routing, form validation, styling components using techniques like CSS Modules and Styled Components. React Hooks, Context API. Unit testing with JEST.',
    date: '2021 - 2022',
    company: 'Software University - Sofia',
  },
  {
    title: 'Javascript Back End',
    desc: 'The development of server-side JavaScript applications on the Node.js platform, using Express.js as a framework. Server-client architecture and data-driven web applications with Node.js, Express.js, and MongoDB. Working with MongoDB-Mongoose library. Building REST APIs using Express.js and MongoDB.',
    date: '2021 - 2022',
    company: 'Software University - Sofia',
  },
  {
    title: 'HTML and CSS',
    desc: 'Knowledge of HTML5 and CSS3 for web development, web browsers, tools for HTML/CSS/DOM development, and practical skills in using the language for describing web content-HTML and the language for styling web content-CSS.',
    date: '2020 - 2021',
    company: 'Software University - Sofia',
  },
  {
    title: 'Javascript Applications',
    desc: 'HTTP requests, REST services, Backend as a Service "BaaS", asynchronous code "Promises, use of async/await", templating, and routing. Creating a Single Page Application.',
    date: '2020 - 2021',
    company: 'Software University - Sofia',
  },
  {
    title: 'JavaScript Advanced',
    desc: 'Working with the DOM tree, manipulations on it, and handling events. Functional and Object-Oriented Programming OOP approaches in JavaScript, inheritance, object composition, prototype chains and etc.',
    date: '2020 - 2021',
    company: 'Software University - Sofia',
  },
  {
    title: 'C# Basics and Web Design',
    desc: 'Starting my education in PU-Plovdiv and building basic knowledge about C#, further studying about OOP programming.',
    date: '2019 - 2020',
    company: 'Plovdiv University - Plovdiv',
  },
];

const About = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ x: "-200vw" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* BIOGRAPHY CONTAINER */}
      <div className={styles.bioContainer}>
        <div className={styles.image}>
          <img src="./photo.jpg" alt="Profile" />
        </div>
        <h1>BIOGRAPHY</h1>
        <p>
          I was born in Bulgaria and began my academic journey at UACEG University in Sofia, where I studied civil engineering from 2008 to 2015. In 2019, I decided to pivot towards the tech world and started studying coding at PU-Plovdiv. However, I took a break from my studies there to focus on mastering JavaScript more quickly at SoftUni Sofia, where I graduated as a full-stack developer with skills in JavaScript, React, MongoDB, and Node.js.
        </p>
        <br />
        <span>
          Outside of my professional interests, I love staying active. In the summers, I spend a lot of time swimming, and in the autumns, I enjoy hiking. I also like to unwind with some gaming whenever I get the chance.
        </span>
      </div>

      {/* SKILLS CONTAINER */}
      <div className={styles.skills}>
        <h1>SKILLS</h1>
        <div className={styles.skillCont}>
          {skills.map((skill) => (
            <div className={styles.skill} key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL SVG */}
      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: "10px" }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path
          d="M15 11L12 14L9 11"
          stroke="#000000"
          strokeWidth="1"
        ></path>
      </motion.svg>

      {/* EXPERIENCE CONTAINER (DESKTOP) */}
      <div className={styles.expContainer}>
        <h1>EXPERIENCE</h1>
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;
          return (
            <div className={styles.experience} key={exp.title}>
              {/* LEFT */}
              <div className={styles.left}>
                {isEven && (
                  <>
                    <div className={styles.jobTitle}>{exp.title}</div>
                    <div className={styles.jobDesc}>{exp.desc}</div>
                    <div className={styles.jobdate}>{exp.date}</div>
                    <div className={styles.jobCompany}>{exp.company}</div>
                  </>
                )}
              </div>
              {/* MID */}
              <div className={styles.mid}>
                <div className={styles.seprLine}>
                  <div className={styles.seprCircle}></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className={styles.right}>
                {!isEven && (
                  <>
                    <div className={styles.jobTitle}>{exp.title}</div>
                    <div className={styles.jobDesc}>{exp.desc}</div>
                    <div className={styles.jobdate}>{exp.date}</div>
                    <div className={styles.jobCompany}>{exp.company}</div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* RESPONSIVE EXPERIENCE CONTAINER */}
      <div className={styles.resExperience}>
        <h1>EXPERIENCE</h1>
        {experiences.map((exp) => (
          <div className={styles.experience} key={`res-${exp.title}`}>
            <div className={styles.left}>
              <div className={styles.jobTitle}>{exp.title}</div>
              <div className={styles.jobDesc}>{exp.desc}</div>
              <div className={styles.jobdate}>{exp.date}</div>
              <div className={styles.jobCompany}>{exp.company}</div>
            </div>
            <div className={styles.mid}>
              <div className={styles.seprLine}>
                <div className={styles.seprCircle}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;
import React from 'react';
import { motion } from "framer-motion";
import styles from './about.module.css'

const skills = ['Javascript', 'TypeScript', 'React.js', 'Next.js', 'SCSS', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Node.js', 'Express.js', 'GraphQL', 'Redux', 'Framer Motion', 'Vite', 'Firebase', 'Git']

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
          <img src="./photo.jpg" alt="" />
        </div>
        <h1>BIOGRAPHY</h1>
        <p>I was born in Bulgaria and began my academic journey at UACEG University in Sofia, where I studied civil engineering from 2008 to 2015. In 2019, I decided to pivot towards the tech world and started studying coding at PU-Plovdiv. However, I took a break from my studies there to focus on mastering JavaScript more quickly at SoftUni Sofia, where I graduated as a full-stack developer with skills in JavaScript, React, MongoDB, and Node.js.</p>
        <br />
        <span>Outside of my professional interests, I love staying active. In the summers, I spend a lot of time swimming, and in the autumns, I enjoy hiking. I also like to unwind with some gaming whenever I get the chance.</span>
      </div>

      {/* SKILLS CONTAINER */}
      <div className={styles.skills}>
        <h1>SKILLS</h1>
        <div className={styles.skillCont}>
          {skills.map((skill, i) => (<div className={styles.skill} key={i}>
            {skill}
          </div>))}
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
      {/* EXPERIENCE CONTAINER */}
      <div className={styles.expContainer}>
        <h1>EXPERIENCE</h1>
        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              Full-Stack Developer
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Experienced in building dynamic web applications with React and Next.js on the frontend. Backend expertise in Node.js and Express, with a focus on creating scalable APIs. Proficient in both relational MySQL, PostgreSQL and non-relational databases MongoDB. State management using Redux, data fetching with React Query. Familiar with testing tools Jest, Cypress and version control Git.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              Present
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className={styles.right}>

          </div>
        </div>
        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>

          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className={styles.right}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              React JS
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Developing Single Page Applications using ReactJS technology. Writing with JSX syntax, handling requests and Promises,routing, form validation,styling components using techniques like CSS Modules and Styled Components. React Hooks, Context API.Unit testing withJEST
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2021 - 2022
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              Javascript Back End
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              The development of server-side JavaScript applications on the Node.js platform, using Express.js as a framework. Server-client architecture and data-driven web applications with Node.js, Express.js, and MongoDB. Working with MongoDB-Mongoose library. Building REST APIs using Express.js and MongoDB.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2021 - 2022
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className={styles.right}>

          </div>
        </div>
        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>

          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className={styles.right}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              HTML and CSS
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Knowledge of HTML5 and CSS3 for web development, web browsers, tools for HTML/CSS/DOM development, and practical skills in using the language for describing web content-HTML and the language for styling web content-CSS.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2020 - 2021
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              Javascript Applications
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              HTTP requests, REST services, Backend as a Service &lsquo;BaaS&rsquo;, asynchronous code &lsquo;Promises, use of async/await&rsquo;, templating, and routing. Creating a Single Page Application.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2020 - 2021
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className={styles.right}>

          </div>
        </div>
        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>

          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className={styles.right}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              JavaScript Advanced
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Working with the DOM tree, manipulations on it, and handling events. Functional and Object-Oriented Programming OOP approaches in JavaScript, inheritance, object composition, prototype chains and etc.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2020 - 2021
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              C# Basics and Web Design
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Starting my education in PU-Plovdiv and building basic knowledge about C#, further studiing about OOP programing.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2019 - 2020
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Plovdiv Univeristy - Plovdiv
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
          {/* RIGHT */}
          <div className={styles.right}>

          </div>
        </div>
      </div>



      {/* RESPONSIVE TEXT */}
      <div className={styles.resExperience}>
        <h1>EXPERIENCE</h1>
        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              Full-Stack Developer
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Experienced in building dynamic web applications with React and Next.js on the frontend. Backend expertise in Node.js and Express, with a focus on creating scalable APIs. Proficient in both relational MySQL, PostgreSQL and non-relational databases MongoDB. State management using Redux, data fetching with React Query. Familiar with testing tools Jest, Cypress and version control Git.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              Present
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
        </div>
        <div className={styles.experience}>
          {/* RIGHT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              React JS
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Developing Single Page Applications using ReactJS technology. Writing with JSX syntax, handling requests and Promises,routing, form validation,styling components using techniques like CSS Modules and Styled Components. React Hooks, Context API.Unit testing withJEST
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2021 - 2022
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              Javascript Back End
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              The development of server-side JavaScript applications on the Node.js platform, using Express.js as a framework. Server-client architecture and data-driven web applications with Node.js, Express.js, and MongoDB. Working with MongoDB-Mongoose library. Building REST APIs using Express.js and MongoDB.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2021 - 2022
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
        </div>
        <div className={styles.experience}>
          {/* RIGHT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              HTML and CSS
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Knowledge of HTML5 and CSS3 for web development, web browsers, tools for HTML/CSS/DOM development, and practical skills in using the language for describing web content-HTML and the language for styling web content-CSS.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2020 - 2021
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              Javascript Applications
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              HTTP requests, REST services, Backend as a Service &lsquo;BaaS&rsquo;, asynchronous code &lsquo;Promises, use of async/await&rsquo;, templating, and routing. Creating a Single Page Application.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2020 - 2021
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
        </div>
        <div className={styles.experience}>
          {/* RIGHT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              JavaScript Advanced
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Working with the DOM tree, manipulations on it, and handling events. Functional and Object-Oriented Programming OOP approaches in JavaScript, inheritance, object composition, prototype chains and etc.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2020 - 2021
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Software University - Sofia
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
        </div>

        <div className={styles.experience}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* JOB TITLE */}
            <div className={styles.jobTitle}>
              C# Basics and Web Design
            </div>
            {/* JOB DESC */}
            <div className={styles.jobDesc}>
              Starting my education in PU-Plovdiv and building basic knowledge about C#, further studiing about OOP programing.
            </div>
            {/* JOB DATE */}
            <div className={styles.jobdate}>
              2019 - 2020
            </div>
            {/* JOB COMPANY */}
            <div className={styles.jobCompany}>
              Plovdiv Univeristy - Plovdiv
            </div>
          </div>
          {/* MID */}
          <div className={styles.mid}>
            <div className={styles.seprLine}>
              <div className={styles.seprCircle}></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div >
  )
}

export default About
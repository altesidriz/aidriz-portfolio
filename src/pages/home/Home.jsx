import React, { useState } from 'react'
import styles from './home.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import pdf from '/Resume.pdf';


const Home = () => {

  const handleCvClick = () => {
    window.open(pdf, '_blank'); // Open PDF in a new tab/window
  };

  return (
    <div className={styles.container}>
      {/* AVATAR */}
      <div className={styles.avatar}>
        <motion.div className={styles.imgBorder}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 50,
            ease: "linear"
          }}
        >
          <img src="./pngwing.png" alt="" />
        </motion.div>
        <div className={styles.imageContainer}>
          <img src="./avatar.png" alt="" />
        </div>
      </div>
      {/* TEXT */}
      <div className={styles.text}>
        <h1 className={styles.title}>
          Full Stack Java<span className="text-yellow-500">script</span> Developer
        </h1>
        <p className={styles.desc}>
            Welcome to my portfolio page! I&apos;m a full-stack developer with a passion for creating efficient and dynamic web applications. Here, you&apos;ll find a showcase of the projects I&apos;ve worked on, each highlighting my skills in JavaScript, React, MongoDB, Node.js and many more.<br></br>
            <span>I hope my work gives you a glimpse into my capabilities, and I look forward to the opportunity to collaborate on future projects!</span>
          </p>
      {/* Buttons */}
      <div className={styles.buttons}>
        <button><Link to="/portfolio">Wiev My Work</Link></button>
        <button><Link to="/contact">Contact Me</Link></button>
        <button onClick={handleCvClick}>Check My CV</button>
      </div>
      </div>
    </div>
  )
}

export default Home
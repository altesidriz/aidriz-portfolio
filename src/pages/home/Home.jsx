import React from 'react'
import styles from './home.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { storage, ref, getDownloadURL } from '../../firebase/firebase.js';


const Home = () => {

  const handleCvClick = async () => {
    try {
        const pdfRef = ref(storage, 'portfolio/ResumeCV.pdf'); // Adjust the path in storage
        const pdfUrl = await getDownloadURL(pdfRef);
        window.open(pdfUrl, '_blank');
    } catch (error) {
        console.error('Error getting PDF URL:', error);
        // Handle error (e.g., show an error message to the user)
    }
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
        <button><Link to="/portfolio">View My Work</Link></button>
        <button><Link to="/contact">Contact Me</Link></button>
        <button onClick={handleCvClick}>Check My CV</button>
      </div>
      </div>
    </div>
  )
}

export default Home
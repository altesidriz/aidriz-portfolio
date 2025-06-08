import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from './contact.module.css';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_PUBLIC_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true)
          setLoading(false)
          formRef.current.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className={styles.contact}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className={styles.textContainer} variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
        <motion.div className={styles.item} variants={variants}>
          <h2>Mail</h2>
          <span>altes.fidail@gmail.com</span>
        </motion.div>
        <motion.div className={styles.item} variants={variants}>
          <h2>Address</h2>
          <span>Bulgaria, Sofia 1000</span>
        </motion.div>
        <motion.div className={styles.item} variants={variants}>
          <h2>Phone</h2>
          <span>+35999959836</span>
        </motion.div>
      </motion.div>
      <div className={styles.formContainer}>
        <motion.div
          className={styles.phoneSvg}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 4 }}
              d="M21,11c0,6.7-4.3,6.4-4.8,6.4c-0.6,0-1.1-0.1-1.6-0.4c-0.4-0.3-0.8-0.6-1-1.1c-0.4,0.5-0.8,0.9-1.3,1.1
	c-0.5,0.3-1,0.4-1.6,0.4c-0.5,0-1-0.1-1.4-0.3c-0.4-0.2-0.8-0.6-1-1c-0.3-0.4-0.5-0.9-0.6-1.5c-0.1-0.6-0.1-1.3-0.1-2
	c0.1-0.9,0.3-1.7,0.6-2.5c0.3-0.7,0.7-1.4,1.1-1.9c0.4-0.5,0.9-0.9,1.5-1.2c0.6-0.3,1.2-0.4,1.8-0.4c2,0,3.1,1,3.3,1.2L15.4,14
	c0,0.4-0.2,1.8,1.1,1.8c0.4,0,2.4-0.5,2.4-4.7c0-0.1,0.9-7-6.6-7C6.3,4,5,9.9,5,12c0,8.4,5.3,8,7,8c2,0,3.1-0.4,3.3-0.5l0.4,1.8
	C15.5,21.5,14.5,22,12,22c-3.1,0-9-0.1-9-10c0-1.4,0.8-10,9.5-10C20.8,2,21,9.6,21,11z M10.1,12.6c-0.1,0.9,0,1.7,0.2,2.2
	c0.2,0.5,0.6,0.7,1.2,0.7c1.1,0,1.7-1.4,1.8-1.8l0.5-5.1c-0.1,0-0.7-0.1-0.9-0.1c-0.8,0-1.5,0.4-1.9,1.1
	C10.5,10.2,10.2,11.2,10.1,12.6z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className={styles.emailForm}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>{loading ? "Please wait..." : "Send"}</button>
          {error && "Something went wrong please try again"}
          {success && "Email was sent successfully"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

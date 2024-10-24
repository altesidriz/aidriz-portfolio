import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import { motion, transform } from "framer-motion";
import { link } from 'framer-motion/client';


const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];


const Navbar = () => {
    const [open, setOpen] = useState();
    const [active, setActive] = useState();
    const path = useLocation().pathname;


    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        },
    };
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        },
    };

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className={styles.container}>
            {/* LINKS */}
            <div className={styles.links}>
                {links.map((link) => (
                    <a href={link.url}
                    className={path === link.url ? styles.active : ''}
                    >{link.title}</a>
                ))}
            </div>
            {/* LOGO */}
            <div className={styles.logo}>
                <a href="/">
                    <img src="./favicon.png" alt="" />
                </a>
            </div>
            {/* SOCIAL */}
            <div className={styles.social}>
                <Link to="/"><img src="./facebook.png" alt="" /></Link>
                <Link to="/"><img src="./github.png" alt="" /></Link>
                <Link to="/"><img src="./instagram.png" alt="" /></Link>
                <Link to="/"><img src="linkedin.png" alt="" /></Link>
            </div>
            {/* RESPONSIVE MENU */}
            <div className={styles.responsive} onClick={() => setOpen((prev) => !prev)}>
                {/* MENU BUTTON */}
                <div className={styles.button}>
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className={styles.line}></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className={styles.line}></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className={styles.line}></motion.div>
                </div>
            </div>
            {/* RESPONSIVE MENU LIST */}
            {open && (<motion.div
                variants={listVariants}
                initial="closed"
                animate="opened"
                className={styles.responsiveMenu}>
                {links.map((link) => (
                    <motion.div variants={listItemVariants}
                    onClick={() => setOpen((prev) => !prev)}
                    >
                        <Link to={link.url}>{link.title}</Link>
                    </motion.div>
                ))}
            </motion.div>)}
        </div>
    )
}

export default Navbar
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby'
import { Link as ScrollLink } from "react-scroll";
import * as styles from '../styles/Header.module.css'
import animateText from '../animations.js';

const Header = () => {
    const [visible, setVisible] = useState(true) 
    const prevScrollY = useRef(0);

    useEffect(() => {
        const toAnimate = document.getElementById("about");
        // const toAnimate1 = document.getElementById("work");
        const toAnimate2 = document.getElementById("proj");
        const toAnimate3 = document.getElementById("contact");
        const toAnimate4 = document.getElementById("resume");
        animateText(6, 40, toAnimate, toAnimate2, toAnimate3, toAnimate4);
        // setPosition(window.pageYOffset)
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            console.log(currentScrollY)
            const threshold = 80;

            setVisible(prevScrollY.current > currentScrollY || prevScrollY.current < threshold);
            prevScrollY.current = currentScrollY;
        };
        
        window.addEventListener("scroll", handleScroll);

        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    }, []);
  
    const cls = visible ? "visible" : "hidden";

	return (
        <nav className={styles[cls]}>
            <div className={styles.logo}>
                <ScrollLink to="landingPage" smooth={true}>
                <Link href="/" className={styles.logo}>
                    YSH
                </Link>
                </ScrollLink>
            </div>            
            <div className={styles.nav_links}>
                <ScrollLink to="aboutPage" smooth={true}>
                <Link href="/about" className={styles.nav_link} data-value="About" id="about">
                    <p id="about">About</p>
                </Link>
                </ScrollLink>
                {/* <Link href="/forumgeneral" className={styles.nav_link} data-value="Work" id="work">
                    Work
                </Link> */}
                <ScrollLink to="projectPage" smooth={true}>
                <Link href="/projects" className={styles.nav_link} data-value="Projects" id="proj">
                    Projects
                </Link>
                </ScrollLink>
                <ScrollLink to="contactPage" smooth={true}>
                <Link href="/contact" className={styles.nav_link} data-value="Contact" id="contact">
                    Contact
                </Link>
                </ScrollLink>
                <Link className={styles.resume} href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-value="resume" id="resume">
                    Resume
                </Link>
            </div>
        </nav>
	)
}

export default Header

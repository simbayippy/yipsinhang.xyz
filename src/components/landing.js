import React, { useEffect } from 'react';
import { Link } from 'gatsby'
import { Link as ScrollLink } from "react-scroll";
import animateText from '../animations.js';
import * as styles from '../styles/Landing.module.css'

const LandingPage = () => {
  useEffect(() => {
    const toAnimate = document.querySelector("h1");
    const toAnimateSimba = document.getElementById("simba");
    animateText(5, 40, toAnimate, toAnimateSimba);
    animateText(5.5, 60, toAnimateSimba);
    toAnimate.addEventListener("mouseover", () => animateText(5, 40, toAnimate));
  }, []);
  
  return (
    <main className={styles.main} id="landingPage">
        <div className={`${styles.welcome} ${styles.word}`}>
            <h1 data-value="welcome anon">welcome anon</h1>
        </div>
        <p className={styles.text}>
            <span className={`${styles.simba} ${styles.word}`} data-value="i'm simba." id="simba">i'm simba.</span>
            <ScrollLink to="aboutPage" smooth={true}>
            <Link href="/about" className={`${styles.toFancy} ${styles.word}`}>
                <span className={styles.letter}>s</span>
                <span className={styles.letter}>o</span>
                <span className={styles.letter}>f</span>
                <span className={styles.letter}>t</span>
                <span className={styles.letter}>w</span>
                <span className={styles.letter}>a</span>
                <span className={styles.letter}>r</span>
                <span className={styles.letter}>e &nbsp;</span>
                <span className={styles.letter}>e</span>
                <span className={styles.letter}>n</span>
                <span className={styles.letter}>t</span>
                <span className={styles.letter}>h</span>
                <span className={styles.letter}>u</span>
                <span className={styles.letter}>s</span>
                <span className={styles.letter}>i</span>
                <span className={styles.letter}>a</span>
                <span className={styles.letter}>s</span>
                <span className={styles.letter}>t &nbsp;</span>
                <span className={styles.letter}>-</span>
                <span className={styles.letter}>></span>
                {/* software enthusiast -> */}
            </Link>
            </ScrollLink>
        </p>
        <ScrollLink to="projectPage" smooth={true}>
        <Link href="/" id="cs" className={`${styles.text} ${styles.toFancy} ${styles.word}`}>
            <span className={styles.letter}>c</span>
            <span className={styles.letter}>o</span>
            <span className={styles.letter}>m</span>
            <span className={styles.letter}>p</span>
            <span className={styles.letter}>u</span>
            <span className={styles.letter}>t</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>r &nbsp;</span>
            <span className={styles.letter}>s</span>
            <span className={styles.letter}>c</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>n</span>
            <span className={styles.letter}>c</span>
            <span className={styles.letter}>e &nbsp;</span>
            <span className={styles.letter}>u</span>
            <span className={styles.letter}>n </span>
            <span className={styles.letter}>d</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>g</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>a</span>
            <span className={styles.letter}>d &nbsp;</span>
            <span className={styles.letter}>-</span>
            <span className={styles.letter}>></span>
            {/* Computer science undergrad -> */}
        </Link>
        </ScrollLink>
        {/* <p className={styles.text}>minimalist.</p> */}

        {/* <div id="container">
            <div class={styles.line}>
                <h2 class="word">welcome</h2>
                <h2 class="word">anon</h2>
            </div>
            <div class={styles.line}>
                <h1 class="word">I'm</h1>
                <h1 class="word">simba.</h1>
                <h1 class="word">software</h1>
            </div>
            <div class={styles.line}>
                <h2 class="word">enthusiast</h2>
                <h2 class="word">&</h2>
                <h2 class="word">computer</h2>
            </div>
            <div class={styles.line}>
                <h2 class="word">science</h2>
                <h2 class="word">undergrad</h2>
            </div>
        </div> */}
    </main>
  )
}

export default LandingPage
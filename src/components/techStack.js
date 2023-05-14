import React, { useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/TechStack.module.css'
import { Link } from 'gatsby'

const TechStack = () => {
    return (
        <main className={styles.main} data-aos="fade-up">
            <div className={styles.textContent}>
                <h1 className={styles.title}>Tech Stack</h1>   
                <p>These are the Programming Languages and Frameworks that's fueling my programming journey.</p>
                <li>
                    Java, JavaScript, Solidity, Ruby On Rails
                </li>
                <li>
                    React, Next.js, GatsbyJs, Git, Render
                </li>
            </div>
        </main>
    )
}

export default TechStack
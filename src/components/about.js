import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/About.module.css'

const AboutPage = () => {
    return (
        <main className={styles.main} id='aboutPage' data-aos="fade-up" data-aos-duration="500">
            <div className={styles.textContent}>
                <h1 className={styles.title}>About</h1>   
                <p>
                    I'm Simba, a second year Computer Science student studying at NUS.        
                    I enjoy building things and exploring new technologies, 
                    and I'm particularly interested in the potential of Blockchain.
                </p>
                <p className={styles.para2}>
                    Outside of my studies, I enjoy reading about the latest advancements in technology, 
                    keeping up with politics, and scrolling through Twitter.
                </p>
                <p>
                    This website was built with GatsbyJS, a React framework that generates static pages at build time, optimizing sites like mine with no dynamic data generated.
                </p>
            </div>
            <StaticImage className={styles.profilePicture} src='../images/profilepic.jpg' alt='my profile pic'/>
        </main>
    )
}

export default AboutPage
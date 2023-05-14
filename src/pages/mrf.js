import React from 'react';
import * as styles from '../styles/projectStyles/Mrf.module.css'
import { Link } from 'gatsby'
import LayoutProjects from '../components/layoutProjects';
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Mrf = () => {
    return (
        <LayoutProjects pageTitle="Home Page">
            <main className={styles.main}>
                <h1 className={styles.title}>Vehicular Asset Management Infrastructure</h1> 
                <div className={styles.images}>
                    <StaticImage className={styles.mrf} src="../images/MRF/mrf1.png" alt="demo"/>  
                    <StaticImage className={styles.mrf} src="../images/MRF/mrf2.png" alt="demo"/>  
                </div>
                <div className={styles.textContent}>
                    <p className={styles.date}>
                        August 2021
                    </p>
                    <p>
                        This <Link to="https://github.com/simbayippy/Vehicular-Asset-Management" target="_blank" className={styles.links}>Telegram Bot</Link> was my first ever proper coding project that was
                        written in Python. It's goal was to efficiently keeps track and to notify drivers in my unit of their SAF vehicle's maintenance dates. It supports real-time 
                        updates and features such as daily reminders for new tasks to be completed.
                    </p>
                    <div className={styles.iconLinks}>
                        <Link to="https://github.com/simbayippy/Vehicular-Asset-Management" target='_blank' className={styles.icon}>
                            <FontAwesomeIcon icon={faGithub} size="xl" color='rgb(165, 161, 161)'/>
                        </Link>
                    </div>
                </div>
            </main>
        </LayoutProjects>
    )
}

export default Mrf

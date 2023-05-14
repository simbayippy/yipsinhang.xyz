import React from 'react';
import * as styles from '../styles/Contact.module.css'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <main className={styles.main} id="contactPage"  data-aos="fade-up">
            <h1 className={styles.title}>Contact</h1>   
            <div className={styles.textContent}>
                <p>
                    Don't remain anon
                </p>
                <p className={styles.description}>
                    I'm currently looking for Software Engineering Internships this Winter as well as
                    Summer 2024. If you think I'll make a great addition to your team, 
                    or if you'd just like to know more about me, here are some ways to 
                    reach out to me.
                </p>
                <div className={styles.links}>
                    <Link to="https://www.linkedin.com/in/simbayip/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" color='rgb(165, 161, 161)' className={styles.icon}/>
                    </Link>
                    <Link href="mailto:simbayippy@example.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2xl" color='rgb(165, 161, 161)' className={styles.icon}/>
                    </Link>
                </div>

            </div>
        </main>
    )
}

export default Contact
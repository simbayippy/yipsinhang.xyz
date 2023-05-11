import React from 'react';
import * as styles from '../styles/Projects.module.css'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = ({title, date, description, technologies, github, website}) => {
    return (
        <main className={styles.main}>
            <Link href="/" className={styles.title}>
                {title}
            </Link>
            <p className={styles.date}>
                {date}
            </p>
            <p className={styles.description}>
                {description}
            </p>
            <p className={styles.technologies}>
                <span className={styles.techWord}>Technologies:</span> {technologies}
            </p>
            <Link href="/" className={styles.readMore}>
                Read
            </Link>
            <div className={styles.links}>
                <Link to={github} target='_blank' className={styles.icon}>
                    <FontAwesomeIcon icon={faGithub} size="lg" color='rgb(165, 161, 161)'/>
                </Link>
                {website && (
                <Link to={website} target='_blank' className={styles.icon}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" color='rgb(165, 161, 161)'/>
                </Link>
                )}
            </div>
        </main>
    )
}

export default Projects
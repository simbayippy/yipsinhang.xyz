import React from 'react';
import { Link } from 'gatsby'
import * as styles from '../styles/projectStyles/HeaderProjects.module.css'

const HeaderProjects = () => {
	return (
        <main className={styles.main}>
            <Link to="/#projectPage" className={styles.content}>
                All Projects
            </Link>
        </main>
	)
}

export default HeaderProjects

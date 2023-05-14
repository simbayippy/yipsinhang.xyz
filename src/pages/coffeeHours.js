import React from 'react';
import * as styles from '../styles/projectStyles/CoffeeHours.module.css'
import { Link } from 'gatsby'
import LayoutProjects from '../components/layoutProjects';
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const CoffeeHours = () => {
    return (
        <LayoutProjects pageTitle="Home Page">
            <main className={styles.main}>
                <h1 className={styles.title}>CoffeeHours - CRUD forum webapp</h1> 
                <StaticImage className={styles.coffeeHours} src="../images/coffeeHours/coffeeHours.png" alt="demo"/>  
                <div className={styles.textContent}>
                    <p className={styles.date}>
                        January 2023
                    </p>
                    <p>
                        <Link to="https://coffeehours.site/" target="_blank" className={styles.links}>CoffeeHours</Link> is the first full-stack
                        web application that I made as part of my submission for SOC's CVWO. The front-end was written with TypeScript and NextJs for
                        better performance, and the back-end was written with Ruby On Rails.
                    </p>
                    <p>
                        Features of CoffeeHours include: tagging, commenting, upvoting, sorting based on relevancy, user profiles, as well as user authentication logins. 
                        Additional libraries such as dicebear was used, and additional technologies such as Auth0, Heroku and Render were used to fully
                        deploy this application.
                    </p>
                    <p>
                        As my first full-stack CRUD app, I took away multiple learning points and learnt a lot on HTTP requests, as well as good practices to dynamically 
                        render components.
                    </p>
                    <div className={styles.iconLinks}>
                        <Link to="https://github.com/simbayippy/CVWO-CoffeeHoursFE" target='_blank' className={styles.icon}>
                            <FontAwesomeIcon icon={faGithub} size="xl" color='rgb(165, 161, 161)'/>
                        </Link>
                        <Link to="https://coffeehours.site/" target='_blank' className={styles.icon}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" color='rgb(165, 161, 161)'/>
                        </Link>
                    </div>
                </div>
            </main>
        </LayoutProjects>
    )
}

export default CoffeeHours

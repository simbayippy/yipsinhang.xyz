import React from 'react';
import * as styles from '../styles/ProjectPage.module.css'
import Projects from './projects';

const ProjectPage = () => {
    return (
        <main className={styles.main} id="projectPage">
            <h1 className={styles.title}>Projects</h1>   
            <div className={styles.textContent}>
                <Projects 
                    link="superFlow"
                    title="SuperFlow.cc"
                    date="December 2022"
                    description="A crypto subscription payment infrastructure that utilizes SuperFluid's existing framework to seamlessly deploy entire on-chain Contracts capable of handling
                    acceptance of crypto-currencies as a form of payment for companies subscription services."
                    technologies="Solidity, React, Nextjs, Git"
                    github="https://github.com/sebbycake/superflow"
                    website="https://superflow.cc/subscription/"
                />
                <Projects 
                    link="coffeeHours"
                    title="CoffeeHours Forum"
                    date="January 2023"
                    description="A dynamic CRUD webapp that's built using Ruby On Rails and supports various features such as post tagging, creation, editing as well as deletion. Run on its 
                    own API once hosted on Heroku, now Render"
                    technologies="React, Nextjs, TypeScript, Ruby On Rails, Render"
                    github="https://github.com/simbayippy/CVWO-CoffeeHoursFE"
                    website="https://coffeehours.site/"
                />
                <Projects 
                    link="mrf"
                    title="Vehicular Asset Management Infrastructure - SAF MRF"
                    date="August 2021"
                    description="Telegram Bot written in Python that efficiently keeps track and notifies drivers of their SAF vehicle's maintenance dates. It supports real-time updates and features such as daily reminders for new tasks to be completed."
                    technologies="Python, Heroku"
                    github="https://github.com/simbayippy/Vehicular-Asset-Management"
                />
            </div>
        </main>
    )
}

export default ProjectPage
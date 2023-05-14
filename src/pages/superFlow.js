import React from 'react';
import * as styles from '../styles/projectStyles/SuperFlow.module.css'
import { Link } from 'gatsby'
import LayoutProjects from '../components/layoutProjects';
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const SuperFlow = () => {
    return (
        <LayoutProjects pageTitle="Home Page">
            <main className={styles.main}>
                <h1 className={styles.title}>SuperFlow - Crypto Subscription Payment Infrastructure</h1> 
                <StaticImage className={styles.superFlow} src="../images/superFlow/superflow.png" alt="demo"/>  
                <StaticImage className={styles.superFlow1} src="../images/superFlow/superflow1.png" alt="demo"/>  
                <div className={styles.textContent}>
                    <p className={styles.date}>
                        December 2022
                    </p>
                    <p>
                        <Link to="https://www.superflow.cc/subscription" target="_blank" className={styles.links}>SuperFlow</Link> is a Subscription Payments Infrastructure platform that allows any user - company or project to deploy their own smart contract on-chain
                        that accepts Cryptocurrencies as part of payment for their subscription services. This DApp
                        crucially solves one of the biggest issues of accepting cryptocurrencies for subscription services: 
                        exorbitant gas fees paid during each renewal of service, only requiring a one-time gas fee payment.
                    </p>
                    <p>
                        This DApp utilizes existing infrastructure built by SuperFluid, allowing for constant streaming
                        of stableCoins (USDc, USDt, DAI) to the deployed smart contract, allowing users to access their services
                        so long as there is an active stream of payment from their wallet to the deployed contract's address. Companies can 
                        easily integrate their services to check for their user's subscription status, increasing convenience for both
                        the user and the company.
                    </p>
                    <p>
                        SuperFlow.cc is one of the projects done as a Lead Blockchain Developer in NUS's Fintech Society's Winter
                        projects. For this project, I was tasked to lead a team of 2
                        other engineers and 1 research member to create this on-chain DApp.
                    </p>
                    <p>
                        Learn more about crypto streaming <Link to="https://www.superfluid.finance/" target="_blank" className={styles.links}>here</Link>
                    </p>
                    <div className={styles.iconLinks}>
                        <Link to="https://github.com/sebbycake/superflow" target='_blank' className={styles.icon}>
                            <FontAwesomeIcon icon={faGithub} size="xl" color='rgb(165, 161, 161)'/>
                        </Link>
                        <Link to="https://www.superflow.cc/subscription" target='_blank' className={styles.icon}>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" color='rgb(165, 161, 161)'/>
                        </Link>
                    </div>
                </div>
            </main>
        </LayoutProjects>
    )
}

export default SuperFlow

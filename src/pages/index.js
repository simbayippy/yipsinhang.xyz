import React, {useEffect} from 'react';
import '../styles/Index.module.css'
import '../fonts/Alesand_Regular.ttf';
import '../fonts/ChakraPetch-Regular.ttf';
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from '../components/layout'
import LandingPage from '../components/landing.js';
import AboutPage from '../components/about.js';
import TechStack from '../components/techStack';
import ProjectPage from '../components/projectPage';
import Contact from '../components/contact';

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);


  return (
    <main className="body">
      <Layout pageTitle="Home Page">
        <LandingPage/>
        <AboutPage/>
        <TechStack/>
        <ProjectPage/>
        <Contact/>
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
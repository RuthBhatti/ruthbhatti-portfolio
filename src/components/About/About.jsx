import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import './About.scss';

import image1 from '../../assets/images/image-4.png';
import image2 from '../../assets/images/image-5.png';

import Techlogos from '../../assets/images/tech-logo.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="mobile-carousel">
                <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={3000}
                >
                    <div>
                        <img src={image1} alt="Ruth Bhatti 1" />
                    </div>
                    <div>
                        <img src={image2} alt="Ruth Bhatti 2" />
                    </div>
                </Carousel>
            </div>
            <div className="about-content">
                <h1>About Me</h1>
                <div className="about-description">
                    <p>I’m Ruth Bhatti, a software engineer and project manager based in New York City. I have a Bachelor’s degree in Criminal Justice Management from John Jay College (CUNY) and certifications as a Software Quality Engineer (CSQE) and a Cosmetologist. I have experience in data entry and analysis, customer service, and cosmetology. I am passionate about developing innovative applications and working on impactful projects.</p>
                    <p>In my personal life, I am a devoted dog mom to my two beloved dogs, Olivia and Buddy. My journey into software engineering began with a Bootcamp at BrainStation, where I learned</p>
                    <img className="about-techlogos" src={Techlogos} alt="Node.js, React, HTML5, CSS3, JavaScript, MySQL, VS Code, Git, OpenAI, GitHub, Atlassian Jira, Heroku, Kraken.js, Sass, npm, Express.js, and Jenkins." />
                    <p>For my capstone project, PawVoyage, I mastered React Native in just two weeks. This experience underscores my ability to quickly learn and adapt to new technologies, demonstrating my readiness to tackle challenging projects and continuously grow as a professional.</p>
                </div>
            </div>
            <div className="desktop-carousel">
                <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={3000}
                >
                    <div>
                        <img src={image1} alt="Ruth Bhatti 1" />
                    </div>
                    <div>
                        <img src={image2} alt="Ruth Bhatti 2" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default About;
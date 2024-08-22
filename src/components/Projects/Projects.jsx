import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Projects.scss';
import image1 from '../../../src/assets/images/pawvage-images/Page-1.png';
import image2 from '../../../src/assets/images/pawvage-images/Page-2.png';
import image3 from '../../../src/assets/images/pawvage-images/Page-3.png';
import image4 from '../../../src/assets/images/pawvage-images/Page-4.png';
import image5 from '../../../src/assets/images/pawvage-images/Page-5.png';
import image6 from '../../../src/assets/images/pawvage-images/Page-6.png';
import image7 from '../../../src/assets/images/pawvage-images/Page-7.png';
import image8 from '../../../src/assets/images/pawvage-images/Page-8.png';
import image9 from '../../../src/assets/images/pawvage-images/Page-9.png';
import image10 from '../../../src/assets/images/pawvage-images/Page-10.png';
import image11 from '../../../src/assets/images/pawvage-images/Page-11.png';
import image12 from '../../../src/assets/images/pawvage-images/Page-12.png';
import image13 from '../../../src/assets/images/pawvage-images/Page-13.png';
import image14 from '../../../src/assets/images/pawvage-images/Page-14.png';
import image15 from '../../../src/assets/images/pawvage-images/Page-15.png';

import titansImage1 from '../../../src/assets/images/titans/google-page-1.png';
import titansImage2 from '../../../src/assets/images/titans/google-page-2.png';
import titansImage3 from '../../../src/assets/images/titans/google-page-3.png';
import titansImage4 from '../../../src/assets/images/titans/google-page-4.png';
import titansImage5 from '../../../src/assets/images/titans/google-page-5.png';
import titansImage6 from '../../../src/assets/images/titans/google-page-6.png';
import titansImage7 from '../../../src/assets/images/titans/google-page-7.png';
import titansImage8 from '../../../src/assets/images/titans/google-page-8.png';
import titansImage9 from '../../../src/assets/images/titans/google-page-9.png';
import titansImage10 from '../../../src/assets/images/titans/google-page-10.png';

import coffeeShopImage1 from '../../../src/assets/images/nitro-coffee/coffeeShopImage1.png';
import coffeeShopImage2 from '../../../src/assets/images/nitro-coffee/coffeeShopImage2.png';
import coffeeShopImage3 from '../../../src/assets/images/nitro-coffee/coffeeShopImage3.png';

import bandSiteImage1 from '../../../src/assets/images/bandsite/Biography-Mobile.png';
import bandSiteImage2 from '../../../src/assets/images/bandsite/Biography-Tablet.png';
import bandSiteImage3 from '../../../src/assets/images/bandsite/Biography-Desktop.png';

import bandSiteImage4 from '../../../src/assets/images/bandsite/Shows-Mobile.png';
import bandSiteImage5 from '../../../src/assets/images/bandsite/Shows-Tablet.png';
import bandSiteImage6 from '../../../src/assets/images/bandsite/Shows-Desktop.png';

import brainFlixImage1 from '../../../src/assets/images/brainflix/Mobile-Home.png';
import brainFlixImage2 from '../../../src/assets/images/brainflix/Tablet-Home.png';
import brainFlixImage3 from '../../../src/assets/images/brainflix/Desktop-Home.png';
import brainFlixImage4 from '../../../src/assets/images/brainflix/Mobile-Upload.png';
import brainFlixImage5 from '../../../src/assets/images/brainflix/Tablet-Upload.png';
import brainFlixImage6 from '../../../src/assets/images/brainflix/Desktop-Upload.png';

import jeopardyImage1 from '../../../src/assets/images/Jeopardy/Jeopardy-1.png'
import jeopardyImage2 from '../../../src/assets/images/Jeopardy/Jeopardy-2.png'
import jeopardyImage3 from '../../../src/assets/images/Jeopardy/Jeopardy-3.png'
import jeopardyImage4 from '../../../src/assets/images/Jeopardy/Jeopardy-4.png'
import jeopardyImage5 from '../../../src/assets/images/Jeopardy/Jeopardy-5.png'


import githubLogo from '../../assets/images/github-logo.png';
import linkedinLogo from '../../assets/images/linkedin-logo.png';
import backendlogo from '../../assets/images/backend-logo.png';


const projects = [
    {
        name: "PawVoyage",
        role: "Full Stack Developer",
        organization: "Capstone Project",
        description: "Developing a React Native,Node.js,Express,MongoDB mobile application designed to assist pet owners in traveling internationally with their pets by providing a seamless, step-by-step application process for pet visas. Creating a user-friendly interface that guides users through submitting the necessary documentation to relevant departments in the origin and destination countries, ensuring approval without any hassle. Implementing a backend API to simulate form submissions to government agencies and ensure data persistence. Enhancing the app to support all animals that can travel in future updates, not just dogs. Acquired proficiency in React Native within two weeks to effectively develop this application.",
        images: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15],
        URL: "https://github.com/RuthBhatti/PawVage",
        linkedinURL: "https://www.linkedin.com/in/ruth-bhatti/"
    },
    {
        name: "Titans",
        role: "Front End Engineer",
        organization: "Google x BrainStation",
        description: "Worked with a cross-functional team to design educational components in Google Drive and Google Slides, enhancing user comprehension of the Gemini AI model. Led the creation of user-friendly features, such as an optional Gemini search button and informative pop-ups, to build user trust and transparency. Honorable Mention at BrainStation x Google Industry Project!",
        images: [titansImage1, titansImage2, titansImage3, titansImage4, titansImage5, titansImage6, titansImage7, titansImage8, titansImage9, titansImage10],
        URL: "https://github.com/RuthBhatti/Titans",
        linkedinURL: "https://www.linkedin.com/in/ruth-bhatti/"
    },
    {
        name: "Nitro Coffee",
        role: "Front End Developer",
        organization: "Self-Project",
        description: "Developed a responsive coffee shop website with a focus on user experience and seamless navigation. Implemented a visually appealing layout using HTML, CSS, and SCSS, ensuring compatibility across various devices. The website features a detailed menu, product showcase, and an integrated shopping cart system. It also includes dynamic elements like hover effects and transitions to enhance interactivity.",
        images: [coffeeShopImage1, coffeeShopImage2, coffeeShopImage3],
        URL: "https://github.com/RuthBhatti/updated-coffee-shop",
        linkedinURL: "https://www.linkedin.com/in/ruth-bhatti/"
    },
    {
        name: "BandSite",
        role: "Front End Developer",
        organization: "Self-Project",
        description: "Developed an engaging and responsive band website, utilizing SCSS, HTML, CSS, and JavaScript. Focused on delivering an immersive user experience through a visually captivating layout that is fully responsive across various devices. The website features sections such as Biography, Shows, and a Photo Gallery, enriched with dynamic content and interactive elements. Enhanced user interaction with smooth hover effects and transitions, ensuring a cohesive and enjoyable browsing experience.",
        images: [bandSiteImage1, bandSiteImage2, bandSiteImage3, bandSiteImage4, bandSiteImage5, bandSiteImage6],
        URL: "https://github.com/RuthBhatti/ruth-bhatti-bandsite",
        linkedinURL: "https://www.linkedin.com/in/ruth-bhatti/"
    },
    {
        name: "BrainFlix",
        role: "Full Stack Developer",
        organization: "Self-Project",
        description: "Developed an interactive and user-friendly video streaming platform using SCSS, JavaScript, and HTML. Focused on delivering a seamless user experience with a responsive layout that adapts to various devices. The platform features a home page with a list of videos, a video details page with comments, and a video upload page. Implemented dynamic functionalities such as video playback, comment posting, and video uploads, enhancing the overall user engagement.",
        images: [brainFlixImage1, brainFlixImage2, brainFlixImage3, brainFlixImage4, brainFlixImage5, brainFlixImage6],
        URL: "https://github.com/RuthBhatti/ruth-bhatti-brainflix.git",
        backend: "https://github.com/RuthBhatti/ruth-bhatti-brainflix-api",
        linkedinURL: "https://www.linkedin.com/in/ruth-bhatti/"
    },
    {
        name: "Hackathon Jeopardy Game",
        role: "Front End Engineer",
        organization: "BrainStation Hackathon",
        description: "Developed an engaging Jeopardy game application using React, SCSS, and JavaScript. The game features a dynamic board with categories and questions, where users can select and answer questions that appear in a modal. Focused on delivering an intuitive and responsive user interface. Collaborated with a back-end engineer to integrate the game's API.",
        images: [jeopardyImage1, jeopardyImage2, jeopardyImage3, jeopardyImage4, jeopardyImage5],
        URL: "https://github.com/RuthBhatti/hackathon-2-frontend.git",
        backend: "https://github.com/kirk-en/hackathon-jeopardy-api.git",
        linkedinURL: "https://www.linkedin.com/in/ruth-bhatti/"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [carouselStopped, setCarouselStopped] = useState(false);

    const handleCarouselChange = (index) => {
        if (selectedProject && index === selectedProject.images.length - 1) {
            setTimeout(() => {
                setCarouselIndex(0);
                setCarouselStopped(true);
            }, 3000); // delay to ensure the last slide is visible
        } else {
            setCarouselIndex(index);
        }
    };

    const handleCarouselClick = () => {
        if (carouselStopped) {
            setCarouselStopped(false);
            setCarouselIndex(1); // move to the next slide to resume the carousel
        }
    };

    useEffect(() => {
        if (!selectedProject) {
            setCarouselIndex(0);
            setCarouselStopped(false);
        }
    }, [selectedProject]);

    return (
        <div className={`projects-container ${selectedProject ? 'blurred details-view' : ''}`}>
            <div className="projects-list">
                <h1>Projects</h1>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-name ${selectedProject === project ? 'active' : ''}`}
                        onClick={() => setSelectedProject(project)}
                    >
                        {project.name}
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="project-details">
                    <div className="details-header">
                        <div className="text-content">
                            <h2>{selectedProject.name}</h2>
                            <h3>{selectedProject.role}</h3>
                            <h4>{selectedProject.organization}</h4>
                            <div>
                                <Link to="#" onClick={(e) => { e.preventDefault(); window.open(selectedProject.URL, '_blank', 'noopener,noreferrer'); }}>
                                    <img src={githubLogo} alt="GitHub Repository" style={{ width: '49px', height: '49px' }} />
                                </Link>
                                <Link to="#" onClick={(e) => { e.preventDefault(); window.open(selectedProject.linkedinURL, '_blank', 'noopener,noreferrer'); }}>
                                    <img src={linkedinLogo} alt="LinkedIn Profile" style={{ width: '49px', height: '49px' }} />
                                </Link>
                            </div>
                            <p className="project-description">{selectedProject.description}</p>
                        </div>
                        {selectedProject.images.length > 0 && (
                            <Carousel
                                showArrows={true}
                                infiniteLoop={false}
                                autoPlay={!carouselStopped}
                                dynamicHeight={true}
                                showThumbs={false}
                                showStatus={false}
                                className="carousel-container"
                                selectedItem={carouselIndex}
                                onChange={handleCarouselChange}
                                onClickItem={handleCarouselClick}
                            >
                                {selectedProject.images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Slide ${index}`} />
                                    </div>
                                ))}
                            </Carousel>
                        )}
                        <button className="close-button" onClick={() => setSelectedProject(null)}>X</button>
                    </div>
                    <p className="project-description-mobile">{selectedProject.description}</p>
                </div>
            )}
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
            <div className="circle circle-6"></div>
            <div className="circle circle-7"></div>
            <div className="circle circle-8"></div>
            <div className="circle circle-9"></div>
            <div className="circle circle-10"></div>
            <svg width="0" height="0">
                <clipPath id="cloud-shape" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0.1 C0.7,0.1,0.8,0.2,0.9,0.3 C1,0.4,1,0.5,1,0.6 C1,0.7,0.9,0.8,0.8,0.9 C0.7,1,0.5,1,0.3,0.9 C0.1,0.8,0,0.7,0,0.6 C0,0.5,0,0.4,0.1,0.3 C0.2,0.2,0.3,0.1,0.5,0.1 Z" />
                </clipPath>
            </svg>
        </div>
    );
};

export default Projects;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Projects.scss';
import image0 from '../../../src/assets/images/pawvage-images/Page-0.jpg';
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
import image16 from '../../../src/assets/images/pawvage-images/Page-16.png';
import image17 from '../../../src/assets/images/pawvage-images/Page-17.png';

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
import githubLogo from '../../assets/images/github-logo.png'

const projects = [
    {
        name: "PawVoyage",
        role: "Full Stack Developer",
        organization: "BrainStation",
        description: "Developing a React Native/Node.js/Express/MongoDB mobile application designed to assist pet owners in traveling internationally with their pets by providing a seamless, step-by-step application process for pet visas. Creating a user-friendly interface that guides users through submitting the necessary documentation to relevant departments in the origin and destination countries, ensuring approval without any hassle. Implementing a backend API to simulate form submissions to government agencies and ensure data persistence. Enhancing the app to support all animals that can travel in future updates, not just dogs. Acquired proficiency in React Native within two weeks to effectively develop this application.",
        images: [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17],
        URL: "https://github.com/RuthBhatti/PawVage"
    },
    {
        name: "Titans",
        role: "Front End Engineer",
        organization: "Google x BrainStation",
        description: "Worked with a cross-functional team to design educational components in Google Drive and Google Slides, enhancing user comprehension of the Gemini AI model. Led the creation of user-friendly features, such as an optional Gemini search button and informative pop-ups, to build user trust and transparency. Honorable Mention at BrainStation x Google Industry Project!",
        images: [titansImage1, titansImage2, titansImage3, titansImage4, titansImage5, titansImage6, titansImage7, titansImage8, titansImage9, titansImage10],
        URL: "https://github.com/RuthBhatti/Titans"
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
                            <Link to="#" onClick={(e) => { e.preventDefault(); window.open(selectedProject.URL, '_blank', 'noopener,noreferrer'); }}>
                                <img src={githubLogo} alt="GitHub Repository" style={{ width: '49px', height: '49px' }} />
                            </Link>
                        </div>
                        {/* <div className='Carousel-1'> */}
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
                            {/* </div> */}
                        <button className="close-button" onClick={() => setSelectedProject(null)}>X</button>
                    </div>
                    <p>{selectedProject.description}</p>
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
import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="background-circles">
                <div className="shape circle1"></div>
                <div className="shape circle2"></div>
                <div className="shape circle3"></div>
                <div className="shape circle4"></div>
                <div className="shape circle5"></div>
                <div className="shape circle6"></div>
                <div className="shape circle7"></div>
                <div className="shape circle8"></div>
                <div className="shape design1"></div>
                <div className="shape design2"></div>
                <div className="shape design3"></div>
                <div className="shape design4"></div>
                <div className="shape design5"></div>
            </div>
            <div className="content">
                <h1>Hey, I'm Ruth Bhatti</h1>
                <p>I'm a software engineer and project manager.</p>
                <p>
                    <a className='projects' href="main--ruthbhatti.netlify.app/projects">see my projects</a> → <a href="main--ruthbhatti.netlify.app/about">more about me</a>
                </p>
            </div>
        </div>
    );
};

export default Home;
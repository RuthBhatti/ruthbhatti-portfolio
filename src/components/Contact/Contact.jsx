import React from 'react';
import './Contact.scss';
import linkedin from '../../../src/assets/incons/linkedin.png';
import phone from '../../../src/assets/incons/phone.png';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                {/* <h1>CONTACT</h1> */}
                <h1>Contact</h1>
                <div className="contact-line"></div>
            </div>
            <div className="contact-details">
                <div className="contact-item">
                    <h2>Mail</h2>
                    <a href="mailto:ruthbhatti55@gmail.com">ruthbhatti55@gmail.com</a>
                </div>
                <div className="contact-item">
                    <h2>Social Medias</h2>
                    <div className="contact-links">
                        <a href="https://www.linkedin.com/in/ruth-bhatti/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <a href="tel:+15169264077">
                            <img src={phone} alt="Phone" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
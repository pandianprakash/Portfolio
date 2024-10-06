import React from 'react';
import '../Home/Home.css'; 
import Image from '../Image/profile-pic (2).png';

const Home = () => {
    const whatsappNumber = '+917826889248'; 
    const email = 'pandianprakash317@gmail.com'; 
    const subject = encodeURIComponent('Hello from My Website');
    const body = encodeURIComponent('Hi, I would like to discuss...');
    const linkedInProfile = 'https://www.linkedin.com/in/muthupandi-m31077';
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h2>MUTHU PANDI</h2>
                <h3>And I'm <span>Full Stack Developer</span></h3>
                <div className="social-media">
                <a href={`https://wa.me/${whatsappNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Chat with me on WhatsApp">
                    <i className="bx bxl-whatsapp"></i></a>
                    <a 
                      href={`mailto:${email}?subject=${subject}&body=${body}`}
                      aria-label="Send me an email">
                    <i className="bx bxl-gmail"></i></a>
                    <a href="#"><i className="bx bxl-github"></i></a>
                    <a 
                      href={linkedInProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with me on LinkedIn"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <a href="/cv.pdf" className="btn" download>
                    Download CV
                </a>
            </div>
            <div className="profile">
                <img src={Image} alt="Profile Picture" width="350" />           
            </div>
        </section>
    );
};

export default Home;

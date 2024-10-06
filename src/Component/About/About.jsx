import React from 'react';
import './About.css'; // Create this file for About-specific styles
import Image from '../Image/1721457681097-removebg-preview.png';

function About(){
    return(
        <div>
             <section class="about" id="about">
    <div class="about-img">
    <img src={Image} alt="Profile Picture" />           
     
    </div>
    <div class="about-content">
      <h2 class="heading">About <span>Me</span></h2>
      <h3>Full Stack Developer</h3>
      <p>
        To Pursue a Career in The Field of Full-Stack Development by Being a
        Part of Progressive Organization Where I Can Work Towards the Growth
        of the Organization and Harness the Best of My Career.
      </p>
      <a href="#" class="btn">Read More</a>
    </div>
  </section>
        </div>
    )
}



export default About;

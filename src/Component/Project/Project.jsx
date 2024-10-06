import React from 'react';
import './Project.css'; 

const Project = () => {
    return (
<section class="project" id="project">
    <h2 class="heading">Our <span>Projects</span></h2>
    <div class="project-container">

      <div class="project-box">
        <i class="bx bx-food-menu"></i>
        <h3>Organic Delights Website Using HTML And CSS</h3>
        <p>
        Explore our wide range of healthy and delicious organic snacks, 
          crafted with care to ensure the highest quality and flavor.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>

      <div class="project-box">
      <i class='bx bxs-business'></i>
        <h3>Start-Up Business Website Using HTML And CSS</h3>
        <p>
        The Smart Business website now features an enhanced Contact Page, 
        streamlined Login Page, and comprehensive Business Loans section.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>

      <div class="project-box">
      <i class='bx bx-user'></i>
        <h3>Personal Portfolio Website </h3>
        <p>
        This personal portfolio showcases my skills, projects, and achievements in [Full Stack Development]. 
        Explore my work and experience to see how I can contribute to your needs.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>

      <div class="project-box">
      <i class='bx bxs-dashboard'></i>
        <h3>E-Commerace Website Admin Panel</h3>
        <p>
        Developed a jewelry e-commerce website with a robust admin 
        panel for efficient management of inventory, orders, and user accounts.
        </p>
        <a href="#" class="btn">Read More</a>
      </div>
    </div>
  </section>
    );
};

export default Project;

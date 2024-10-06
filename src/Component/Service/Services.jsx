import React from 'react';
import './Service.css'; 
import 'boxicons/css/boxicons.min.css';
const Services = () => {
    return (    
        <section class="services" id="services">
    <div class="container">
      <h1 class="sub-title">My <span>Skills</span></h1>
      <div class="services-list">
        <div>
          <i class="bx bxl-html5" ></i>
          <h2>HTML</h2>
          <p>
            HTML is Used to Create a Structure and Layout of Web pages and
            Web Applications using a system of tags and attributes.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>

        <div>
          <i class="bx bxl-css3"></i>
          <h2>CSS</h2>
          <p>
            CSS is a language used to style HTML elements, their appearance
            and layout on web pages.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>

        <div>
          <i class="bx bxl-javascript"></i>
          <h2>JavaScript</h2>
          <p>
            JavaScript is a programming language used primarily for creating
            interactive effects within web browsers.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>

        <div>
          <i class="bx bxl-react" ></i>
          <h2>React</h2>
          <p>
            React is a JavaScript library for building user interfaces,
            component-based architecture through a virtual DOM.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>

        <div>
          <i class="bx bxl-nodejs" ></i>
          <h2>Node.js</h2>
          <p>
            Node.js is a runtime environment that enables server-side
            execution of JavaScript.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>
        <div>
        <i class='bx bxl-mongodb'></i>
          <h2>MongoDB</h2>
          <p>
          MongoDB is a NoSQL database that stores data in flexible, 
          JSON-like documents rather than in rows and columns.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>

        <div>
        <i class='bx bxl-tailwind-css'></i>
          <h2>TailwindCss</h2>
          <p>
          Tailwind CSS is a utility-first CSS framework that provides low-level 
          utility classes for building custom designs directly in your HTML.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>

        <div>
        <i class='bx bxl-bootstrap'></i>
          <h2>Bootstrap</h2>
          <p>
          Bootstrap is a popular front-end framework that provides pre-designed
          components and responsive grid systems to streamline web development.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>
        
        <div>
          <i class="bx bxl-github"></i>
          <h2>GitHub</h2>
          <p>
            GitHub is a web platform for hosting code repositories
            using Git, enabling collaborative software development.
          </p>
          <a href="#" class="read">Learn More</a>
        </div>
      </div>
    </div>
  </section>
    )
};

export default Services;

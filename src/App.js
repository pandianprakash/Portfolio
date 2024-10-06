import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Project from './Component/Project/Project';
import Services from './Component/Service/Services';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Services />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

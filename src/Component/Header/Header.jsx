import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Header.css"

function App() {
var navicate = useNavigate();
  return (
    <div>
        <header class="header">
    <a href="#" class="logo">Portfolio</a>
    <nav class="navbar">
      <a onClick={() => navicate("/Home")}>Home</a>
      <a onClick={() => navicate("/About")}>About</a>
      <a onClick={() => navicate("/Skills")}>Skills</a>
      <a onClick={() => navicate("/Project")}>Projects</a>
      <a onClick={() => navicate("/Contact")}>Contact</a>
    </nav>   
  </header>
    </div>
  );
}

export default App;

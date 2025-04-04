import './App.css';
import React from 'react';
import Projects from './Projects.js';
import Certificates from './Certificates.js';
import Navbar from './Navbar.js';
import Footbar from './Footbar.js';
import MainText from './MainText.js';

function App() {
  return (
    <div>
      <Navbar />
      <MainText/>
      <main>
        <Projects />
        <Certificates />
      </main>
      <Footbar />
    </div>
  );
}

export default App;

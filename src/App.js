import React from 'react';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Maincontaint/Home/Home';
import About from './Components/Maincontaint/About/About';
import Projects from './Components/Maincontaint/Projects/Projects';
import Certificates from './Components/Maincontaint/Certificates/Certificates';
import Skills from './Components/Maincontaint/Skills/Skills';

import { HashRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
      <div className='n-stick'><Navbar/></div>
      <div className='body-s'>

        <Routes>
       
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/certificates" element={<Certificates/>} />
   
          
        </Routes>

      </div>
      <div className='f-stick'><Footer/></div>
      </HashRouter>

    </div>
  );
}

export default App;



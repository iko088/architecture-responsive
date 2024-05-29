import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import MainHome from './components/MainHome';
import Footer from './components/Footer';
import Gallery from './Gallery';
import OurProjects from './components/OurProjects';
import OurProject1 from './components/OurProjects/OurProject1';
import Certification from './components/Certification';
import Contact from './components/Contact';

function App() {

  return (
    <>
     <Router>
      <div className="container mx-auto px-5 ">
       <div className='overflow-hidden'>
       <Navbar />
        <Routes>
        <Route path="/" element={<MainHome/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/projects" element={<OurProjects/>} />
        <Route path="/ourproject1" element={<OurProject1/>} />
        <Route path="/certifications" element={<Certification/>} />
        <Route path='/contacts' element={<Contact/>} />
        </Routes>
       </div>
      </div>
        <Footer/>
    </Router>
    </>
  )
}

export default App

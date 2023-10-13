import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero';
import Diiscription from './components/sections/Diiscription';
import About from './components/sections/About';
import Testimonial from './components/sections/Testimonial';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Diiscription />
      <About />
      <Testimonial />


        <Routes>
            <Route path='/#' element={<Hero />} />
            <Route path='/#disc' element={<Diiscription />} />
            <Route path='/#about' element={<About />} />
            <Route path='/#testi' element={<Testimonial />} />
        </Routes>

      
    </div>
  );
}

export default App;

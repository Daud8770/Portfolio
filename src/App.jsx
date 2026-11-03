
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import { useEffect, useState } from 'react'

function App() {
 const [isScrolled,setIscrolled]=useState(false);
useEffect(() => {

  const handleScroll = () => {
    setIscrolled(window.scrollY > 10);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

   



  return (
   <div>
       <NavBar isScrolled={isScrolled}/>
       <Hero/>
       <Projects/>
       <About/>
       <Skills/>
       <Contact/>
       <Footer/>
   </div>
  )
}

export default App

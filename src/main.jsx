import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hardware from './components/Hardware'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

 function App(){
  return(
    <>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Hardware />
    <About />
    <Contact />
    <Footer />
    </>
  )
 }
createRoot(document.getElementById('root')).render(
  <App />
)

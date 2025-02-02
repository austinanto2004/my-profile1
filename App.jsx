import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/services'
import Contact from './components/Contact'
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Analytics />
      

      
    </div>
  )
}

export default App;

 
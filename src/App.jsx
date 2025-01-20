import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeButton from './components/ResumeButton'
import PageTransition from './components/PageTransition'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <PageTransition key="main">
            <div className="portfolio">
              <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              <ResumeButton />
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </div>
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/Navbar.css'

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ]

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <motion.div 
        className="logo"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 200
        }}
      >
        <span className="logo-bracket">[</span>
        <span className="logo-text">
          <span className="element-symbol">Ak</span>
          <span className="atomic-number">13</span>
        </span>
        <span className="logo-bracket">]</span>
      </motion.div>

      <AnimatePresence>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a 
              key={item.name}
              href={item.link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.1 * (index + 1),
                type: "spring",
                stiffness: 200 
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </AnimatePresence>

      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar 
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaPhoneAlt } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const phoneNumber = "+91 8838977710" // Replace with your actual phone number

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`
  }

  const iconVariants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <footer className="footer" id="contact">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="footer-content">
        <motion.div 
          className="footer-text"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Let's Connect</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>
        
        <div className="social-links">
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="mailto:arunkumarveerapandian4@gmail.com"
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <FaEnvelope />
          </motion.a>
          <motion.div
            className="phone-container"
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
          >
            <motion.button
              className="phone-btn"
              onClick={handleCallClick}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaPhoneAlt />
            </motion.button>
            <AnimatePresence>
              {showTooltip && (
                <motion.span
                  className="phone-tooltip"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {phoneNumber}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ArunKumar. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 
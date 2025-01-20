import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'
import profileImage from '../assets/myphoto.jpg'
import '../styles/Hero.css'
import { useParallax } from '../hooks/useParallax'

const Hero = () => {
  const y = useParallax(100)

  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    })
  }

  const name = "ARUNKUMAR"

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  return (
    <motion.section className="hero" id="home">
      <ParticleBackground />
      <motion.div 
        className="hero-content"
        style={{ y }}
      >
        <div className="profile-image-container">
          <motion.div 
            className="profile-image-wrapper"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1
            }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src={profileImage} 
              alt="Arun Kumar" 
              className="profile-image"
              loading="eager"
            />
          </motion.div>
        </div>

        <motion.h1 className="hero-title">
          <motion.span className="greeting">Hi, I'm</motion.span>
          <div className="name-wrapper">
            {name.split('').map((letter, index) => (
              <motion.span
                key={index}
                className="animated-letter"
                custom={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  y: -20,
                  color: '#64ffda',
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.div 
          className="cta-buttons"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects"
            className="cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact"
            className="cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero 
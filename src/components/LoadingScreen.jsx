import React from 'react'
import { motion } from 'framer-motion'
import '../styles/LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <span className="loading-bracket">[</span>
          <span className="loading-text">
            <span className="element-symbol">Ak</span>
            <span className="atomic-number">13</span>
          </span>
          <span className="loading-bracket">]</span>
        </motion.div>
        
        <motion.div className="loading-progress">
          <motion.div
            className="loading-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen 
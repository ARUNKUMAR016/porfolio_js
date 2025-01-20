import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFileAlt, FaDownload, FaEye } from 'react-icons/fa'
import ResumeModal from './ResumeModal'
import '../styles/ResumeButton.css'

const ResumeButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const buttonVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      x: 10,
      boxShadow: "0 0 20px rgba(100, 255, 218, 0.4)",
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <motion.div
        className="floating-resume-container"
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={buttonVariants}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.button
          className="floating-resume-btn"
          onClick={() => setIsModalOpen(true)}
        >
          <motion.div
            className="icon-container"
            variants={iconVariants}
          >
            <FaFileAlt />
          </motion.div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="button-content"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="resume-label">View Resume</span>
                <div className="action-icons">
                  <FaEye className="action-icon" />
                  <FaDownload className="action-icon" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default ResumeButton 
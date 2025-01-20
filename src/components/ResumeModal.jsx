import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaTimes, FaExternalLinkAlt, FaSpinner } from 'react-icons/fa'
import '../styles/ResumeModal.css'

const ResumeModal = ({ isOpen, onClose }) => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const resumePath = '/assets/AK_RESUME.pdf'

  const handleDownload = () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Create an anchor element
      const link = document.createElement('a')
      link.href = resumePath
      link.download = 'AK_RESUME.pdf'
      link.target = '_blank'
      
      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      onClose()
    } catch (err) {
      setError('Unable to download resume. Please try again later.')
      console.error('Download error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePreview = () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // Simply open in new tab
      window.open(resumePath, '_blank')
      onClose()
    } catch (err) {
      setError('Unable to preview resume. Please try again later.')
      console.error('Preview error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              className="close-btn"
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Resume</h3>
              <p>View or download my professional resume</p>
              {error && (
                <motion.p 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.p>
              )}
              <div className="modal-actions">
                <motion.button
                  className="action-btn preview"
                  onClick={handlePreview}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <FaSpinner className="spinner" />
                  ) : (
                    <>Preview <FaExternalLinkAlt /></>
                  )}
                </motion.button>
                <motion.button
                  className="action-btn download"
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <FaSpinner className="spinner" />
                  ) : (
                    <>Download <FaDownload /></>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ResumeModal 
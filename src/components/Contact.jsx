import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Contact.css'

const Contact = () => {
  const [ref, controls] = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.section
      ref={ref}
      className="contact"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
      <motion.p variants={itemVariants} className="contact-intro">
        Have a question or want to work together? Leave me a message!
      </motion.p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        variants={containerVariants}
      >
        <motion.div className="form-group" variants={itemVariants}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div className="form-group" variants={itemVariants}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </motion.div>

        <motion.button
          type="submit"
          className="submit-btn"
          variants={itemVariants}
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message <FaPaperPlane />
            </>
          )}
        </motion.button>

        {submitStatus && (
          <motion.div
            className={`submit-status ${submitStatus}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {submitStatus === 'success' 
              ? 'Message sent successfully!' 
              : 'Failed to send message. Please try again.'}
          </motion.div>
        )}
      </motion.form>
    </motion.section>
  )
}

export default Contact 
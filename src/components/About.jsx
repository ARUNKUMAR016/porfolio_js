import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/About.css'

const About = () => {
  const [ref, controls] = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const experiences = [
    {
      title: "Associate Software Developer",
      company: "ELSADDAI IT Solutions",
      period: "2022 - Present",
      description: "Working on full-stack development using modern technologies.",
      icon: <FaBriefcase />
    },
    {
      title: "Bsc. Mathematics",
      company: "THE AMERICAN COLLEGE",
      period: "2018 - 2021",
      description: "Graduated with First Class.",
      icon: <FaGraduationCap />
    }
  ]

  const skills = [
    "C", "C++", "C#", "SQL", "React", 
    "HTML/CSS", "Git", "Java","javascript"
  ]

  return (
    <motion.section
      ref={ref}
      className="about"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants}>
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div 
          className="about-text"
          variants={itemVariants}
        >
        <p>
           I am a passionate software developer with a strong foundation in mathematics  
          and a keen interest in building innovative solutions. My journey in technology  
          started with my degree in BSc Mathematics, where I developed analytical and problem-solving skills, and I've been growing ever since.  
      </p>
       <p>
          I specialize in full-stack development and enjoy creating responsive,  
         user-friendly applications that solve real-world problems.  
       </p>

        </motion.div>

        <motion.div 
          className="experience-section"
          variants={itemVariants}
        >
          <h3>Experience & Education</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <motion.div 
                  className="timeline-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {exp.icon}
                </motion.div>
                <div className="timeline-content">
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                  <span className="period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="skills-section"
          variants={itemVariants}
        >
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                className="skill-tag"
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(100, 255, 218, 0.2)',
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About 
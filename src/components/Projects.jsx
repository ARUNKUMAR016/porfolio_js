import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import '../styles/Projects.css'

import mkuImage from '../assets/MKU.png'

const Projects = () => {
  const [ref, controls] = useScrollAnimation()

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const projects = [
    {
      title: "Web Application",
      description: "Front End and Back End Work for University (Web Application) Supported by SQL server, Marksheet Format and enabled IIS support. ",
      technologies: ["C#", "ASP.NET", "SQL Server"],
      github: "https://github.com/ArunKumar/web-application",
      live: "https://your-webapp-url.com",
      image: mkuImage
    },
    {
      title: "Website",
      description: "Developed a website which Showcased available Courses and enrollment Featured with Admin, Student Login Page. ",
      technologies: ["html", "css", "javascript","php"],
      github: "https://github.com/ArunKumar/ecommerce",
      live: "https://new.ssicomputereducation.com/index.php",
     
    },
    {
      title: "Android App",
      description: "Developed an App for ICU Patients Easy Way Communication Using Java in Android Studio Supported by SQLite Database.",
      technologies: ["Java", "Android Studio", "SQLite"],
      github: "https://github.com/ArunKumar/task-manager",
      live: "https://your-taskapp-url.com",
     
    }
  ]

  return (
    <motion.section
      ref={ref}
      className="projects"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.h2 variants={projectVariants}>
        My Projects
      </motion.h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects 
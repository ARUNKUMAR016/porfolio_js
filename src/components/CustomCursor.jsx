import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/CustomCursor.css'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleHoverStart = () => setIsHovering(true)
    const handleHoverEnd = () => setIsHovering(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      />
    </>
  )
}

export default CustomCursor 
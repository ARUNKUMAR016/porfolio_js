import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
    rootMargin: '-50px 0px'
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return [ref, controls]
} 
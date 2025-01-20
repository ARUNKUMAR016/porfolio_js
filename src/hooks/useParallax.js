import { useTransform, useScroll } from 'framer-motion'

export const useParallax = (offset = 50) => {
  const { scrollY } = useScroll()
  return useTransform(scrollY, [0, offset], [0, -offset])
} 
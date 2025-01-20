import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const particleOptions = {
    particles: {
      color: {
        value: "#64ffda",
      },
      links: {
        color: "#64ffda",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 60,
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
    />
  )
}

export default ParticleBackground 
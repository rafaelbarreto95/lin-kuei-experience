import { useLayoutEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function PageTransitions(){

  useLayoutEffect(() => {

    const sections =
      gsap.utils.toArray(
        '.cinematic-section'
      )

    sections.forEach((section) => {

      gsap.fromTo(

        section,

        {
          opacity:0,
          y:120,
          scale:.96
        },

        {
          opacity:1,
          y:0,
          scale:1,

          duration:1.4,

          ease:'power3.out',

          scrollTrigger:{
            trigger:section,
            start:'top 85%',
            toggleActions:
            'play none none reverse'
          }

        }

      )

    })

  }, [])

  return null
}

export default PageTransitions
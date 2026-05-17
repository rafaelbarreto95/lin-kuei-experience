import { useEffect } from 'react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CinematicMode(){

  useEffect(() => {

    gsap.to('.cinematic-top', {

      height:'70px',

      scrollTrigger:{
        trigger:'body',
        start:'top top',
        end:'bottom bottom',
        scrub:1
      }

    })

    gsap.to('.cinematic-bottom', {

      height:'70px',

      scrollTrigger:{
        trigger:'body',
        start:'top top',
        end:'bottom bottom',
        scrub:1
      }

    })

    gsap.utils.toArray('.cinematic-section')
      .forEach((section) => {

        gsap.fromTo(

          section,

          {
            scale:1
          },

          {
            scale:1.03,

            ease:'none',

            scrollTrigger:{
              trigger:section,
              start:'top bottom',
              end:'bottom top',
              scrub:1
            }

          }

        )

      })

  }, [])

  return (

    <>
      <div className="cinematic-top"></div>

      <div className="cinematic-bottom"></div>
    </>

  )
}

export default CinematicMode
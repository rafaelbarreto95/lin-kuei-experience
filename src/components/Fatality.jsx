import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Fatality(){

  useLayoutEffect(() => {

    gsap.fromTo(
      '.fatality-content',
      {
        opacity:0,
        scale:.8
      },
      {
        opacity:1,
        scale:1,
        duration:1.5,

        scrollTrigger:{
          trigger:'.fatality',
          start:'top 60%',
        }
      }
    )

  }, [])

  return (

    <section
      id="fatality"
      className="fatality cinematic-section"
    >

      <video
        className="fatality-video"
        autoPlay
        muted
        loop
        playsInline
       preload="metadata"
      >

        <source
          src={`${import.meta.env.BASE_URL}videos/fatality.mp4`}
          type="video/mp4"
        />

      </video>

      <div className="fatality-overlay"></div>

      <div className="fatality-content">

        <span>
          Witness the ultimate cryomancer
          execution.
        </span>

        <h2>
          FATALITY
        </h2>

        <p>
          Flawless Victory!
        </p>

      </div>

    </section>
  )
}

export default Fatality
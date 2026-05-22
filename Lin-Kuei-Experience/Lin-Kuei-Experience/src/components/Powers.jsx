import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Powers(){

  useLayoutEffect(() => {

    gsap.fromTo(
      '.power-card',
      {
        opacity:0,
        y:100
      },
      {
        opacity:1,
        y:0,
        duration:1,
        stagger:.2,

        scrollTrigger:{
          trigger:'.powers',
          start:'top 70%',
        }
      }
    )

  }, [])

  return (

    <section  id="powers" className="powers cinematic-section">

      <h2 className="powers-title">
        CRYOMANCER ABILITIES
      </h2>

      <div className="powers-grid">

        <div className="power-card">
          <h3>ICE CLONE</h3>
        </div>

        <div className="power-card">
          <h3>FREEZE BLAST</h3>
        </div>

        <div className="power-card">
          <h3>ICE SLIDE</h3>
        </div>

        <div className="power-card">
          <h3>FATALITY</h3>
        </div>

      </div>

    </section>
  )
}

export default Powers
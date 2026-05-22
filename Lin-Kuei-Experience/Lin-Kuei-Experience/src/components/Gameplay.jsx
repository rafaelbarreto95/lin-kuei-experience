import { useLayoutEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Gameplay(){

  useLayoutEffect(() => {

    gsap.fromTo(
      '.gameplay-panel',
      {
        opacity:0,
        y:100
      },
      {
        opacity:1,
        y:0,
        duration:1.2,

        scrollTrigger:{
          trigger:'.gameplay',
          start:'top 70%'
        }
      }
    )

  }, [])

  return (

    <section id="gameplay" className="gameplay cinematic-section">

      <div className="gameplay-header">

        <span>
          COMBAT SYSTEM
        </span>

        <h2>
          CRYOMANCER GAMEPLAY
        </h2>

      </div>

      <div className="gameplay-panel">

        <div className="gameplay-video">

          <img
            src={`${import.meta.env.BASE_URL}images/gameplay.jpg`}
            alt="Gameplay"
          />

          <div className="scanlines"></div>

        </div>

        <div className="gameplay-ui">

          <div className="ui-card">

            <h3>ICE POWER</h3>

            <div className="bar">
              <div
                className="fill"
                style={{width:'95%'}}
              />
            </div>

          </div>

          <div className="ui-card">

            <h3>SPEED</h3>

            <div className="bar">
              <div
                className="fill"
                style={{width:'82%'}}
              />
            </div>

          </div>

          <div className="ui-card">

            <h3>FATALITY</h3>

            <div className="bar">
              <div
                className="fill"
                style={{width:'100%'}}
              />
            </div>

          </div>

          <div className="ui-card">

            <h3>RESISTENCE</h3>

            <div className="bar">
              <div
                className="fill"
                style={{width:'90%'}}
              />
            </div>

          </div>

<div className="ui-card">

            <h3>STEALTH</h3>

            <div className="bar">
              <div
                className="fill"
                style={{width:'84%'}}
              />
            </div>

          </div>


        </div>

      </div>

    </section>
  )
}

export default Gameplay
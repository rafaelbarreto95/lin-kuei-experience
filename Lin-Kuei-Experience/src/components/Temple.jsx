import { useLayoutEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Temple(){

  useLayoutEffect(() => {

    gsap.fromTo(
      '.temple-content',
      {
        opacity:0,
        y:100
      },
      {
        opacity:1,
        y:0,
        duration:1.4,

        scrollTrigger:{
          trigger:'.temple',
          start:'top 70%',
        }
      }
    )

  }, [])

  return (

    <section
      id="temple"
      className="temple cinematic-section"
    >

      <div className="temple-overlay"></div>

      <img
        src="/images/temple.jpg"
        alt="Lin Kuei Temple"
        className="temple-bg"
      />

      <div className="temple-content">

        <span>
          LIN KUEI STRONGHOLD
        </span>

        <h2>
          THE FROZEN TEMPLE
        </h2>

        <p>
          Hidden deep within the frozen
          mountains, the Lin Kuei Temple
          stands as the birthplace of the
          deadliest cryomancers in history.
          Ancient rituals, brutal discipline
          and absolute loyalty forged warriors
          feared across every realm.
        </p>

        <div className="temple-stats">

          <div className="temple-card">
            <h3>Clan</h3>
            <p>Lin Kuei</p>
          </div>

          <div className="temple-card">
            <h3>Grandmaster</h3>
            <p>Kuai Liang</p>
          </div>

          <div className="temple-card">
            <h3>Realm</h3>
            <p>Earthrealm</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Temple
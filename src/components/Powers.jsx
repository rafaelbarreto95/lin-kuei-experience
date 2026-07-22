import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaSnowflake, FaBolt, FaWind, FaSkullCrossbones } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const powers = [

  {
    title: 'ICE CLONE',
    description: 'Summons a frozen duplicate that traps enemies in place, opening them up for a follow-up strike.',
    icon: <FaSnowflake />
  },

  {
    title: 'FREEZE BLAST',
    description: 'Fires a wave of absolute zero across the arena, shattering the opponent\u2019s guard on impact.',
    icon: <FaBolt />
  },

  {
    title: 'ICE SLIDE',
    description: 'A low, frost-trailing slide that closes the distance instantly and sweeps the enemy off their feet.',
    icon: <FaWind />
  },

  {
    title: 'FATALITY',
    description: 'The Lin Kuei show no mercy. A spine-freezing execution that ends the fight for good.',
    icon: <FaSkullCrossbones />,
    danger: true
  }

]

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

        {powers.map((power) => (

          <div
            key={power.title}
            className={
              power.danger
                ? 'power-card power-card--danger'
                : 'power-card'
            }
          >

            <div className="power-icon">
              {power.icon}
            </div>

            <h3>{power.title}</h3>

            <p>{power.description}</p>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Powers

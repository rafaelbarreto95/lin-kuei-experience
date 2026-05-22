import { useEffect, useRef } from 'react'

import gsap from 'gsap'

function Hero() {

  const heroRef = useRef(null)

  useEffect(() => {

    const hero = heroRef.current

    const image =
      hero.querySelector('.subzero-image')

    const title =
      hero.querySelector('.hero-title')

    const description =
      hero.querySelector('.hero-description')

    const glow =
      hero.querySelector('.hero-glow')

    // INTRO

    gsap.fromTo(
      '.hero-animate',
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: .2
      }
    )

    // PARALLAX

    const handleMove = (e) => {

      const x =
        (window.innerWidth / 2 - e.clientX)
        / 25

      const y =
        (window.innerHeight / 2 - e.clientY)
        / 25

      gsap.to(image, {
        x: -x,
        y: -y,
        duration: 1
      })

      gsap.to(title, {
        x: x * 0.5,
        y: y * 0.5,
        duration: 1
      })

      gsap.to(description, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 1
      })

      gsap.to(glow, {
        x: x * 1.2,
        y: y * 1.2,
        duration: 1.5
      })

    }

    window.addEventListener(
      'mousemove',
      handleMove
    )

    return () => {

      window.removeEventListener(
        'mousemove',
        handleMove
      )

    }

  }, [])

  return (

    <section
      ref={heroRef}
      id="home"
      className="hero cinematic-section"
    >

      <div className="hero-glow"></div>

      <div className="content">

        <span
          className="
          subtitle
          hero-animate
          "
        >
          LIN KUEI WARRIOR
        </span>

        <h1
          className="
          hero-title
          hero-animate
          "
        >
          SUB-ZERO
        </h1>

        <p
          className="
          hero-description
          hero-animate
          "
        >
          Master of cryomancy and guardian
          of the Lin Kuei temple.
          A legendary warrior capable of
          freezing enemies with absolute zero.
        </p>

        <div
          className="
          buttons
          hero-animate
          "
        >

          <button>
            ENTER THE ICE TEMPLE
          </button>

          <button>
            WATCH FATALITY
          </button>

        </div>

      </div>

      <img
        src={`${import.meta.env.BASE_URL}images/subzero.png`}
        alt="Sub-Zero"
        className="
        subzero-image
        hero-animate
        "
      />

    </section>
  )
}

export default Hero
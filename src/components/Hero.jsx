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

    // PARALLAX (skip on touch devices — there's no mousemove there anyway,
    // and it avoids doing pointless setup work on mobile)

    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches

    if(isTouchDevice){
      return
    }

    // quickTo reuses a single tween per target instead of creating a new
    // gsap.to() tween on every mousemove event (which fires dozens of
    // times per second)
    const moveImage = gsap.quickTo(image, 'x', { duration: 1 })
    const moveImageY = gsap.quickTo(image, 'y', { duration: 1 })

    const moveTitle = gsap.quickTo(title, 'x', { duration: 1 })
    const moveTitleY = gsap.quickTo(title, 'y', { duration: 1 })

    const moveDescription = gsap.quickTo(description, 'x', { duration: 1 })
    const moveDescriptionY = gsap.quickTo(description, 'y', { duration: 1 })

    const moveGlow = gsap.quickTo(glow, 'x', { duration: 1.5 })
    const moveGlowY = gsap.quickTo(glow, 'y', { duration: 1.5 })

    const handleMove = (e) => {

      const x =
        (window.innerWidth / 2 - e.clientX)
        / 25

      const y =
        (window.innerHeight / 2 - e.clientY)
        / 25

      moveImage(-x)
      moveImageY(-y)

      moveTitle(x * 0.5)
      moveTitleY(y * 0.5)

      moveDescription(x * 0.3)
      moveDescriptionY(y * 0.3)

      moveGlow(x * 1.2)
      moveGlowY(y * 1.2)

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
        src={`${import.meta.env.BASE_URL}images/subzero.webp`}
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
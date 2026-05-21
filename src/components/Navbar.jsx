import { useEffect, useState } from 'react'

function Navbar() {

  const [active, setActive] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setActive(true)
      } else {
        setActive(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }

  }, [])

  return (

    <header
      className={
        active
          ? 'navbar active'
          : 'navbar'
      }
    >

      <div className="logo">
        SUB-ZERO
      </div>

      <nav>

        <a href="#home">
          Home
        </a>

        <a href="#character">
          Character Selection
        </a>

        <a href="#powers">
          Powers
        </a>

        <a href="#gameplay">
          Skills
        </a>

        <a href="#story">
          Story
        </a>

        <a href="#temple">
          Temple
        </a>

        <a href="#fatality">
          Fatality
        </a>

        <a href="#footer">
          Footer
        </a>

      </nav>

    </header>
  )
}

export default Navbar
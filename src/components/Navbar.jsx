import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#character', label: 'Character Selection' },
  { href: '#powers', label: 'Powers' },
  { href: '#gameplay', label: 'Skills' },
  { href: '#story', label: 'Story' },
  { href: '#temple', label: 'Temple' },
  { href: '#fatality', label: 'Fatality' },
  { href: '#footer', label: 'Footer' },
]

function Navbar() {

  const [active, setActive] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  // Lock body scroll while the fullscreen mobile menu is open
  useEffect(() => {

    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }

  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

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

        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}

      </nav>

      <button
        type="button"
        className="menu-button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={
          menuOpen
            ? 'fullscreen-menu active'
            : 'fullscreen-menu'
        }
      >

        <nav className="fullscreen-nav">

          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

        </nav>

      </div>

    </header>
  )
}

export default Navbar

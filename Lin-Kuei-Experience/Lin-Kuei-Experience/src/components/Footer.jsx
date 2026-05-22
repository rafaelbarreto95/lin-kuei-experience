import {

  FaGithub,
  FaLinkedin

} from 'react-icons/fa'

import { GiDragonHead } from 'react-icons/gi'

function Footer(){

  return (

    <footer id= "footer"className="footer">

      {/* BACKGROUND FX */}

      <div className="footer-grid"></div>

      <div className="footer-glow"></div>

      <div className="footer-particles"></div>

      {/* CONTENT */}

      <div className="footer-content">

        {/* LOGO */}

        <div className="footer-logo">

          <GiDragonHead />

        </div>

        <span className="footer-subtitle">
          LIN KUEI DATABASE
        </span>

        <h2>
          JOIN THE LIN KUEI
        </h2>

        <p>
          Enter the frozen realm of Sub-Zero
          and experience a cinematic portfolio
          inspired by the Mortal Kombat universe.
        </p>

        {/* TERMINAL */}

        <div className="footer-terminal">

          <span>
            INITIALIZING LIN KUEI SYSTEM...
          </span>

          <span>
            CRYOMANCER STATUS: ACTIVE
          </span>

          <span>
            ACCESS GRANTED...
          </span>

        </div>

        {/* SOCIALS */}

        <div className="footer-socials">

          <a
            href="https://github.com/rafaelbarreto95"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-barreto-silva/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

        </div>

        <span className="footer-copy">
          Developed by Rafael Barreto © 2026
        </span>

      </div>

    </footer>
  )
}

export default Footer
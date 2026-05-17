import CinematicBackground
  from './components/CinematicBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Snow from './components/Snow.jsx'
import Powers from './components/Powers.jsx'
import FrostParticles from './components/FrostParticles.jsx'
import Temple from './components/Temple.jsx'
import StoryMode from './components/StoryMode.jsx'
import FrostOverlay from './components/FrostOverlay.jsx'
import Fatality from './components/Fatality.jsx'
import Gameplay from './components/Gameplay.jsx'
import CharacterSelect from './components/CharacterSelect.jsx'
import PageTransitions from './components/PageTransitions.jsx'
import CinematicMode from './components/CinematicMode'
import Footer from './components/Footer.jsx'
import FinishHim from './components/FinishHim.jsx'


function App() {
  return (
    <>
      <CinematicBackground />

      <PageTransitions />


      <FrostParticles />
      <FrostOverlay />



      <Snow />
      <CinematicMode />

      <Navbar />

      <Hero />
      <CharacterSelect />
      
      <Powers />
      <Gameplay />
      <StoryMode />
      <Temple />
      <Fatality />
      <Footer />


      <>

  <section className="finish-wrapper">
    <FinishHim />
  </section>
</>

    </>
  )
}

export default App
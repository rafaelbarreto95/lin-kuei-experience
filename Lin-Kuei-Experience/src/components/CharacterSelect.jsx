import { useState } from 'react'

const skins = [

  {
    name:'CLASSIC',
    image:'/images/subzero-classic.png'
  },

  {
    name:'MKX',
    image:'/images/subzero-mkx.png'
  },

  {
    name:'MK11',
    image:'/images/subzero-mk11.png'
  }

]

function CharacterSelect(){

  const [selected, setSelected] =
    useState(skins[0])

  return (

    <section
      id="character"
      className="character cinematic-section"
    >

      <div className="character-left">

        <span>
          CHARACTER SELECT
        </span>

        <h2>
          SUB-ZERO
        </h2>

        <p>
          Grandmaster of the Lin Kuei clan
          and master of cryomancy.
          One of the most feared warriors
          across every realm.
        </p>

        <div className="character-stats">

          <div className="stat">
            <h3>ATTACK</h3>
            <div className="bar">
              <div
                className="fill"
                style={{width:'92%'}}
              />
            </div>
          </div>

          <div className="stat">
            <h3>DEFENSE</h3>
            <div className="bar">
              <div
                className="fill"
                style={{width:'98%'}}
              />
            </div>
          </div>

          <div className="stat">
            <h3>CRYOMANCY</h3>
            <div className="bar">
              <div
                className="fill"
                style={{width:'100%'}}
              />
            </div>
          </div>

        </div>

      </div>

      <div className="character-center">

        <img
          src={selected.image}
          alt={selected.name}
          className="selected-character"
        />

      </div>

      <div className="character-right">

        <h3>
          SELECT SKIN
        </h3>

        <div className="skin-list">

          {skins.map((skin) => (

            <button
              key={skin.name}
              className={`skin-button ${
                selected.name === skin.name
                ? 'active'
                : ''
              }`}
              onClick={() => setSelected(skin)}
            >

              {skin.name}

            </button>

          ))}

        </div>

      </div>

    </section>
  )
}

export default CharacterSelect
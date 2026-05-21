import { useLayoutEffect } from 'react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function StoryMode(){

  useLayoutEffect(() => {

    gsap.utils.toArray('.chapter')
      .forEach((chapter) => {

        gsap.fromTo(

          chapter,

          {
            opacity:0,
            y:120
          },

          {
            opacity:1,
            y:0,
            duration:1.4,
            ease:'power4.out',

            scrollTrigger:{
              trigger:chapter,
              start:'top 75%'
            }

          }

        )

      })

  }, [])

  return (

    <section
      id="story"
      className="story-mode cinematic-section"
    >

      <div className="story-top">

        <span>
          CINEMATIC STORY MODE
        </span>

        <h2>
          THE LEGACY OF SUB-ZERO
        </h2>

        <p>
          A warrior forged by pain,
          honor and absolute zero.
        </p>

      </div>

      <div className="chapters">

        {/* CHAPTER 1 */}

        <div className="chapter">

          <div className="chapter-image">

            <img src={`${import.meta.env.BASE_URL}images/chapter1.jpg`} />

          </div>

          <div className="chapter-content">

            <span>
              CHAPTER I
            </span>

            <h3>
              BORN IN SHADOWS
            </h3>

            <p>
              Raised inside the hidden
              temples of the Lin Kuei,
              Kuai Liang was trained from
              childhood to become a perfect
              assassin.

              Discipline, silence and pain
              shaped every step of his journey.
            </p>

            <blockquote>
              "The Lin Kuei do not fear death."
            </blockquote>

          </div>

        </div>

        {/* CHAPTER 2 */}

        <div className="chapter reverse">

          <div className="chapter-image">

            <img src={`${import.meta.env.BASE_URL}images/chapter2.jpg`} />

          </div>

          <div className="chapter-content">

            <span>
              CHAPTER II
            </span>

            <h3>
              THE CRYOMANCER
            </h3>

            <p>
              Mastering the forbidden
              cryomancer abilities,
              Sub-Zero became one of the
              deadliest warriors across
              all realms.

              His ice could freeze armies,
              weapons and even souls.
            </p>

            <blockquote>
              "Feel the chill of true power."
            </blockquote>

          </div>

        </div>

        {/* CHAPTER 3 */}

        <div className="chapter">

          <div className="chapter-image">

            <img src={`${import.meta.env.BASE_URL}images/chapter3.jpg`} />

          </div>

          <div className="chapter-content">

            <span>
              CHAPTER III
            </span>

            <h3>
              SCORPION'S RIVAL
            </h3>

            <p>
              The rivalry between Sub-Zero
              and Scorpion became legendary.

              Revenge, betrayal and bloodshed
              pushed both warriors beyond
              human limits.
            </p>

            <blockquote>
              "Our battle will never end."
            </blockquote>

          </div>

        </div>

        {/* CHAPTER 4 */}

        <div className="chapter reverse">

          <div className="chapter-image">

            <img src={`${import.meta.env.BASE_URL}images/chapter4.jpg`} />

          </div>

          <div className="chapter-content">

            <span>
              CHAPTER IV
            </span>

            <h3>
              GRANDMASTER
            </h3>

            <p>
              After years of war,
              Kuai Liang rebuilt the Lin Kuei
              and became its Grandmaster.

              No longer just a warrior,
              but a protector of Earthrealm.
            </p>

            <blockquote>
              "The future of the Lin Kuei begins now."
            </blockquote>

          </div>

        </div>

      </div>

    </section>
  )
}

export default StoryMode
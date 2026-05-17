import { useEffect, useState } from 'react'

function FrostOverlay(){

  const [opacity, setOpacity] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const scroll =
        window.scrollY

      const value =
        Math.min(scroll / 1200, 0.35)

      setOpacity(value)

    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      )

    }

  }, [])

  return (

    <div
      className="frost-overlay"
      style={{
        opacity: opacity
      }}
    />

  )
}

export default FrostOverlay
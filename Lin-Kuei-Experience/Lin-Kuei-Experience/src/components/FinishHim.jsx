import { useEffect, useState } from 'react'

function FinishHim(){

  const [show, setShow] = useState(false)

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop =
        window.scrollY

      const windowHeight =
        window.innerHeight

      const fullHeight =
        document.body.offsetHeight

      if(
        scrollTop + windowHeight
        >=
        fullHeight - 200
      ){

        setShow(true)

      }else{

        setShow(false)

      }

    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )

  }, [])

  return (

    <div className={`finish-screen ${show ? 'active' : ''}`}>

      <div className="finish-overlay"></div>

      <h1 className="finish-text">
        FINISH HIM
      </h1>

    </div>

  )
}

export default FinishHim
import { useEffect, useRef } from 'react'

function FrostParticles(){

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    for(let i = 0; i < 120; i++){

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 2 + 1,

        speedY: Math.random() * 0.5 + 0.2,
        speedX: Math.random() * 0.3 - 0.15,

        opacity: Math.random() * 0.5 + 0.2
      })

    }

    function animate(){

      ctx.clearRect(0,0,canvas.width,canvas.height)

      particles.forEach((p) => {

        ctx.beginPath()

        ctx.fillStyle =
          `rgba(125,211,252,${p.opacity})`

        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        )

        ctx.fill()

        p.y += p.speedY
        p.x += p.speedX

        if(p.y > canvas.height){

          p.y = 0
          p.x = Math.random() * canvas.width

        }

      })

      requestAnimationFrame(animate)
    }

    animate()

    const resize = () => {

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

    }

    window.addEventListener('resize', resize)

    return () => {

      window.removeEventListener(
        'resize',
        resize
      )

    }

  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="frost-canvas"
    />
  )
}

export default FrostParticles
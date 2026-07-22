import { useEffect, useRef } from 'react'

function FrostParticles(){

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Fewer particles on small / low-power screens
    const particleCount =
      window.innerWidth < 768 ? 50 : 120

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    for(let i = 0; i < particleCount; i++){

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 2 + 1,

        speedY: Math.random() * 0.5 + 0.2,
        speedX: Math.random() * 0.3 - 0.15,

        opacity: Math.random() * 0.5 + 0.2
      })

    }

    let animationId = null
    let isPaused = false

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

      if(!isPaused){
        animationId = requestAnimationFrame(animate)
      }
    }

    // Respect reduced-motion: draw a single static frame, skip the loop
    if(prefersReducedMotion){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.fillStyle = `rgba(125,211,252,${p.opacity})`
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    } else {
      animate()
    }

    const resize = () => {

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

    }

    // Pause the RAF loop when the tab isn't visible to save CPU/battery
    const handleVisibility = () => {
      isPaused = document.hidden
      if(!isPaused && !prefersReducedMotion && animationId === null){
        animate()
      }
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {

      isPaused = true

      if(animationId !== null){
        cancelAnimationFrame(animationId)
      }

      window.removeEventListener(
        'resize',
        resize
      )

      document.removeEventListener(
        'visibilitychange',
        handleVisibility
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

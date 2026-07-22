import { useEffect } from 'react'

function Snow() {

  useEffect(() => {

    const canvas = document.getElementById('snow')
    const ctx = canvas.getContext('2d')

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const flakeCount =
      window.innerWidth < 768 ? 50 : 120

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const snowflakes = []

    for(let i = 0; i < flakeCount; i++){

      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3,
        speed: Math.random() * 2 + 1
      })

    }

    let animationId = null
    let isPaused = false

    function animate(){

      ctx.clearRect(0,0,canvas.width,canvas.height)

      ctx.fillStyle = 'rgba(255,255,255,0.7)'

      snowflakes.forEach((flake) => {

        ctx.beginPath()

        ctx.arc(
          flake.x,
          flake.y,
          flake.radius,
          0,
          Math.PI * 2
        )

        ctx.fill()

        flake.y += flake.speed

        if(flake.y > canvas.height){
          flake.y = 0
        }

      })

      if(!isPaused){
        animationId = requestAnimationFrame(animate)
      }
    }

    if(prefersReducedMotion){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.fillStyle = 'rgba(255,255,255,0.7)'
      snowflakes.forEach((flake) => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    } else {
      animate()
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

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

      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)

    }

  }, [])

  return <canvas id="snow"></canvas>
}

export default Snow

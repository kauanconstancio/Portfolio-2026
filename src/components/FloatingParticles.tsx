import { useEffect, useRef } from "react"

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2

      const particles = container.querySelectorAll<HTMLElement>(".particle")
      particles.forEach((p, i) => {
        const speed = (i + 1) * 0.5
        const x = mouseX * speed * 35
        const y = mouseY * speed * 35
        const originalTransform =
          p.getAttribute("data-original-transform") || ""
        p.style.transform = `translate(${x}px, ${y}px) ${originalTransform}`
      })
    }

    const particlesForInit =
      container.querySelectorAll<HTMLElement>(".particle")
    particlesForInit.forEach((p) => {
      const computedStyle = window.getComputedStyle(p)
      const transform = computedStyle.transform
      if (transform !== "none") {
        p.setAttribute("data-original-transform", transform)
      }
    })

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="particle absolute top-[10%] left-[15%] h-72 w-72 rounded-full bg-neon-violet/10 blur-[100px] transition-transform duration-700 ease-out" />
      <div className="particle absolute top-[60%] right-[10%] h-96 w-96 rounded-full bg-neon-cyan/8 blur-[120px] transition-transform duration-700 ease-out" />
      <div className="particle absolute bottom-[20%] left-[40%] h-64 w-64 rounded-full bg-neon-pink/6 blur-[80px] transition-transform duration-700 ease-out" />

      {/* Floating geometric shapes */}
      <div className="particle float-animation absolute top-[20%] right-[25%] h-4 w-4 rotate-45 border border-neon-violet/30 transition-transform duration-1000 ease-out" />
      <div className="particle float-animation-delayed absolute top-[70%] left-[20%] h-6 w-6 rounded-full border border-neon-cyan/20 transition-transform duration-1000 ease-out" />
      <div className="particle float-animation absolute top-[40%] right-[15%] h-3 w-3 rounded-full bg-neon-violet/20 transition-transform duration-1000 ease-out" />
      <div className="particle float-animation-delayed absolute right-[35%] bottom-[30%] h-5 w-5 rotate-12 border border-neon-cyan/25 transition-transform duration-1000 ease-out" />
      <div className="particle float-animation absolute top-[15%] left-[60%] h-2 w-2 rounded-full bg-neon-cyan/30 transition-transform duration-1000 ease-out" />
    </div>
  )
}

export default FloatingParticles

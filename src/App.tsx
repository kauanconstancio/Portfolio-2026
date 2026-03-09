import FloatingParticles from "./components/FloatingParticles"
import Header from "./components/Header"
import Hero from "./components/Hero"

export function App() {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-6">
      <FloatingParticles />
      <Header />
      <Hero />
    </div>
  )
}

export default App

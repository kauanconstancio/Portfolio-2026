import Certificates from "./components/Certificates"
import ContactMe from "./components/ContactMe"
import Experiences from "./components/Experiences"
import FloatingParticles from "./components/FloatingParticles"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import TechGrid from "./components/TechGrid"

export function App() {
  return (
    <div className="flex min-h-screen flex-col gap-10 p-6">
      <FloatingParticles />
      <Header />
      <main className="z-10 p-7">
        <Hero />
        <Experiences />
        <TechGrid />
        <Projects />
        <Certificates />
        <ContactMe />
      </main>
    </div>
  )
}

export default App

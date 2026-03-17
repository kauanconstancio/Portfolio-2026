import Certificates from "./components/Certificates"
import ContactMe from "./components/ContactMe"
import Experiences from "./components/Experiences"
import FloatingParticles from "./components/FloatingParticles"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import TechGrid from "./components/TechGrid"
import { Separator } from "./components/ui/separator"

export function App() {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col gap-10 p-6 lg:w-[1200px]">
      <FloatingParticles />
      <Header />
      <main className="z-10 flex flex-col gap-10 p-7">
        <Hero />
        <Experiences />
        <TechGrid />
        <Projects />
        <Certificates />
        <ContactMe />
        <Separator className="mt-10" />
        <p className="mt-10 text-center text-sm tracking-widest text-gray-400">
          © 2026{" "}
          <span className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-transparent">
            {" "}
            Kauan Constancio
          </span>
          . Todos os direitos reservados.
        </p>
      </main>
    </div>
  )
}

export default App

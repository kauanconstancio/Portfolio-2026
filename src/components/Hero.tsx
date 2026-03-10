import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="tracking-widest">HELLO, I'M KAUAN</h2>
        <h1 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-6xl font-bold text-transparent">
          Kauan <br /> Constancio
        </h1>
        <p className="text-center text-xl tracking-widest">Web Developer</p>
        <p className="text-center tracking-wide text-gray-400">
          Nascido em Vitória, ES. Apaixonado por tecnologia desde sempre,
          buscando criar experiências digitais únicas e inovadoras.
        </p>
        <Button className="from- w-full cursor-pointer border-none bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 p-5 py-7 text-lg font-bold tracking-wide text-white transition-all duration-400">
          Ver Projetos
        </Button>
        <Button className="w-full cursor-pointer border border-blue-600 bg-transparent p-5 py-7 text-lg tracking-wide text-white">
          Contato
        </Button>
        <img
          src=".\src\assets\img\Imagem do WhatsApp de 2025-03-13 à(s) 20.29.13_9b424798.jpg"
          className="mt-10 h-[250px] w-[250px] rounded-full border border-blue-600 object-cover"
        />
      </div>
    </div>
  )
}

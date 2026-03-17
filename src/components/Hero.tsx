import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-5 md:items-start">
          <h2 className="tracking-widest">HELLO, I'M KAUAN</h2>
          <h1 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-6xl font-bold text-transparent md:text-start md:text-8xl">
            Kauan <br /> <span className="text-white">Constancio</span>
          </h1>
          <p className="text-center text-xl tracking-widest md:text-start">
            Web Developer
          </p>
          <p className="text-center tracking-wide text-gray-400 md:w-[700px] md:text-start">
            Nascido em Vitória, ES. Apaixonado por tecnologia desde sempre,
            buscando criar experiências digitais únicas e inovadoras.
          </p>
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <Button className="w-full cursor-pointer border-none bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 p-5 py-7 text-lg font-bold tracking-wide text-white transition-all duration-400 md:w-[200px]">
              Ver Projetos
            </Button>
            <Button className="w-full cursor-pointer border border-blue-600 bg-transparent p-5 py-7 text-lg tracking-wide text-white md:w-[200px]">
              Contato
            </Button>
          </div>
        </div>
        <img
          src=".\src\assets\img\Imagem do WhatsApp de 2025-03-13 à(s) 20.29.13_9b424798.jpg"
          className="mt-10 h-[250px] w-[250px] rounded-full border border-blue-600 object-cover md:h-[350px] md:w-[350px]"
        />
      </div>
    </div>
  )
}

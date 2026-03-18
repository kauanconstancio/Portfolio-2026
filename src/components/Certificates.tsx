import { Award, Link } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

export default function Certificates() {
  const certificates = [
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203204.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203204.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203221.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203221.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203233.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203233.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203244.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203244.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203254.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203254.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203313.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203313.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203325.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203325.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203339.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203339.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203355.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203355.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203428.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203428.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203442.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203442.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203457.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-12 203457.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-13 125908.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-13 125908.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-01-18 135509.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-01-18 135509.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-03-09 202931.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-03-09 202931.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-03-12 174623.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-03-12 174623.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-03-12 175451.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-03-12 175451.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-04-15 150525.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-04-15 150525.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Captura de tela 2025-04-15 153611.png",
      link: "./src/assets/img/certificatesImg/Captura de tela 2025-04-15 153611.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Codecon Summit 2025.png",
      link: "./src/assets/img/certificatesImg/Codecon Summit 2025.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Javascript para web.png",
      link: "./src/assets/img/certificatesImg/Javascript para web.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Manipulando eventos no DOM.png",
      link: "./src/assets/img/certificatesImg/Manipulando eventos no DOM.png",
    },
    {
      path: "./src/assets/img/certificatesImg/Praticando css grid e flexbox.png",
      link: "./src/assets/img/certificatesImg/Praticando css grid e flexbox.png",
    },
  ];
  return (
    <div
      className="mt-20 flex flex-col items-center justify-center"
      id="certificates"
    >
      <h2 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-4xl font-bold tracking-widest text-transparent">
        Certificados
      </h2>
      <div className="flex flex-col items-center justify-center gap-2 text-lg text-muted-foreground">
        <div className="mt-5 flex items-center gap-2">
          <Award className="text-neon-cyan" size={20} />
          <p className="text-center tracking-wide text-gray-400">
            Total de certificados:{" "}
            <span className="bg-linear-to-r from-blue-900 to-blue-600 bg-clip-text text-center font-bold text-transparent">
              {certificates.length}
            </span>
          </p>
        </div>
        <Carousel className="mt-10 w-[80%] max-w-[900px]">
          <CarouselContent className="">
            {certificates.map((certificate) => (
              <CarouselItem className="group relative max-w-[320px] overflow-hidden rounded-lg md:basis-1/2 lg:basis-1/3">
                <img
                  src={certificate.path}
                  className="rounded-lg transition-all duration-300 group-hover:blur-xs"
                />
                <div className="absolute inset-0 flex translate-y-8 items-center justify-center gap-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={certificate.link}
                    className="rounded-full bg-gray-400/70 p-3 transition-all duration-400 hover:scale-110 hover:bg-gray-500/70"
                    target="blank"
                  >
                    <Link />
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

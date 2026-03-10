import { GraduationCap, Briefcase } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

export default function Experiences() {
  const experiences = [
    {
      id: 1,
      icon: GraduationCap,
      year: "Formação",
      role: "Análise e Desenvolvimento de Sistemas",
      company: "Estácio - Em andamento",
      description:
        "Cursando Análise e Desenvolvimento de Sistemas, desenvolvendo habilidades em desenvolvimento de software, arquitetura de sistemas e banco de dados.",
    },
    {
      id: 2,
      icon: Briefcase,
      year: "Experiência",
      role: "Operador de Vendas e Atendimento",
      company: "C&A - 10/2024 - 11/2024",
      description:
        "Trabalho voltado ao atendimento ao público, ajudando em necessidades do cliente e realizando operação de caixa.s",
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 pt-32 pb-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-4xl font-bold tracking-widest text-transparent">
          Competências
        </h2>
        <p className="tracking-widest text-gray-400">
          Formação e Trajetória Profissional
        </p>
      </div>

      <div className="relative mx-auto mt-10 flex w-full max-w-4xl flex-col px-4 sm:px-8">
        <div className="absolute top-0 left-14 h-full w-px bg-linear-to-b from-blue-600/60 via-blue-500/30 to-transparent md:left-1/2 md:-translate-x-[0.5px]"></div>

        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            const isEven = index % 2 === 0

            return (
              <div key={exp.id} className="relative flex">
                <div className="absolute top-0 left-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500/40 bg-background shadow-[0_0_20px_rgba(6,182,212,0.25)] md:left-1/2">
                  <Icon className="h-6 w-6 text-blue-500" />
                </div>
                <div
                  className={`flex w-full flex-col md:flex-row ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`flex w-full flex-col pt-2 pr-6 pl-24 sm:pr-8 md:w-1/2 ${
                      isEven
                        ? "md:items-end md:pr-16 md:pl-0 md:text-right"
                        : "md:items-start md:pr-0 md:pl-16 md:text-left"
                    }`}
                  >
                    <span className="mb-2 text-sm font-semibold tracking-wider text-blue-500 md:mb-1">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold tracking-wide text-white md:text-2xl">
                      {exp.role}
                    </h3>
                    <h4 className="text-base text-gray-400 md:text-lg">
                      {exp.company}
                    </h4>
                    <Accordion type="single" collapsible defaultValue="item-1">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="cursor-pointer">
                          Ver Descrição
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mt-4 leading-relaxed text-gray-400/80">
                            {exp.description}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

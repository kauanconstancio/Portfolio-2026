import { Github, Link } from "lucide-react"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export default function Projetcs() {
  const projects = [
    {
      id: "7",
      img: "./src/assets/img/projectsImg/EM BREVE.png",
      alt: "EM BREVE",
      projectName: "Projeto em Andamento",
      projectDescription: "",
      tags: [],
      github: "",
      deploylink: "",
    },
    {
      id: "1",
      img: "./src/assets/img/projectsImg/solvoo.png",
      alt: "Solvoo - Ecommerce de Serviços",
      projectName: "Solvoo - Ecommerce de Serviços",
      projectDescription: "",
      tags: [
        "React",
        "TypeScript",
        "TailWind CSS",
        "Vite",
        "Lucide",
        "ShadCN",
        "AbacatePay",
      ],
      github: "",
      deploylink: "",
    },
    {
      id: "2",
      img: "./src/assets/img/projectsImg/mediumNotes.png",
      alt: "",
      projectName: "Calculadora de Médias",
      projectDescription: "",
      tags: ["HTML", "SASS", "JavaScript"],
      github: "",
      deploylink: "",
    },
    {
      id: "3",
      img: "./src/assets/img/projectsImg/secretNumber.png",
      alt: "",
      projectName: "Jogo de Adivinhação",
      projectDescription: "",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "",
      deploylink: "",
    },
    {
      id: "4",
      img: "./src/assets/img/projectsImg/library.png",
      alt: "",
      projectName: "Biblioteca Virtual de Jogos",
      projectDescription: "",
      tags: ["HTML", "SASS", "JavaScript"],
      github: "",
      deploylink: "",
    },
    {
      id: "5",
      img: "./src/assets/img/projectsImg/Chat Bot.png",
      alt: "",
      projectName: "Chat Bot - OpenAI",
      projectDescription: "",
      tags: ["NextJS", "TypeScript", "Tailwind CSS", "ShadCN"],
      github: "",
      deploylink: "",
    },
    {
      id: "6",
      img: "./src/assets/img/projectsImg/cards.png",
      alt: "",
      projectName: "Cards de Precificação",
      projectDescription: "",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "",
      deploylink: "",
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-4xl font-bold tracking-widest text-transparent">
        Projetos
      </h2>
      <p className="mt-5 text-center tracking-widest text-gray-400">
        Confira meus projetos
      </p>
      {projects.map((Project) => (
        <Card className="group mt-5 transition-all duration-300">
          <CardContent>
            <div className="relative">
              <img
                src={Project.img}
                alt={Project.alt}
                className="rounded-lg transition-all duration-400 group-hover:blur-xs"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <a
                  href={Project.github}
                  className="rounded-full bg-gray-400/70 p-3 transition-all duration-400 hover:scale-110 hover:bg-gray-500/70"
                >
                  <Github />
                </a>
                <a
                  href={Project.deploylink}
                  className="rounded-full bg-gray-400/70 p-3 transition-all duration-400 hover:scale-110 hover:bg-gray-500/70"
                >
                  <Link />
                </a>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <h2 className="text-lg tracking-widest">{Project.projectName}</h2>
              <div className="flex flex-wrap items-center gap-3">
                {Project.tags.map((tag) => (
                  <Badge className="bg-gray-500/50 px-3 py-2 text-white/70">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

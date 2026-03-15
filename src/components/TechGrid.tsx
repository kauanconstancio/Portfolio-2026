export default function TechGrid() {
  const tech = [
    {
      id: 1,
      name: "Figma",
    },
    {
      id: 2,
      name: "VSCode",
    },
    {
      id: 3,
      name: "Git",
    },
    {
      id: 4,
      name: "GitHub",
    },
    {
      id: 5,
      name: "HTML",
    },
    {
      id: 6,
      name: "CSS",
    },
    {
      id: 7,
      name: "SASS",
    },
    {
      id: 8,
      name: "JavaScript",
    },
    {
      id: 9,
      name: "React",
    },
    {
      id: 10,
      name: "Vite",
    },
    {
      id: 11,
      name: "Tailwind CSS",
    },
    {
      id: 12,
      name: "Next.JS",
    },
    {
      id: 13,
      name: "TypeScript",
    },
    {
      id: 14,
      name: "Lucide React",
    },
    {
      id: 15,
      name: "ShadCN",
    },
    {
      id: 16,
      name: "Framer Motion",
    },
    {
      id: 17,
      name: "Claude",
    },
    {
      id: 18,
      name: "Antigravity",
    },
    {
      id: 19,
      name: "Cursor",
    },
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 pt-32 pb-20">
      <div className="flex flex-col items-center gap-4">
        <h2 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-4xl font-bold tracking-widest text-transparent">
          Tecnologias
        </h2>
        <p className="text-center tracking-widest text-gray-400">
          Tecnologias que domino e utilizo em meus projetos
        </p>
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tech.map((tech) => (
            <div
              key={tech.id}
              className="flex h-[60px] items-center justify-center rounded-lg border border-blue-500 p-5 transition-all duration-300 hover:scale-105 hover:border-blue-700 hover:shadow-[0_0_20px_rgba(0,102,255,0.6)]"
            >
              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

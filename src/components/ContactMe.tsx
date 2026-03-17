import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function ContactMe() {
  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      sub: "Vamos Conectar!",
      href: "https://www.linkedin.com/in/kauanconstancio",
      color: "hover:text-neon-cyan",
    },
    {
      icon: Instagram,
      label: "Instagram",
      sub: "@kauanconstancio",
      href: "https://www.instagram.com/kauanconstancio/",
      color: "hover:text-neon-pink",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      sub: "Mande uma mensagem",
      href: "https://wa.me/5527995323227",
      color: "hover:text-neon-cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      sub: "kauanconstancio",
      href: "https://github.com/kauanconstancio",
      color: "hover:text-neon-violet",
    },
  ]

  return (
    <div
      className="mt-20 flex flex-col items-center justify-center"
      id="contact"
    >
      <h2 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-4xl font-bold tracking-widest text-transparent">
        Entre em Contato
      </h2>
      <p className="mt-5 text-center tracking-widest text-gray-400">
        Me conte como posso te ajudar!
      </p>
      <div className="mt-20 flex w-full flex-col gap-10 md:w-[700px]">
        {socials.map((Social) => {
          const Icon = Social.icon
          return (
            <a
              href={Social.href}
              className="flex w-full cursor-pointer items-center gap-5 rounded-lg bg-gray-800/30 p-5 transition-all duration-300 hover:scale-102 hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]"
              target="blank"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-r from-blue-700 to-blue-500">
                <Icon size={24} className=""></Icon>
              </div>
              <div>
                <p>{Social.label}</p>
                <p>{Social.sub}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"

export default function Header() {
  const links = [
    {
      name: "Início",
      href: "#hero",
    },
    {
      name: "Competências",
      href: "#experiences",
    },
    {
      name: "Tecnologias",
      href: "#tech",
    },
    {
      name: "Projetos",
      href: "#projects",
    },
    {
      name: "Certificados",
      href: "#certificates",
    },
    {
      name: "Contato",
      href: "#contact",
    },
  ]
  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 bg-clip-text text-center text-2xl font-bold tracking-widest text-transparent">
        KC
      </h1>
      <div className="hidden gap-5 md:flex">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group relative cursor-pointer text-[14px] tracking-widest text-gray-400 transition-all"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <Sheet>
        <SheetTrigger className="flex h-3 cursor-pointer items-center justify-center md:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex flex-col gap-5 pt-15">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative cursor-pointer rounded-lg p-2 text-xl tracking-widest"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-900 via-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  )
}

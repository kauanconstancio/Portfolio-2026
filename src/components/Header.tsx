import { MenuIcon } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"

export default function Header() {
  const links = [
    {
      name: "Início",
      href: "#",
    },
    {
      name: "Competências",
      href: "#",
    },
    {
      name: "Tecnologias",
      href: "#",
    },
    {
      name: "Projetos",
      href: "#",
    },
    {
      name: "Certificados",
      href: "#",
    },
    {
      name: "Contato",
      href: "#",
    },
  ]
  return (
    <header className="flex w-full items-center justify-between">
      <h1 className="text-2xl">KC</h1>
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

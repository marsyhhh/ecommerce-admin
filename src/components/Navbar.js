import { UserButton } from "@clerk/nextjs"
import { navLink } from "@/lib/utils"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-12 py-2 outline outline-zinc-300 outline-1">
      <div className="font-semibold text-xl">Zhafirah Admin</div>
      <div>
        <ul className="flex">
          {navLink.map((nav) => (
            <li key={nav.id} className="mr-6">
              <Link href={nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <UserButton />
    </div>
  )
}

export default Navbar

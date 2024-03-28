"use client"

import { UserButton } from "@clerk/nextjs"
import { navLink } from "@/lib/constants"
import Link from "next/link"
import { useState } from "react"
import { Store } from "lucide-react"

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <div className="flex justify-between items-center px-12 py-2 outline outline-zinc-600 outline-1">
      <div className="flex">
        <div className="flex justify-center items-center py-1 px-6 outline outline-zinc-600 outline-1 rounded-md mr-6">
          <Store size={20} className="mr-2" />
          <div className="font-semibold text-xl">
            Zhafirah <span className="text-xs font-normal">Admin</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex">
            {navLink.map((nav) => (
              <li
                key={nav.id}
                className={`mr-6 r font-normal ease-in-out duration-300 hover:text-textColor ${
                  active === nav.title
                    ? "text-textColor"
                    : "text-textSecondaryColor"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={nav.id}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  )
}

export default Navbar

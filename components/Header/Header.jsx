import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="px-4 lg:px-6 py-4 lg:py-8 flex items-center">
        <Link className="flex items-center gap-2" href="#">
          <span className="font-semibold">Living Room Antik</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#events">
            Events
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#menu">
            Menu
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact">
            Contact
          </Link>
        </nav>
    
      </header>
  )
}

export default Header

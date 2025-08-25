"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

return (
    <header className="w-full z-50 bg-transparent absolute left-0 -top-23">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
            
            {/* Logo */}
            <div className="flex-shrink-0">
                <img
                    src="/Assets/logo.png"
                    alt="Logo"
                    className="w-[300px] h-auto"
                />
            </div>

            {/* Desktop Navbar + Button (only on lg and above) */}
            <div className="hidden lg:flex backdrop-blur-md bg-white/15 shadow-md rounded-3xl px-6 py-2 items-center space-x-10">
                <nav>
                    <ul className="flex space-x-8 text-white/80 font-medium">
                        <li className="relative group">
                            <Link href="">Home</Link>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAA01] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <Link href="">About</Link>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAA01] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <Link href="">Services</Link>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAA01] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <Link href="">Client</Link>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAA01] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <Link href="">Solutions</Link>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAA01] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <Link href="">Industries</Link>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAA01] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group">
                            <Link href="">Contact Us</Link>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFAA01] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </nav>
                <Link
                    href="/start"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-full"
                >
                    Start
                </Link>
            </div>

            {/* Mobile Hamburger (visible below lg) */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-black/95 text-white px-6 py-10 transform transition-transform duration-300 ease-in-out z-40 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <nav>
                <ul className="flex flex-col space-y-6 text-lg font-medium">
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Services</Link></li>
                    <li><Link href="">Client</Link></li>
                    <li><Link href="">Solutions</Link></li>
                    <li><Link href="">Industries</Link></li>
                    <li><Link href="">Contact Us</Link></li>
                </ul>
            </nav>
       
      </div>
    </header>
  )
}

export default Header

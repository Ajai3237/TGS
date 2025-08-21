import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className="w-full z-50 bg-transparent absolute -top-23 left-0"> 
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
                
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img 
                        src="/Assets/logo.png"
                        alt="Logo"
                        className="w-[300px] h-auto"
                    />
                </div>

                {/* Navbar + Button */}
                <div className="backdrop-blur-md bg-white/15 shadow-md rounded-3xl px-6 py-2 flex items-center space-x-10 ">
                    <nav>
                        <ul className="hidden md:flex space-x-8 text-white/80 font-medium">
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

                    {/* Button */}
                    <Link
                        href="/start"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-5 py-2 rounded-full"
                    >
                        Start
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header

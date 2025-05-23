'use client'

import Link from 'next/link'
import { memo, useState } from 'react'
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';

interface Section {
  id: string;
  name: string;
  isComingSoon?: boolean;
}

interface NavLinkProps {
  href: string;
  children: string;
  isActive: boolean;
  isComingSoon?: boolean;
  isMobile?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

const Navbar = ({ sections, activeSection }: { sections: Section[], activeSection: string }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex min-w-full justify-between items-center p-8">
      <span className={`font-(family-name:--font-poppins-bold) font-bold text-3xl text-blue-400`}>ariq daffa</span>
      <div className="lg:flex hidden gap-6">
        {sections.map((section) => (
          <NavLink
            key={section.name}
            href={`#${section.id}`}
            isActive={activeSection === section.name}
            isComingSoon={section.isComingSoon}
          >
            {section.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Nav */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        type="button"
        aria-label="Menu"
        aria-expanded="false"
        aria-controls="mobile-menu"
        className={`lg:hidden z-10 fixed top-2 right-4 bg-white border border-blue-200 p-6 flex flex-col items-center justify-center rounded-2xl shadow-lg cursor-pointer`}
      >
        {mobileMenuOpen ? <RiCloseFill size={20} /> : <RiMenu3Fill size={20} />}
      </button>

      <div className={`lg:hidden flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-90' : 'opacity-0'} fixed top-0 bottom-0 left-0 right-0 transition-opacity delay-50 duration-300 ease-in-out bg-white`}>
        {sections.map((section) => (
          <NavLink
            key={section.name}
            href={`#${section.id}`}
            isActive={activeSection === section.name}
            isComingSoon={section.isComingSoon}
            isMobile
            setMobileMenuOpen={setMobileMenuOpen}
          >
            {section.name}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}


function NavLink({ href, children, isActive, isComingSoon, isMobile, setMobileMenuOpen }: NavLinkProps) {
  const isLinkPressed = () => {
    if (isMobile) setMobileMenuOpen?.(false);
  }

  return isComingSoon ?
    <span className={`text-gray-400 cursor-not-allowed  ${isMobile ? 'text-2xl font-bold' : 'text-lg'} font-semibold transition-colors duration-300 ease-in-out isMobile`}>{children} (coming soon!)</span>
    :
    <Link
      href={href}
      onClick={isLinkPressed}
      className={`${isActive ? 'text-blue-300' : 'text-gray-500'} hover:text-blue-300 font-(family-name:--font-poppins) ${isMobile ? 'text-2xl font-bold' : 'text-lg'} transition-colors duration-300 ease-in-out`}
    >
      {children}
    </Link>
}

export default memo(Navbar)
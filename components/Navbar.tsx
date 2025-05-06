'use client'

import Link from 'next/link'
import { memo } from 'react'


interface Section {
  id: string;
  name: string;
  isComingSoon?: boolean;
}

const Navbar = ({ sections, activeSection }: { sections: Section[], activeSection: string }) => {
  return (
    <nav className="flex min-w-full justify-between items-center card p-6">
      <span className={`font-(family-name:--font-poppins-bold) font-bold text-2xl text-blue-400`}>ariq daffa</span>
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
    </nav>
  )
}

function NavLink({ href, children, isActive, isComingSoon }: { href: string; children: string; isActive: boolean, isComingSoon?: boolean }) {
  return isComingSoon ?
    <span className="text-gray-400 cursor-not-allowed">{children} (coming soon!)</span>
    : (
      <Link
        href={href}
        className={`${isActive ? 'text-blue-300' : 'text-gray-500'} hover:text-blue-300 font-(family-name:--font-poppins) `}
      >
        {children}
      </Link>
    );
}

export default memo(Navbar)
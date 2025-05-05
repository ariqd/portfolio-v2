'use client'

import { Poppins } from 'next/font/google'
import Link from 'next/link'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
import { memo } from 'react'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
})

const poppinsBold = Poppins({
  weight: '800',
  subsets: ['latin'],
})

interface Section {
  id: string;
  name: string;
  isComingSoon?: boolean;
}

const Navbar = ({ sections, activeSection }: { sections: Section[], activeSection: string }) => {
  return (
    <nav className="flex min-w-full justify-between items-center card p-6">
      <span className={`${poppinsBold.className} text-2xl text-black`}>ariq daffa</span>
      <div className="flex gap-6">
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
        {/* <NavLink currentPath={pathname} href="/">[0]</NavLink> */}
        {/* <NavLink currentPath={pathname} href="/experience">Experience</NavLink> */}
        {/* <NavLink currentPath={pathname} href="/education">Education</NavLink> */}
        {/* <span className="text-gray-400 cursor-not-allowed">Articles (coming soon!)</span> */}
        {/* <NavLink currentPath={pathname} href="/contact">Contact</NavLink> */}
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
        className={`${poppins.className} ${isActive ? 'text-black' : 'text-gray-500'} hover:text-black`}
      >
        {children}
      </Link>
    );
}

export default memo(Navbar)
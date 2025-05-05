'use client'

import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
})

const poppinsBold = Poppins({
  weight: '800',
  subsets: ['latin'],
})

const Navbar = () => {
  const pathname = usePathname();


  return (
    <nav className="flex min-w-full justify-between items-center card p-6">
      <span className={`${poppinsBold.className} text-2xl text-black`}>ariq daffa</span>
      <div className="flex gap-6">
        <NavLink currentPath={pathname} href="/">[0]</NavLink>
        <NavLink currentPath={pathname} href="/experience">Experience</NavLink>
        <NavLink currentPath={pathname} href="/education">Education</NavLink>
        <span className="text-gray-400 cursor-not-allowed">Articles (coming soon!)</span>
        <NavLink currentPath={pathname} href="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

function NavLink({ href, children, currentPath }: { href: string; children: string; currentPath: string }) {
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`${poppins.className} ${isActive ? 'text-black' : 'text-gray-500'} hover:text-black`}
    >
      {children}
    </Link>
  );
}

export default Navbar
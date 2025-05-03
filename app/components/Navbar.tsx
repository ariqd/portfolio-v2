import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '800',
  subsets: ['latin'],
})

const Navbar = () => {
  return (
    <nav className="flex min-w-full justify-center card p-6">
      <span className={`${poppins.className} text-2xl text-black`}>ariq daffa</span>
    </nav>
  )
}

export default Navbar
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center h-12 max-w-6xl sm:mx-auto">
      <div className="flex gap-4 ml-5">
        <Link className="" href="/"><p className=" hover:text-amber-600 hidden sm:inline text-sm" >HOME</p> <AiFillHome className="text-2xl sm:hidden " /></Link>
        <Link className="" href="/about"><p className=" hover:text-amber-600 hidden sm:inline text-sm">ABOUT</p> <AiFillInfoCircle className="text-2xl sm:hidden " /></Link>
      </div>
      <div>
        <Link className="mr-5" href="/" >
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
        </Link>
      </div>
    </header>
  )
}

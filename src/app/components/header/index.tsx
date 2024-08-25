import logoImg from "/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-20 bg-slate-200 text-black px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-20 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/" className="mr-8">
            <Image src={logoImg} alt="Logo do site dalygames" quality={100} priority={true} className="w-full" />
          </Link>

          <Link href="/" className="font-bold transition-colors duration:1000ms hover:text-orange-600">
            GAMES
          </Link>
          <Link href="/profile" className="font-bold transition-colors duration:1000ms hover:text-orange-600">
            PERFIL
          </Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid
              size={34}
              className="text-slate-500 transition-colors duration:500ms hover:text-slate-800"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

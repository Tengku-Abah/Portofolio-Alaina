'use client';
import { usePathname, useRouter } from "next/navigation";

export default function Navbar(){
   const pathname= usePathname();
   const router = useRouter();
    return (
        <nav className="bg-[#946D43] p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold ml-20">MINE</div>
            <ul className="flex space-x-5  items-center font-bold mr-20">
            <li><a href="#home" className="text-white hover:text-[#FBEED7]">Home</a></li>
            <li><a href="#about" className="text-white hover:text-[#FBEED7]">About me</a></li>
            <li><a href="#projects" className="text-white hover:text-[#FBEED7]">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-[#FBEED7]">Contact</a></li>
            </ul>
        </div>
        </nav>
    );
}
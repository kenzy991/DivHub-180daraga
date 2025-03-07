import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#1f1f1f] flex items-center justify-between px-6 py-5 md:py-1 sticky top-0 z-[10] w-full h-[15vh] md:h-[5vh">
            
            <div className="w-[57%]">
                <img src="/logo-2e33b7a0.png" alt="Logo" className="  w-[40%] h-[30%]  ml-4 md:w-[10%] md:h-[20%] md:ml-[25%] " />
            </div>

            <div className="hidden md:flex space-x-6 text-[#ccc] text-[1.2rem] font-sans md:mr-[15%]">
                <a className="hover:text-gray-400 cursor-pointer">Home</a>
                <a className="hover:text-gray-400 cursor-pointer">Events</a>
                <a className="hover:text-gray-400 cursor-pointer">Team Hierarchy</a>
                <a className="hover:text-gray-400 cursor-pointer">Blogs</a>
            </div>

            <button
                className="md:hidden p-2 bg-white rounded-md shadow-md"
                onClick={() => setIsOpen(true)}
            >
                <Menu size={24} color="#700608" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-[#1f1f1f] text-[#ccc] flex flex-col items-center justify-center space-y-6 z-[50]">
                   
                    <button className="absolute top-5 right-5 p-2 bg-white rounded-md shadow-md" onClick={() => setIsOpen(false)}>
                        <X size={24} color="#700608" />
                    </button>

                    <a className="text-2xl hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Home</a>
                    <a className="text-2xl hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Events</a>
                    <a className="text-2xl hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Team Hierarchy</a>
                    <a className="text-2xl hover:text-gray-400 cursor-pointer" onClick={() => setIsOpen(false)}>Blogs</a>
                </div>
            )}
        </div>
    );
}

import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav className={`
            transition-all duration-300 ease-in-out
            ${isScrolled ? 
                "fixed top-0 left-0 w-full bg-[#1D1F25] shadow-md z-50 rounded-none" :
                "absolute top-6 left-1/2 -translate-x-1/2 w-[60%] rounded-full bg-white/30 backdrop-blur"
            }
        `}>
            <div className="flex items-center justify-between px-6 py-3">
                <span className="font-bold text-xl">Sulthonaul</span>
                <div className="space-x-4 [&>a]:decoration-none [&>a]:text-white! [$>a]:hover-cursor-pointer!">
                    <a href="#" className="">Portfolio</a>
                    <a href="#" className="">Experience</a>
                    <a href="#" 
                        className="inline-block rounded-lg bg-[#ED985F] 
                                   px-4 py-1 text-white font-medium
                                 hover:bg-[#e0854f] transition">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
}
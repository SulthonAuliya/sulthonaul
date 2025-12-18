import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        <motion.nav 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
        className={`
            transition-all duration-300 ease-in-out z-50
            ${isScrolled ? 
                "fixed top-0 left-0 w-full bg-[#1D1F25] shadow-md rounded-none" :
                "absolute top-6 left-1/2 -translate-x-1/2 w-full md:w-[70%] lg:w-[60%] md:rounded-full bg-white/10 backdrop-blur"
            }
        `}>
           <div className="relative">
                {/* Top bar */}
                <div className="flex items-center justify-between px-4 md:px-6 py-3 [&>a]:text-white!">
                <motion.a 
                    href="#hero"
                    whileHover={{
                        scale: [null, 1.1],
                        transition: { duration: 0.2 },
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="font-bold text-lg md:text-xl text-white relative inline-block group">
                    Sulthonaul
                    <span
                        className="
                            pointer-events-none
                            absolute left-0 -bottom-1
                            h-[2px] w-full
                            origin-left scale-x-0
                            bg-white
                            transition-transform duration-300 ease-out
                            group-hover:scale-x-100
                            "
                        />
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-4 [&>a]:text-white! [&>a]:text-lg md:[&>a]:text-xl">
                    <motion.a 
                    className="relative inline-block group"
                    whileHover={{
                        scale: [null, 1.1],
                        transition: { duration: 0.2 },
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.2,
                        delay: 0.3,
                        scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
                    }} href="#portfolio">
                        Portfolio
                        <span
                            className="
                            pointer-events-none
                            absolute left-0 -bottom-1
                            h-[2px] w-full
                            origin-left scale-x-0
                            bg-white
                            transition-transform duration-300 ease-out
                            group-hover:scale-x-100
                            "
                        />
                    </motion.a>
                    <motion.a 
                        className="relative inline-block group"
                        whileHover={{
                            scale: [null, 1.1],
                            transition: { duration: 0.2 },
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.2,
                            delay: 0.6,
                            scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
                        }}
                        href="#">
                            Experience
                            <span
                            className="
                                pointer-events-none
                                absolute left-0 -bottom-1
                                h-[2px] w-full
                                origin-left scale-x-0
                                bg-white
                                transition-transform duration-300 ease-out
                                group-hover:scale-x-100
                                "
                            />    
                        </motion.a>
                    <motion.a
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.2,
                        delay: 0.9,
                        scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
                    }}
                    href="#"
                    className="rounded-lg bg-[#ED985F] px-4 py-1
                                text-white font-medium hover:bg-[#e0854f] transition"
                    >
                    About
                    </motion.a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
                </div>

                {/* Mobile Slide Menu */}
                <AnimatePresence>
                {menuOpen && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden bg-[#1D1F25]/95 backdrop-blur
                                "
                    >
                    <div className="flex flex-col px-6 py-4 space-y-4 [&>a]:text-white!">
                        <a href="#" onClick={() => setMenuOpen(false)}>Portfolio</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>Experience</a>
                        <a
                        href="#"
                        onClick={() => setMenuOpen(false)}
                        className="rounded-lg bg-[#ED985F] px-4 py-2 text-center font-medium"
                        >
                        About
                        </a>
                    </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
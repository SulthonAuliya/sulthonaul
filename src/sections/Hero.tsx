import reactLogo from '../assets/react.svg'
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Magnetic from '../components/Magnetic';
import { motion } from "motion/react"


export default function Hero() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const elements = gsap.utils.toArray<HTMLElement>(".parallax");

        elements.forEach((el) => {
            const speed = Number(el.dataset.speed);

            gsap.to(el, {
            y: () => -(window.innerHeight * speed),
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
            });
        });
    }, []);

    const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
    ).matches;
 
    if (prefersReducedMotion) return;

    return(
        <div className="relative w-full md:w-screen h-screen overflow-hidden">

            <div className="absolute inset-0 z-0 ">
                <div className="relative h-full max-w-full flex md:flex-wrap items-center md:items-start justify-center gap-12 px-6">

                    <Magnetic>
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        src="https://icon.icepanel.io/Technology/svg/Laravel.svg"
                        className="-rotate-25 w-20 md:w-36 md:mt-50 opacity-80 drop-shadow-lg drop-shadow-orange-600 animate-pulse"
                        
                    />
                    </Magnetic>

                    <Magnetic>
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        src={reactLogo}
                        className="rotate-25 w-24 md:w-40 md:mt-100 opacity-70 drop-shadow-lg drop-shadow-blue-400 animate-pulse"
                        
                    />
                    </Magnetic>

                    <Magnetic>
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
                        className="rotate-45 w-20 md:w-32 md:mt-50 opacity-60 drop-shadow-blue-400 animate-pulse"
                        
                    />
                    </Magnetic>

                    <Magnetic>
                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                        src="https://www.logo.wine/a/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.svg"
                        className="rotate-40 w-28 md:w-60 md:mt-100 opacity-60 drop-shadow-fuchsia-700 animate-pulse"
                    />
                    </Magnetic>

                </div>
                </div>


        <div className="relative z-10 pointer-events-none flex h-full items-center justify-center text-center">
            <div className="max-w-2xl">
                <h1 className="text-2xl md:text-5xl font-bold text-white">
                Hi, I’m a Fullstack Developer
                </h1>
                <h2 className="mt-4 text-lg md:text-2xl text-slate-200">
                Delivering end-to-end <span className="font-bold">web applications</span>{" "}
                with <span className="font-bold">2+ years</span> of hands-on development.
                </h2>
            </div>
        </div>

      </div>
    )

}
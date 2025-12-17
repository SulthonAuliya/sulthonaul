import { useRef } from 'react'
import hmpui from '../assets/hmpui.webp'
import rps from '../assets/rps.webp'
import integrasi from '../assets/integrasi.webp'
import { motion, useScroll, useTransform, MotionValue } from "motion/react"


function useParallax(value: MotionValue<number>, distance: number) {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    return useTransform(value, [0, 1], [-distance, distance])
}

type ImageProps = {
  src: string
  title: string
  desc: string
  order1: number
  order2: number
}

function Image({ src, title, desc, order1, order2 }: ImageProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useParallax(scrollYProgress, 200)
  

  return (
    <section
    ref={ref}
    className="
        img-container snap-start
        min-h-screen
        px-10
        flex flex-col
        gap-6
        md:grid md:grid-cols-2
        md:items-center
        justify-center
    "
    >
    <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        src={src}
        alt={title}
        className={`w-full max-w-lg order-1 md:order-${order1}`}
    />

    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        style={{ y: window.innerWidth < 768 ? 0 : y }}
        className={`order-2 md:order-${order2}`}
    >
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
        {title}
        </h2>
        <h3 className="text-xl md:text-2xl text-center md:text-left mt-5 text-slate-200">
        {desc}
        </h3>
    </motion.div>
    </section>


  )
}


export default function Portfolio() {

    return(
        <div className="w-full pt-40 md:pt-30 pb-20 snap-y snap-mandatory">
            <h1 className="text-2xl  md:text-4xl font-bold mb-0">Portfolio</h1>
            <Image  
                src={hmpui}
                title="HMPUI – Laravel, Bootstrap"
                desc="An organization profile website built to help HMPUI introduce their activities and publish updates to the public."
                order1={1}
                order2={2}
            />

            <Image  
                src={rps}
                title="RPS Unla – Laravel, Bootstrap"
                desc="A Semester Learning Plan (RPS) management system for Universitas Langlangbuana lecturers to manage and access their RPS documents online."
                order1={2}
                order2={1}
            />

            <Image
                src={integrasi}
                title="Ayo Integrasi – Laravel, Bootstrap, Vue"
                desc="An internal application for managing end-to-end business operations at PT Rahadhyan Integrasi Nusantara (RIN), covering project management, finance, journaling, payslips, time tracking, and payroll."
                order1={1}
                order2={2}
            />

        </div>    
    )
}   
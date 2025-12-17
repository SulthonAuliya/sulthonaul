import { useRef } from 'react'
import hmpui from '../assets/hmpui.png'
import rps from '../assets/rps.png'
import integrasi from '../assets/integrasi.png'
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react"


function useParallax(value: MotionValue<number>, distance: number) {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    return useTransform(value, [0, 1], [-distance, distance])
}

type ImageProps = {
  src: string
  title: string
  desc: string
}
function Image({ src, title, desc }: ImageProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useParallax(scrollYProgress, 200)

  return (
    <section
      ref={ref}
      className="img-container snap-start h-screen grid grid-cols-1 md:grid-cols-2 place-items-center px-10"
    >
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
            duration: 0.7,
        }}
        src={src}
        alt={title}
        className="w-full max-w-lg"
      />
        <div className='grid grid-cols-1 -mt-60 md:mt-0'>
            <motion.h2
                style={{ y }}
                className="text-2xl md:text-3xl font-bold text-center md:text-left"
            >
                {title}
            </motion.h2>
            <motion.h3
                style={{y}}
                className='text-xl md:text-2xl text-center md:text-left mt-5 text-slate-200'
            >
                {desc}
            </motion.h3>
        </div>
    </section>
  )
}

function ImageRight({ src, title, desc }: ImageProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useParallax(scrollYProgress, 200)

  return (
    <section
      ref={ref}
      className="img-container snap-start h-screen grid grid-cols-1 md:grid-cols-2 place-items-center px-10"
    >
        <div className='grid grid-cols-1 -mt-60 md:mt-0 order-2 md:order-1'>
            <motion.h2
                style={{ y }}
                className="text-2xl md:text-3xl font-bold text-center md:text-left"
            >
                {title}
            </motion.h2>
            <motion.h3
                style={{y}}
                className='text-xl md:text-2xl text-center md:text-left mt-5 text-slate-200'
            >
                {desc}
            </motion.h3>
        </div>
        <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.7,
            }}
            src={src}
            alt={title}
            className="w-full max-w-lg order-1 md:order-2"
        />
    </section>
  )
}


export default function Portfolio() {

    return(
        <div className="w-full pt-40 md:pt-30 pb-20 snap-y snap-mandatory">
            <h2 className="text-2xl  md:text-4xl font-bold mb-20">Portfolio</h2>
            <Image  
                src={hmpui}
                title="HMPUI – Laravel, Bootstrap"
                desc="An organization profile website built to help HMPUI introduce their activities and publish updates to the public."
            />

            <ImageRight  
                src={rps}
                title="RPS Unla – Laravel, Bootstrap"
                desc="A Semester Learning Plan (RPS) management system for Universitas Langlangbuana lecturers to manage and access their RPS documents online."
            />

            <Image
                src={integrasi}
                title="Ayo Integrasi – Laravel, Bootstrap, Vue"
                desc="n application used for the entire internal business operations at PT. Rahadhyan Integrasi Nusantara (RIN). This application covers project creation processes, finance, financial journaling, payslips, time tracking, and employee payroll"
            />

        </div>    
    )
}   
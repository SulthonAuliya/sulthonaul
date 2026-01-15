"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type Experience = {
  role: string
  company: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "PT. Rahadhyan Integrasi Nusantara",
    period: "Mei 2023 — July 2025",
    description:
      "Fullstack developer contributing to internal ERP systems for finance, payroll, and project management. Also supported major national events as an on-site developer, ensuring systems met real-time operational needs.Tech stack: Laravel, Bootstrap, MySQL, JavaScript, AJAX, jQuery, Vue.js",
  },
  {
    role: "Backend Developer Intern",
    company: "PT. Digdaya Olah Teknologi Indonesia (DOT)",
    period: "Aug 2022 - Dec 2022",
    description:
      "Participated in one of the biggest project at company. Tech Stack : Laravel, Bootstrap, MySQL, JavaScript, AJAX, jQuery, Inertia.js, React.js",
  },
  {
    role: "Freelance Web Developer",
    company: "Sagara",
    period: "Oct 2020 - Dec 2020",
    description:
      "Working as both frontend and backend developer such as implementing design interfaces, and creating data structures and flow of the project. Tech Stack : Laravel, Bootstrap, MySQL, Vue.js",
  },
  {
    role: "Web Developer Intern",
    company: "AHURA",
    period: "Oct 2019 - Dec 2019",
    description:
      "Participated and had a significant impact on 2 of the company's major products and projects within the three-month internship period. Tech Stack : Laravel, Bootstrap, MySQL, Ajax, jQuery",
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen w-screenpx-6 md:px-20 py-32 pb-150"
    >

      <h2 className="mb-24 text-center text-3xl md:text-4xl font-bold">
        Experience
      </h2>

      <motion.div
        style={{ scaleY }}
        className="
          absolute left-1/2 top-32
          h-[calc(100%-8rem)]
          w-[2px]
          -translate-x-1/2
          origin-top
          bg-white/20 mt-20
        "
      />

      <div className="space-y-32">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} index={index} />
        ))}
      </div>
    </div>
  )
}

type ItemProps = Experience & { index: number }

function ExperienceItem({
  role,
  company,
  period,
  description,
  index,
}: ItemProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 50%"],
  })

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -120 : 120, 0]
  )

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 0.7 }}
      style={{x ,opacity }}
      className={`
        relative mx-auto
        w-full md:w-1/2
        ${index % 2 === 0 ? "md:ml-auto md:pr-0" : "md:mr-auto md:pl-0"}
      `}
    >



      <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-sm text-slate-400">{period}</p>
        <h3 className="mt-2 text-xl font-semibold">
          {role} · {company}
        </h3>
        <p className="mt-4 text-slate-300">{description}</p>
      </div>
    </motion.div>
  )
}

"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Job = {
  period: string;
  title: string;
  mode: string;
  description: string;
  tags: string[];
};

// Edit your experience here. Newest first.
const jobs: Job[] = [
  {
    period: "February 2026 - Present",
    title: "Game Developer",
    mode: "On-site",
    description:
      "Software Developer with hands-on experience in web development, application development, IoT systems, networking, and game development.",
    tags: ["Unreal Engine"],
  },
  {
    period: "June 2025 - January 2026",
    title: "Web Developer / IT Specialist",
    mode: "On-site",
    description:
      "Hands-on experience in web development, networking, IoT systems, and IT solutions, supporting the development and deployment of practical technology solutions for business and customer needs.",
    tags: ["React"],
  },
  {
    period: "January 2025 - May 2025",
    title: "Freelance Full-Stack Developer",
    mode: "On-site",
    description:
      "Developed a full-stack web application for online enrollment, grade management, attendance tracking, and multi-role access for administrators, instructors, and students.",
    tags: ["Laravel", "MySQL"],
  },
  {
    period: "April 2024 - July 2024",
    title: "IT Tech Intern",
    mode: "On-site",
    description:
      "Gained practical experience in IT support and technical troubleshooting, assisting with hardware, software, and general technical issues while responding to support requests.",
    tags: [],
  },
];

export default function Experience() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, x: reduce ? 0 : -60 },
    show: { opacity: 1, x: 0, transition: { duration: reduce ? 0 : 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
      <h2 className="text-4xl leading-none sm:text-5xl">
        <span className="bg-gradient-to-r from-[#8a6d1f] via-gold to-[#f0d98a] bg-clip-text font-black uppercase text-transparent">
          Work
        </span>{" "}
        <span className="font-thin uppercase italic">Experience</span>
      </h2>
      <p className="mt-5 max-w-xl text-base text-ivory/90 sm:text-lg">
        Software Developer with hands-on experience in web development, application
        development, IoT systems, networking, and game development.
      </p>

      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-14 ml-2 border-l border-white/25"
      >
        {jobs.map((job) => (
          <motion.li key={job.title} variants={item} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-white/50 bg-neutral-600" />
            <p className="text-xs font-light text-ivory/50">{job.period}</p>
            <h3 className="mt-1 text-xl font-bold sm:text-2xl">{job.title}</h3>
            <p className="mt-1 text-[10px] font-medium uppercase italic text-ivory/70">
              {job.mode}
            </p>
            <div className="mt-2 border-t border-white/25" />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ivory/90">
              {job.description}
            </p>
            {job.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/40 px-4 py-1 text-xs font-light italic"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

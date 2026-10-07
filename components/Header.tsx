"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

const glow =
  "transition-all duration-300 hover:text-gold hover:[text-shadow:0_0_12px_rgba(212,175,55,0.9)]";

export default function Header() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (y > prev && y > 80) {
      setHidden(true);
      setOpen(false);
    } else if (y < prev) {
      setHidden(false);
    }
  });

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (lenis) lenis.scrollTo(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={false}
      animate={hidden ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
      style={{ pointerEvents: hidden ? "none" : "auto" }}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[min(92%,64rem)]"
    >
      <nav className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="text-xs font-black tracking-wide sm:text-sm"
        >
          NEHEMIAM MONTERO
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => go(e, l.href)}
                className={`text-[11px] font-medium uppercase tracking-wider ${glow}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="text-2xl md:hidden"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-2 flex flex-col gap-1 rounded-xl border border-white/10 bg-ink/80 p-3 backdrop-blur-md md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-wider ${glow}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

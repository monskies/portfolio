import type { IconType } from "react-icons";
import {
  FaBootstrap, FaBluetoothB, FaCss3Alt, FaHtml5, FaJava, FaJs,
  FaLaravel, FaPhp, FaPython, FaReact,
} from "react-icons/fa";
import { FiChevronsDown, FiWifi } from "react-icons/fi";
import {
  SiArduino, SiC, SiCplusplus, SiFirebase, SiFramer, SiKotlin,
  SiNextdotjs, SiTailwindcss, SiUnrealengine,
} from "react-icons/si";

type Skill = { name: string; icon: IconType };
type Group = { title: string; skills: Skill[] };

// Edit your skills here.
const groups: Group[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: FaPhp },
      { name: "JavaScript", icon: FaJs },
      { name: "Kotlin", icon: SiKotlin },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Laravel", icon: FaLaravel },
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Animation & Motion",
    skills: [
      { name: "Framer Motion", icon: SiFramer },
      { name: "Lenis", icon: FiChevronsDown },
    ],
  },
  { title: "Game Development", skills: [{ name: "Unreal Engine 5.4", icon: SiUnrealengine }] },
  {
    title: "IoT / Embedded",
    skills: [
      { name: "Arduino", icon: SiArduino },
      { name: "Bluetooth / BLE", icon: FaBluetoothB },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  { title: "Networking / Systems", skills: [{ name: "OpenWrt", icon: FiWifi }] },
];

export default function TechStack() {
  return (
    <section id="techstack" className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-4xl leading-none sm:text-5xl">
          <span className="bg-gradient-to-r from-[#8a6d1f] via-gold to-[#f0d98a] bg-clip-text font-black text-transparent">
            Technical
          </span>{" "}
          <span className="font-thin italic">Stack</span>
        </h2>
        <div className="mx-auto mt-3 flex max-w-xs items-center gap-4 text-sm font-light tracking-wide text-ivory/80">
          <span className="h-px flex-1 bg-white/30" />
          Skills Portfolio
          <span className="h-px flex-1 bg-white/30" />
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="text-center text-sm font-medium">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap justify-center gap-3">
              {g.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="group relative grid h-[88px] w-[88px] place-items-center overflow-hidden rounded-2xl border border-white/25 bg-white/[0.06] sm:h-[100px] sm:w-[100px]"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-500/50 via-neutral-400/20 to-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative flex flex-col items-center gap-2 px-1 text-center">
                    <Icon className="text-2xl sm:text-[26px]" />
                    <span className="text-[10px] font-light leading-tight">{name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

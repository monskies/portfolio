import type { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";
import { SiAndroidstudio, SiFirebase, SiKotlin, SiLaravel, SiMysql, SiUnrealengine } from "react-icons/si";

type Project = {
  title: string;
  stack: string;
  icons: IconType[];
  description: string;
  image?: string; // e.g. "/projects/school-portal.png" (put files in /public/projects)
  category: string;
  repo?: string;
};

// Edit your projects here.
const projects: Project[] = [
  {
    title: "School Management Portal",
    stack: "Laravel | MySQL",
    icons: [SiLaravel, SiMysql],
    description:
      "Full-stack school management and enrollment platform. Online enrollment, student assessment, grade management, attendance, and role-based dashboards built with Laravel and MySQL.",
    image: "/projects/mca.png",
    category: "Web Application",
    repo: "#",
  },
  {
    title: "Digital Card Game",
    stack: "Unreal Engine | Blueprints",
    icons: [SiUnrealengine],
    description:
      "Interactive digital card game developed for a confidential client. Gameplay systems, card mechanics, and user interface built with Unreal Engine 5.4 using Blueprints and UMG.",
    image: "/projects/game.png",
    category: "Game",
  },
  {
    title: "Bluetooth Proximity Reminder System",
    stack: "Kotlin | Android Studio | Firebase",
    icons: [SiKotlin, SiAndroidstudio, SiFirebase],
    description:
      "Developed a mobile-to-embedded solution that alerts users when they move out of range of paired essential items by monitoring Bluetooth RSSI.",
    image: "/projects/blueprox.png",
    category: "IoT",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <h2 className="text-4xl leading-none sm:text-5xl">
        <span className="bg-gradient-to-r from-[#8a6d1f] via-gold to-[#f0d98a] bg-clip-text font-black text-transparent">
          Featured
        </span>{" "}
        <span className="font-thin italic">Projects</span>
      </h2>
      <p className="mt-5 max-w-xl text-base text-ivory/90 sm:text-lg">
        Software Developer who builds across the full stack, from web apps and mobile to IoT
        and game development. I focus on turning complex systems into smooth, reliable
        experiences.
      </p>

      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li
            key={p.title}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/30 p-6 text-center"
          >
            {/* Hover gradient overlay (opacity is animatable, gradients are not) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-600/50 via-neutral-500/20 to-white/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="relative flex flex-1 flex-col items-center">
              <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
              <span className="mt-3 rounded-full border border-white/40 px-3 py-0.5 text-[10px] font-light uppercase tracking-wider">
                {p.stack}
              </span>

              <div className="mt-5 flex gap-2">
                {p.icons.map((Icon, i) => (
                  <span
                    key={i}
                    className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/5 text-2xl text-gold"
                  >
                    <Icon />
                  </span>
                ))}
              </div>

              <p className="mt-5 text-xs font-light leading-relaxed text-ivory/90">
                {p.description}
              </p>

              <div className="mt-5 aspect-[16/9] w-full overflow-hidden rounded-md border border-gold/60 bg-black/40">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={`${p.title} screenshot`} className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full w-full place-items-center text-xs font-light italic text-ivory/40">
                    Screenshot placeholder
                  </div>
                )}
              </div>

              <div className="mt-auto flex w-full items-center justify-between border-t border-white/25 pt-4 text-[11px] font-medium uppercase">
                <span>{p.category}</span>
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors duration-300 hover:text-gold"
                  >
                    Repo <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

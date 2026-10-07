import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

type Social = { label: string; href: string; icon: IconType; external?: boolean };

// Replace the placeholder links with your own.
const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/monskies", icon: FaGithub, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/nehemiam-montero", icon: FaLinkedin, external: true },
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=monteronehemiah@gmail.com", icon: FiMail, external: true },
];

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto w-full max-w-6xl px-6 pt-24 pb-10 sm:pt-32">
      <div className="border-t border-white/25 pt-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-black uppercase sm:text-3xl">Nehemiam Montero</h2>
            <p className="mt-5 text-sm font-light italic leading-relaxed text-ivory/90">
              Software Developer who builds across the full stack, from web apps and mobile to
              IoT and game development. I focus on turning complex systems into smooth,
              reliable experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-black uppercase">Connect</h3>
            <ul className="mt-4 flex gap-3">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group relative grid h-11 w-12 place-items-center overflow-hidden rounded-full border border-white/30 bg-white/[0.06] text-xl"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-500/50 via-neutral-400/20 to-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <Icon className="relative" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center text-sm font-light italic text-ivory/90">
          <p>&ldquo;Trust in the Lord with all your heart, and do not lean on your own understanding&rdquo;</p>
          <p className="mt-3">Proverbs 3:5</p>
        </div>

        <div className="mt-6 border-t border-white/25 pt-4 text-xs font-light text-ivory/50">
          &copy; {new Date().getFullYear()} Nehemiam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

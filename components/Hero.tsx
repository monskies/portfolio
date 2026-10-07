import Marquee from "./Marquee";

const skills = ["Problem Solver", "Adaptability", "Logical Thinking", "Debugging"];
const bgText = "px-10 text-[34vh] font-black leading-none text-[#1a1a1a]";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background name marquees */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none flex-col justify-between"
      >
        <Marquee items={["NEHEMIAM"]} direction="ltr" itemClassName={bgText} />
        <Marquee items={["MONTERO"]} direction="rtl" itemClassName={bgText} />
      </div>

      {/* Foreground */}
      <div className="relative z-10 px-4 text-center">
        <h1 className="leading-none">
          <span className="block text-[clamp(2.75rem,11vw,10rem)] font-black tracking-tight">
            NEHEMIAM
          </span>
          <span className="block text-[clamp(2.75rem,11vw,10rem)] font-thin tracking-wide">
            MONTERO
          </span>
        </h1>
        <p className="mt-8 text-lg font-medium tracking-wide text-gold sm:text-2xl">
          FULL STACK DEVELOPER
        </p>
      </div>

      {/* Skills marquee */}
      <Marquee
        items={skills}
        direction="ltr"
        className="absolute inset-x-0 bottom-10 z-10"
        itemClassName="px-10 text-lg font-light italic text-ivory/90 sm:px-16 sm:text-2xl"
      />
    </section>
  );
}

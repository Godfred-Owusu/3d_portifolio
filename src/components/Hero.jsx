import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.padding} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="sm:h-80 h-40 w-1  violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}  text-white `}>
            Hi, I&apos;m <span className="text-[#915eff]">Godfred</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 `}>
            I develop 3D visuals, user <br className="sm:block hidden" />{" "}
            interface and web applications.
          </p>
        </div>
        <p>my picture</p>
      </div>
      <ComputersCanvas />
      <div className="relative sm:top-[10%] -top-[10%] z-20">
        <div className="absolute  xs:bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

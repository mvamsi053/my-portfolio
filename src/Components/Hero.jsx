import PrimaryButton from "./Common/PrimaryButton";
import { motion } from "framer-motion";
export default function Hero() {
  const pop = {
    hidden: { opacity: 0, y: "50px" },
    visible: { opacity: 1, y: "0px" },
  };
  return (
    <section
      className="relative z-10 min-h-[100vh] leading-[5rem] mobile:leading-[2.5rem]  w-[80%] mobile:w-[90%] flex  flex-col items-start justify-center  "
      id="#"
    >
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={pop}
        transition={{
          duration: 0.3,

          delay: 1.5,
        }}
        className="text-primary1 para-nml mobile:text-2xl mobile:mb-4 "
      >
        Hi, my name is
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={pop}
        transition={{
          duration: 0.3,

          delay: 1.8,
        }}
        className="heading1 mobile:text-[2.5rem] font-semibold text-primary2 "
      >
        Vamsi Madugundu.
      </motion.h1>
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={pop}
        transition={{
          duration: 0.3,

          delay: 1.7,
        }}
        className="text-slate mobile:text-[2.5rem] heading1 font-semibold w-[90%] mt-4 "
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={pop}
        transition={{
          duration: 0.3,

          delay: 2,
        }}
        className="text-slate w-[80%] mobile:w-[90%] para-lg  leading-6 mt-4 "
      >
        I{`'`}m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I{`'`}m focused
        on building things for the web.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pop}
        transition={{
          duration: 0.3,

          delay: 2.2,
        }}
        className="mt-4 mobile:mt-8"
      >
        <a href="mailto: vamsimadugundu@gmail.com">
          <PrimaryButton>
            <p className="leading-[2rem] para-lg"> Hire Me ! </p>
          </PrimaryButton>
        </a>
      </motion.div>
    </section>
  );
}

import Link from "next/link";
import BurgerMenu from "./burger/Main";
import Image from "next/image";
import PrimaryButton from "./Common/PrimaryButton";
import { motion } from "framer-motion";
export default function Header() {
  const pop = {
    hidden: { opacity: 0, y: "-100px" },
    visible: { opacity: 1, y: "0px" },
  };

  return (
    <nav className="w-full flex justify-between z-50 items-center h-[10vh] mobile:h-[6vh]  fixed top-0 bg-bg/80  ">
      <Link href="#" className="w-[20%]   flex justify-start ">
        {/* <h1 className="font-semibold text-3xl text-primary2 " >Vamsi Madugundu</h1> */}
        <Image
          className="w-[5rem] mobile:-translate-x-2  h-full object-contain"
          src="/assets/images/logo.png"
          alt="logo"
          width={120}
          height={120}
        />
      </Link>

      <BurgerMenu />

      <ul className="flex w-[60%] justify-center gap-x-10 mobile:hidden">
        <motion.li
          initial="hidden"
          animate="visible"
          variants={pop}
          transition={{
            
            duration: 0.3,
            type: "spring",
            stiffness: "100",
            delay: 0,
          }}
          className="flex items-center justify-center"
        >
          <Link className="" href="#about">
            <span className="text-primary1 text-sm">01.</span> About
          </Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={pop}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: "100",
            delay: 0.3,
          }}
          className="flex items-center justify-center  "
        >
          <Link className="" href="#work">
            {" "}
            <span className="text-primary1 text-sm">02.</span> Experience
          </Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={pop}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: "100",
            delay: 0.6,
          }}
          className="flex items-center justify-center  "
        >
          <Link className="" href="#projects">
            <span className="text-primary1 text-sm">03.</span> Projects
          </Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={pop}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: "100",
            delay: 0.9,
          }}
          className="flex items-center justify-center  "
        >
          <Link className="" href="#contact">
            <span className="text-primary1 text-sm">04.</span> Contact
          </Link>
        </motion.li>
        <motion.li
          initial="hidden"
          animate="visible"
          variants={pop}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: "100",
            delay: 1.2,
          }}
        >
          <a
            href="/assets/files/Vamsi Madugundu.pdf"
            download
            className="flex items-center justify-center  "
          >
            <PrimaryButton>
              <p className="text-sm">Resume</p>
            </PrimaryButton>
          </a>
        </motion.li>
      </ul>
    </nav>
  );
}

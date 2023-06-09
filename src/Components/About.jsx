import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function About() {
  const [isHover, setIshover] = useState(false);
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });
  const show = {
    hidden: { opacity: 0, y: "1000px" },
    visible: { opacity: 1, y: "0px" },
  };

  return (
    <section
      ref={myRef}
      className="min-h-[100vh]  mobile:h-[100vh] h-full  mobile:pt-[4rem]  relative z-10  flex flex-col items-center justify-center w-[80%] mobile:w-[90%]"
      id="about"
    >
      <motion.div
        variants={show}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <div className="w-full  flex items-center">
          <span className="text-primary1 para-lg mr-2 font-light mt-2">
            01.
          </span>
          <h1 className="heading2 font-semibold ">About Me</h1>
          <div className="border-slate/50 w-[30%] ml-4 self-center border-b"></div>
        </div>
        <div className="flex w-full h-full items-start justify-between mobile:flex-col">
          <div className="w-[60%] my-4 text-slate mobile:w-full h-full ">
            <p className=" para-md">
              Hello! My name is Vamsi and I enjoy creating things that live on
              the internet. My interest in{" "}
              <span className="text-primary1 para-md"> web development </span>{" "}
              started back in 2020 when I decided to choose my domain — turns
              out hacking together a custom reblog button taught me a lot about
              HTML, CSS & Javascript !
            </p>
            <p className=" para-md mt-4">
              I have enough skills to build a web application from scratch. I
              can design website and bring it to live with my skillset. Looking
              forward to enhance my professional skills,capabilites and
              knowledge in an organization which recognizes the value of
              hardwork and trusts me with responsibilities and challenges.{" "}
            </p>
            <p className=" para-md mt-4">
              Here are a few technologies I{`'`}ve been working with recently:
            </p>
            <div className="grid grid-cols-2 pl-2">
              <ul className="skills-list flex flex-col  justify-center items-start">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
              <ul className="skills-list flex flex-col justify-center items-start ">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDb</li>
              </ul>
            </div>
          </div>
          <div className="w-[30%] h-full relative mobile:w-[60%] mobile:self-center mobile:mt-4 ">
            <div
              className="w-full  absolute z-10  border rounded-lg aspect-square pt-4 bg-primary1 hover:bg-white"
              onMouseEnter={() => setIshover(true)}
              onMouseLeave={() => setIshover(false)}
            >
              <Image
                src="/assets/images/vmc2.png"
                atl="profile picture"
                height={1524}
                width={1200}
                className="w-full h-auto object-contain aspect-square mix-blend-multiply hover:mix-blend-normal"
              />
            </div>
            <div
              className={`absolute w-[100%]   border border-primary1 rounded-lg z-0 aspect-square ${
                isHover
                  ? "translate-x-4 translate-y-7 "
                  : "translate-x-6 translate-y-9"
              } transition ease-in-out duration-300 `}
            ></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

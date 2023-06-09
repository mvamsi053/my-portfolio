import Image from "next/image";
import { motion,useInView } from "framer-motion";
export default function Project1({myRef}) {
     const isInView = useInView(myRef, { once: true });
     const show = {
       hidden: { opacity: 0, y: "1000px" },
       visible: { opacity: 1, y: "0px" },
     };
  return (
    <motion.div
      variants={show}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 1 }}
      className="flex relative w-full h-[60vh] mobile:h-[50vh] items-center"
    >
      <div className="w-[50%] relative mobile:absolute mobile:w-full flex h-[80%]  items-center overflow-hidden rounded-md bg-primary1 blur-[0.5px] hover:blur-0 hover:bg-none shadow-one">
        <Image
          className="w-full h-full object-fill mix-blend-multiply hover:mix-blend-normal bg-transparent"
          src="/assets/images/hrms.png"
          alt="aptagrim"
          height={665}
          width={1357}
        />
      </div>
      <div className="flex  relative h-[75%] mobile:bg-navy/80 mobile:rounded-md mobile:h-[80%] mobile:w-full flex-col w-[50%]  items-end justify-center ">
        <div className="top-0 mobile:static absolute text-right mobile:pr-4 ">
          <p className="text-primary1 para-sm"> Industry Project</p>
          <h1 className="heading2 font-semibold">AptaHr (HRMS)</h1>
        </div>

        <div className="bg-navy absolute mobile:static w-[120%] mobile:w-full z-10">
          <ul className="text-right p-6 mobile:pr-4 text-slatelite rounded-xl shadow-two leading-[1.8rem]">
            <li className="para-nml">
              Its an all-in-one{" "}
              <span className="text-primary1">HR Management </span> application,{" "}
            </li>
            <li className="para-nml">
              Developed key functionalities which includes{" "}
              <span className="text-primary1">Meetings, Email</span> etc,{" "}
            </li>
            <li className="para-nml">
              Led troubleshooting, fixed{" "}
              <span className="text-primary1">200+</span> bugs and other issues,
            </li>
            <li className="para-nml">
              {" "}
              Partnered with designers and back-end team in development.
            </li>
          </ul>
        </div>
        <div className="absolute bottom-2 mobile:static mobile:pr-4 flex flex-col items-end gap-y-2 ">
          <ul className="flex text-slatelite  gap-x-4">
            <li className="para-nml">React</li>
            <li className="para-nml">Tailwind Css</li>
            <li className="para-nml">React Query</li>
            <li className="para-nml">Mantine</li>
          </ul>
          <motion.a
            href="https://collaborate.aptagrim.com"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            className="w-[1.5rem] h-[1.5rem] block overflow-hidden self-end"
          >
            <motion.svg
              whileHover={{ stroke: "#64ffda" }}
              className="w-full h-auto object-contain"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-external-link"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

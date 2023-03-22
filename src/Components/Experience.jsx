import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Experience() {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true});
  const show = {
    hidden: { opacity: 0, y: "1000px" },
    visible: { opacity: 1, y: "0px" },
  };

  return (
    <section
      ref={myRef}
      className="min-h-[100vh] relative z-10 mobile:pt-[4rem] flex flex-col items-center justify-center w-[80%] mobile:w-[90%] "
      id="work"
    >
      <motion.div
        variants={show}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <div className="w-full  flex items-center ">
          <span className="text-primary1 para-lg mr-2 font-light mt-2 ">
            02.
          </span>
          <h1 className="heading2 font-semibold  ">Where I{`'`}ve Worked</h1>
          <div className="border-slate/50 w-[30%] ml-4 mobile:ml-2 mobile:w-[10%] self-center border-b"></div>
        </div>
        <div className="flex w-full flex-col pl-[5%] mt-4 ">
          <div className="flex w-full mobile:flex-col  mobile:justify-center items-start gap-x-4 mobile:gap-y-4">
            <span className="text-primary1 para-nml mobile:border-b-2 mobile:border-l-0  mobile:px-4  mr-2  font-light border-l-2 border-primary1 p-2 bg-[#112240]">
              Aptagrim
            </span>
            <div className="flex flex-col w-full">
              <h1 className="para-lg font-semibold ">
                Front-end Developer Intern
              </h1>
              <p className="para-sm text-slate para-sm">
                November 2022 - Present
              </p>
              <ul className="skills-list flex flex-col justify-center items-start text-slate  list-outside leading-8  pl-2 ">
                <li className="para-md">
                  Working with{" "}
                  <span className="text-primary1">
                    ReactJs ,NextJs Tailwind CSS, React Query{" "}
                  </span>{" "}
                  etc,
                </li>
                <li className="para-md">
                  Developed <span className="text-primary1">SEO friendly</span>{" "}
                  company website with correct technology process,industry best
                  practices and company standards .{" "}
                </li>

                <li className="para-md">
                  Assisted the development team in developing{" "}
                  <span className="text-primary1">5+ </span> web applications.
                </li>
                <li className="para-md">
                  Led troubleshooting, fixed{" "}
                  <span className="text-primary1">200+</span> bugs and other
                  issues.
                </li>
                <li className="para-md">
                  Worked in an <span className="text-primary1">Agile</span>,
                  collaborative environment to receive design requirements ,peer
                  program and test applications.
                </li>
                <li className="para-md">
                  Partnered with designers and back-end team in development.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

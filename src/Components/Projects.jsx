import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
import Project4 from "./projects/Project4";
import Project5 from "./projects/Project5";
import { useRef } from "react";
export default function Projects() {
  const myRef = useRef(null);
  return (
    <section
      ref={myRef}
      className="min-h-[100vh] relative z-10 mobile:pt-[4rem] flex flex-col items-center justify-center pt-[8rem] w-[80%] mobile:w-[90%]"
      id="projects"
    >
      <div className="w-full  flex items-center">
        <span className="text-primary1 para-lg mr-2 font-light mt-2">03.</span>
        <h1 className="heading2 font-semibold mobile:text-3xl">
          Some Things I{`'`}ve Built
        </h1>
        <div className="border-slate/50 w-[30%] mobile:w-[8%] mobile:ml-2 ml-4 self-center border-b"></div>
      </div>
      <div className="w-full flex flex-col gap-y-10 ">
        <Project1 myRef={myRef} />
        <Project2 myRef={myRef} />
        <Project3 myRef={myRef} />
        <Project4 myRef={myRef} />
        <Project5 myRef={myRef} />
      </div>
    </section>
  );
}

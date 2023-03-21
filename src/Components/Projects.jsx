import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
import Project4 from "./projects/Project4";
import Project5 from "./projects/Project5";


export default function Projects()
{
  
return<section className="min-h-[90vh] relative z-10  flex flex-col items-center justify-start w-[80%]" id="projects" >
 <div className="w-full  flex items-center" >
            <span className="text-primary1 para-lg mr-2 font-light mt-2" >03.</span>                                                                                                                                                                                                                                                                                                        
            <h1 className="heading2 font-semibold " >Some Things I{`'`}ve Built</h1>
            <div className="border-slate/50 w-[30%] ml-4 self-center border-b" ></div>
        </div>
        <div className="w-full flex flex-col gap-y-10 ">
            <Project1/>
            <Project2/>
            <Project3/>
            <Project4/>
            <Project5/>
        </div>
</section>
}
import Image from "next/image"
import {motion} from "framer-motion"
export default function Project2(){
    return<div className="flex flex-row-reverse relative w-full h-[60vh]  items-center" >
        <div className="w-[50%] relative flex h-[80%] items-center overflow-hidden rounded-md bg-primary1 blur-[0.5px] hover:blur-0 hover:bg-none shadow-one" >
            <Image 
            className="w-full h-full object-fill mix-blend-multiply hover:mix-blend-normal bg-transparent"
            src="/assets/images/aptagrim.png" 
            alt="aptagrim" 
            height={665}
             width={1357}  />
        </div>
        <div className="flex  relative h-[75%] flex-col w-[50%] items-start justify-center " >
            <div className="top-0 absolute text-left  ">
                <p className="text-primary1 para-sm" > Industry Project</p>
            <h1 className="heading2 font-semibold" >Aptagrim website</h1>
            </div>
            
            <div className="bg-navy absolute w-[120%]  z-10">
                <ul className="text-left p-6 text-slatelite rounded-xl  shadow-two leading-[1.8rem]">
                    
                    

                    <li className="para-nml"  >A <span className="text-primary1">responsive</span> and <span className="text-primary1" > SEO</span>  friendly website, </li>
                    <li className="para-nml" >Followed industry best practices and company standards ,</li>
                    <li className="para-nml" > <span className="text-primary1" >Image optimizations</span> and lot more ,  </li>
                    <li className="para-nml" >Implemented <span className="text-primary1" > pixel-perfect</span> UI design . </li>
                   
                </ul>

            </div>
            <div className="absolute bottom-2 flex flex-col items-start gap-y-2">
            <ul className="flex text-slatelite  gap-x-4" >
                
                <li  className="para-nml"  >Next.js</li>
                <li className="para-nml" >Tailwind Css</li>
                <li className="para-nml" >Axios</li>
                <li className="para-nml" >Framer motion</li>
            </ul>
            <motion.a href="https://www.aptagrim.com" whileHover={{scale:1.1}} target="_blank" className="w-[1.5rem] h-[1.5rem] block overflow-hidden self-start">
                <motion.svg whileHover={{stroke:"#64ffda"}} className="w-full h-auto object-contain" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></motion.svg>
            </motion.a>
            
            </div>
        </div>

    </div>
}
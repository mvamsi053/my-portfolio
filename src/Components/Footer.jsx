import {motion} from "framer-motion";
export default function Footer()
{
    const variants={
        hidden:{stroke:"#8892b0"},
        visible:{stroke:""}
    }
    
    return<div className="fixed top-[50vh] w-[100%] h-full" >
       
        <div className="flex flex-col items-center justify-center  gap-y-6 absolute h-full left-0 " >
                 <motion.a href="https://github.com/mvamsi053" target="_blank" className="w-[1.5rem] overflow-hidden " whileHover={{ scale: 1.1 }}  >
                   
                   <motion.svg className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github" whileHover={{stroke:"#64ffda"}} ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></motion.svg>
                 </motion.a>
                 <motion.a href="https://linkedin.com/in/vamsi-madugundu-1a1734249" target="_blank" className="w-[1.5rem]" whileHover={{scale:1.1}} >
                  <motion.svg whileHover={{stroke:"#64ffda"}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></motion.svg>
                </motion.a>
                <motion.a href="https://instagram.com/vamsi_maridi" target="_blank" className="w-[1.5rem] overflow-hidden " whileHover={{scale:1.1}} >
      <motion.svg whileHover={{stroke:"#64ffda"}} xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></motion.svg>
                </motion.a>
                <div className="border h-[60%] border-slate " >

                </div>
        </div>
        <div className="flex flex-col items-center justify-center  gap-y-6 absolute h-full right-0 " >
                
                <div className=" rotate-90 relative mb-[50%]  hover:scale-105 transition  ease-in-out duration-200 " >
                    <a href = "mailto: vamsimadugundu@gmail.com" className="text-slate para-sm hover:text-primary1  " >vamsimadugundu@gmail.com</a>
                </div>
                <div className="border  h-[60%] border-slate relative " >

                </div>
        </div>
       
    </div>
}
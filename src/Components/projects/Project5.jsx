import Image from "next/image"
import {motion} from "framer-motion"
export default function Project5(){
    return<div className="flex relative w-full h-[60vh]  items-center" >
        <div className="w-[50%] relative flex h-[80%] items-center overflow-hidden rounded-md bg-primary1 blur-[0.5px] hover:blur-0 hover:bg-none shadow-one" >
            <Image 
            className="w-full h-full object-fill mix-blend-multiply hover:mix-blend-normal bg-transparent"
            src="/assets/images/shoppingCart.png" 
            alt="aptagrim" 
            height={665}
             width={1357}  />
        </div>
        <div className="flex  relative h-[75%] flex-col w-[50%] items-end justify-center " >
            <div className="top-0 absolute text-right ">
                <p className="text-primary1 para-sm" > Personal Project</p>
            <h1 className="heading2 font-semibold" >Shopping Cart</h1>
            </div>
            
            <div className="bg-navy absolute w-[120%]  z-10">
                <ul className="text-right p-6 text-slatelite rounded-xl w-full h-full shadow-two leading-[1.8rem]">
                    <li className="para-nml"  >A web application build with  <span className="text-primary1">ReactJs</span> , </li>
                    <li className="para-nml" >Used <span className="text-primary1" >Contex Api</span> , <span className="text-primary1" >useReducer</span>  hooks to achieve functionalities ,</li>
                    <li className="para-nml" >Used <span className="text-primary1">Bootstrap </span> for styling .</li>
                   
                   
                </ul>

            </div>
            <div className="absolute bottom-2 flex flex-col items-end gap-y-2">
            <ul className="flex text-slatelite  gap-x-4" >
                <li  className="para-nml">React</li>
                <li className="para-nml" >Bootstrap</li>
                <li className="para-nml" >Css</li>
                
                
            </ul>
            <div className="w-full justify-end flex gap-x-3">
           
            <motion.a href="https://react-shopping-cart-vamsim.netlify.app" whileHover={{scale:1.1}} target="_blank" className="w-[1.5rem] h-[1.5rem] block overflow-hidden self-start">
                <motion.svg whileHover={{stroke:"#64ffda"}} className="w-full h-auto object-contain" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>Deployment link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></motion.svg>
            </motion.a>
             <motion.a href="https://github.com/mvamsi053/ReactJs_shopping_cart" target="_blank" className="w-[1.5rem] overflow-hidden  block" whileHover={{ scale: 1.1 }}  >
                   
                   <motion.svg className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github" whileHover={{stroke:"#64ffda"}} ><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></motion.svg>
                 </motion.a>
            </div>
            
            </div>
        </div>

    </div>
}
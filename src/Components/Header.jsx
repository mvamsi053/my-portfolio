import Link from "next/link"
import BurgerMenu from "./burger/Main"
import Image from "next/image"
import PrimaryButton from "./Common/PrimaryButton"
export default function Header() {
  return <nav className="w-full flex justify-between z-50 items-center h-[10vh] mobile:h-[6vh]  fixed top-0 bg-bg/80  " >
     
     <div className="w-[20%] text-center " >
        {/* <h1 className="font-semibold text-3xl text-primary2 " >Vamsi Madugundu</h1> */}
        <Image className="w-[5rem] mobile:w-[10rem]  h-auto object-contain" src="/assets/images/logo.png" alt="logo" width={100} height={100}/>
     </div>
     
     <BurgerMenu/>
   
     
            <ul className="flex w-[60%] justify-center gap-x-10 mobile:hidden ">
                <li className="flex items-center justify-center"  >
                    <Link className="" href="#about"><span className="text-primary1 text-sm" >01.</span> About</Link>
                </li>
                <li className="flex items-center justify-center  ">
                   <Link className="" href="#work"> <span className="text-primary1 text-sm" >02.</span> Experience</Link>
                </li>
                <li className="flex items-center justify-center  ">
                    <Link className="" href="#projects"><span className="text-primary1 text-sm" >03.</span> Projects</Link>
                </li>
                 <li className="flex items-center justify-center  ">
                    <Link className="" href="#"><span className="text-primary1 text-sm" >04.</span> Contact</Link>
                </li>
                <li className="flex items-center justify-center  ">
                    <PrimaryButton>
                        <button className="text-sm">Resume</button>
                    </PrimaryButton>
                
                </li>
              
            </ul>
        
  </nav>
}

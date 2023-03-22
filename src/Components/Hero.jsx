import PrimaryButton from "./Common/PrimaryButton";

export default function Hero() {
  return <section className="relative z-10 h-[100vh] leading-[5rem] mobile:leading-[2.5rem]  w-[80%] mobile:w-[90%] flex  flex-col items-start justify-center  " id="#" >
        
           
               <h1 className="text-primary1 para-nml mobile:text-2xl mobile:mb-4 ">Hi, my name is</h1>
                <h1 className="heading1 mobile:text-[2.5rem] font-semibold text-primary2 ">Vamsi Madugundu.</h1>
                <h2 className="text-slate mobile:text-[2.5rem] heading1 font-semibold w-[90%] mt-4 ">I build things for the web.</h2>
                <p className="text-slate w-[80%] mobile:w-[90%] para-lg  leading-6 mt-4 ">I{`'`}m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I{`'`}m focused on building  things for the web.</p>
               <div className="mt-4 mobile:mt-8" >
                <PrimaryButton>
                  <a href = "mailto: vamsimadugundu@gmail.com" className="leading-[2rem] para-lg" > Hire Me ! </a>
                </PrimaryButton>
               </div>
                   
               
               
          
          </section>
}

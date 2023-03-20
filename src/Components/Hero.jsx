import PrimaryButton from "./Common/PrimaryButton";

export default function Hero() {
  return <section className="relative z-10 h-[100vh] leading-[5rem]  w-[80%]  flex  flex-col items-start justify-center  " id="#" >
        
           
               <h1 className="text-primary1 para-nml">Hi, my name is</h1>
                <h1 className="heading1 font-semibold text-primary2">Vamsi Madugundu.</h1>
                <h1 className="text-slate heading1 font-semibold text-[4rem] w-[90%] mt-4">I build things for the web.</h1>
                <p className="text-slate w-[80%] para-lg leading-6 mt-4">I{`'`}m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I{`'`}m focused on building  things for the web.</p>
               <div className="mt-4" >
                <PrimaryButton>
                  <a href = "mailto: vamsimadugundu@gmail.com" className="leading-[2rem]" > Hire Me ! </a>
                </PrimaryButton>
               </div>
                   
               
               
          
          </section>
}

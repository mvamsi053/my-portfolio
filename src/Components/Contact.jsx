import PrimaryButton from "./Common/PrimaryButton"
export default function Contact()
{
    return<section className="h-full mobile:min-h-[60vh] min-h-[90vh] relative z-10  flex flex-col gap-y-2 mobile:gap-y-4 items-center justify-center w-[80%]" id="about" >
        <div className="w-full  flex items-center flex-col justify-center " >
            <span className="text-primary1 para-lg mr-2 font-light mt-2 mobile:mb-4" >04.What{`'`}s Next?</span>                                                                                                                                                                                                                                                                                                        
            <h1 className="heading1 font-semibold mobile:text-5xl" >Get In Touch</h1>
            
        </div>
        <div className="w-[50%] mobile:w-[90%]">
            <p className="para-lg text-slate text-center">I{`'`}m  currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I{`'`}ll try my best to get back to you!</p>
        </div>
        <div className="mt-4">
            <PrimaryButton>
                  <a href = "mailto: vamsimadugundu@gmail.com" className="leading-[2rem] para-lg" > Say Hello </a>
                </PrimaryButton>
        </div>
        
        

    </section>
}
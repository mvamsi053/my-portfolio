export default function PrimaryButton({children})
{
    return<div className="hover:bg-primary1/20 border py-[0.5em] px-[1em] mobile:w-[20rem] mobile:py-[1em]   border-primary1 rounded-md cursor-pointer text-primary1 flex justify-center items-center h-fit w-fit ">
        {
            children
        }
    </div>
}
"use client"
import Link from "next/link";

 
const error = ({error, reset}:{error:Error; reset:()=>void}) => {
    return (
        <div className="grid min-h-full place-items-center px -6 py-24 sm:py-32 lg:px-8 bg-slate-800">
            <div className="text-center">
                <p className="text-base font-semibold text-emerald-700 dark:text-emerald-500" >
                    There was a problem
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white" >
                    {error.message || 'Something went wrong'}

                </h1>
                <p className="mt-6 text-base leading-7 text-white dark:text-white">
                    Please try again later of contact support if the problem persists
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 text-emerald-400">
                    <button  onClick={reset}>Try again</button>
                    <Link href={"/"}>
                        Go back home
                    </Link>
                </div>
            </div>
        </div>
      );
}
 
export default error;
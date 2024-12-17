import CaeserCipher from "@/components/caeser";
import Link from "next/link";


export default function Home(){
  return (
    <>
      
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col w-1/2 gap-5">
          <CaeserCipher />
        </div>

        <div className="mt-10">
          <p className="text-green-400 font-roboto-mono" >designed and developed by <Link className="underline " href="https://lawsimiyu.netlify.app">©Law</Link> </p>
        </div>

      </div>
    </>
  )
}
import CaeserCipher from "@/components/caeser";


export default function Home(){
  return (
    <>
      
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col w-1/2 gap-5">
          <CaeserCipher />
        </div>

      </div>
    </>
  )
}
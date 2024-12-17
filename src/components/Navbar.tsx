import Link from "next/link";

export default function Navbar (){
    return(
        <>
        <div className="flex flex-row justify-between p-5">
            <p className="text-3xl text-green-500 font-black font-roboto-mono">ENCRYPTO</p>

            <div className="flex flex-row">
                <Link 
                className="text-green-500 font-roboto-mono hover:underline underline-offset-1"
                href="/">Ceaser Cipher</Link>
            </div>
        </div>
        </>
    )
}
import Link from "next/link"
export default function form(){
    return(
        <div>
            <h1 className="text-5xl font-semibold text-center uppercase"> Enter your details</h1>
            <div >
            <form className=" mt-10 flex gap-5 justify-center items-center flex-col bg-red-500 h-96">
                <input required type ="Email" className="p-2 rounded-2xl w-2/5 border border-slate-800" placeholder= "Enter your Email"/>
                <input required type = "password" className= "p-2 rounded-2xl w-2/5 border border-slate-800" placeholder = "Enter your password"/>
               <Link href = "./thanku">
                <button className=" rounded-2xl py-3 px-8 bg-blue-700 hover hover:bg-blue-400 text-white ">Place your order</button>
            </Link>
            </form>
        </div>
        </div>
    )
}
import Image from "next/image"
import logo from "/logo.png"
export default function Navbar(){
    return(
      
        <nav className="flex sticky justify-evenly bg-black w-full py-2 px-4">
          <div className="py-4 justify-start">
          <Image src="/pakwheellogo.svg"
          alt="logo"
          width={200}
          height={100}
          />
          </div>
          
        
            <div className="flex text-white justify-center items-end py-6 px-4 gap-6">
              <div className=""> used Cars</div>
              <div className=" ">New Cars</div>
              <div className="">Bikes</div>
              <div className="">Auto Store</div>
              <div className=""> Videos</div>
              <div className=""> Forums</div>
              <div className=""> Blogs</div>
              <div className=""> More</div>
              <div className="py-2 rounded-lg px-8 bg-red-600 hover hover:bg-red-900 text-white">
              <button>Post an Ad</button>
              </div>
            </div>
          </nav> 
    )
    };
    

    

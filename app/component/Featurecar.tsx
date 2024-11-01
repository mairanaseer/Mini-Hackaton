import Image from "next/image"
import Link from "next/link"
export default function Featurecar(){
    return(
        <div>
            <div><h1>FEATURE NEW CAR</h1></div>
            <div className="h-96 w-full bg-black gap-6 flex flex-row py-4 px-24">
                <div className="h-72 bg-white w-60">
            <div className="h-60 w-full bg-red-700">
                <Link href="./car1">
                <Image src ="/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg"
                height={60}
                width={100}
                alt="car"
                    />
                </Link>
                <div className="flex justify-center flex-col font-semibold px-5"><h2>TOYOTA COROLLA</h2>
                <h3 className="text-green-500">PKR 59.7 75.5 LAC</h3></div>
                </div>
                </div>

                
                <div className="h-72 bg-white w-60">
            <div className="h-60 w-full bg-red-700">
                <Link href="./car2">
                <img src ="/OIP.jpeg" className="h-60 w-full">
                    </img>
                </Link>
                <div className="flex justify-center flex-col font-semibold px-5"><h2>SUZUKI ALTO</h2>
                <h3 className="text-green-500">PKR 23.3 30.5 LAC</h3></div> 
                </div>
                </div>
                

                <div className="h-72 bg-white w-60">
            <div className="h-60 w-full bg-red-700">
                <Link href="./car3">
                <img src ="/OIF.jpeg" className="h-60 w-full">
                    </img>
                </Link>
                <div className="flex justify-center flex-col font-semibold px-5"><h2>HONDA CITY</h2>
                <h3 className="text-green-500">PKR 46.5 58.5 LAC</h3></div> 
                </div>
                </div>

                <div className="h-72 bg-white w-60">
            <div className="h-60 w-full bg-red-700">
                <Link href="./car4">
                <img src ="/Cover.jpg" className="h-60 w-full">
                    </img>
                </Link>
                <div className="flex justify-center flex-col font-semibold px-5"><h2>HONDA CIVIC</h2>
                <h3 className="text-green-500">PKR 86.6 99.0 LAC</h3></div> 
                </div>
                </div>

            </div>
            </div>
    
    )
}
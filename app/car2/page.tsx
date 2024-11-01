import Link from "next/link"
import Image from "next/image"
export default function car2(){
    return(
        <div>
        <div className="flex justify-center items-center my-20 ">
            <h1 className="text-3xl underline font-bold">Suzuki Alto 2024 Price in Pakistan,images,reviews and speces</h1></div>
            <div className="flex justify-center my-20">
                <img src ="/OIP.jpeg" className="h-80 w-70"/>
            </div>
            <div className="flex justify-center space-x-4">
             <button className="bg-blue-800 text-white py-4 px-8 rounded-md">Book a test Drive</button>
             <button className="bg-transparent hover hover:bg-blue-200 text-blue-800 rounded-md py-3 px-6 border-solid border-2 border-blue-950">Request a bank finance</button>
             <button className="bg-transparent hover hover:bg-blue-200 text-blue-800 rounded-md py-2 px-6 border-solid border-2 border-blue-950">Visit place</button>
             <button className="bg-transparent hover hover:bg-blue-200 text-blue-800 rounded-md py-3 px-6 border-solid border-2 border-blue-950">Car inspection</button>
             </div>
             <div className="flex justify-center space-x-2 py-5">
                <div className="font-bold">Number of Doors</div>
             <div>4</div>
             <div className="font-bold">Engine</div>
             <div>1800 cc</div>
             <div className="font-bold">condition</div>
             <div>8.5 / 10</div>
             <div className="font-bold">Driven</div>
             <div>9,500 km</div>
             <div className="font-bold">Suspension type </div>
             <div>Soft suspension</div>
             <div className="font-bold">AVG</div>
             <div>13 per km ltr</div>
             <div className="font-bold">Transmission</div>
             <div>Automatic</div>
             <div className="font-bold">Fuel Type</div>
             <div>High Octane</div>
            </div>
            <div className="flex justify-center py-4">
                <div className="text-green-700 font-2xl">PKR 23.3 30.5</div>
            </div>
            <div className="justify-center flex ">
                <Link href="./form">
                <button className="py-3 px-6 bg-blue-600 text-white hover hover:bg-blue-300 rounded-md">Make Payment
                </button>
                </Link>
            </div>
    </div>
             
        
    )
}
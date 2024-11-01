  export default function Herosection (){
   return(
      <div className=" min-h-screen h-40 mb-2 mt-8 flex justify-center bg-white">
        <div className=" w-full px-2 max-w-4xl">
         <h1 className="py-1 font-bold text-center mb-8 text-4xl w-full">
            Sell Your Car On PakWheels and Get the Best Price
         </h1>
         <div className="flex justify-center items-center gap-8">
            <div className="w-1/2 pl-4 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Post Your Ad on PakWheels</h2>
            <ul className="space-y-2">
               <li>Post your ad for Free in 3 Easy Steps</li>
               <li> Get Geniune offers from Verified Buyers</li>
               <li>Sell Your car Fast at the Best Price</li>
            </ul>
            <button className="mt-4 bg-red-700 hover hover:bg-red-900 text-white px-6 py-3  rounded-lg">
               Post Your Ad
            </button>
            </div>
            
            <div className="w-1/2 pl-4 text-left">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Try PakWheels Sell It For Me</h2>
            <ul className="space-y-2">
               <li>Dedicates Sales Experts To Sell Your Car</li>
               <li>We Bargin For You And Share The Best offer</li>
               <li>we Ensure safe & Secure Transaction</li>
            </ul>
            <button className="mt-4 bg-blue-700 hover hover:bg-blue-900 text-white px-6 py-3  rounded-lg">
               Register Your Car
            </button>
         </div>
          </div>
        </div>
         </div>    
   
   )
}
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import {shopPageData} from "../../data/shopPageData/shopPageData"
export const ShopPageCategories = ()=>{


    return (<>
    
    <div className="flex flex-col items-center gap-5  md:px-10 py-2 bg-gray-1 ">

        <div className=" flex flex-col gap-4 md:flex-row md:w-full  md:justify-between items-center ">
            <h1 className="text-text font-bold text-2xl">Shop</h1>
            <nav className="flex items-center gap-3 text-base">
                <Link to="/" className="text-black font-semibold">Home</Link>
                <span className="text-gray-400">&gt;</span>
                <span className=" text-black">Shop</span>
            </nav>

        </div>
       
         <div className="flex flex-col md:flex-row items-center gap-5 md:gap-2">
        
            {shopPageData.imgs.map((category=>(
                <div className="relative mx-5 md:mx-0">
                <img
                key={category.id}
                className="h-[300px] w-full  object-cover"
                src={category.img}
                alt=""
                />

                <div className="absolute inset-0 bg-black/25"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center  text-white gap-5">
                        <p className=" font-semibold text-xl">CLOTHS</p>
                        <p className=" font-semibold text-xl">5 items</p>
                    </div>
                 </div>

            )))

            }
            </div>
        

    </div>
    </>)
}
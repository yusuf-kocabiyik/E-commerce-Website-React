
import { shopCardsData } from "../../data/homePageData/shopCardsData"
export const ShopCards = ()=>{


    return(
        <main className="flex flex-col gap-6 my-6 mx-auto w-auto md:w-250 ">
            {/*Title */}
            <div className="text-center">
                <h2 className="text-text text-2xl font-bold ">{shopCardsData.title.title}</h2>
                <p className="text-secondText mx-auto w-50">{shopCardsData.title.text}</p>
            </div>
            {/*Cards */}
            <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-2">
                {/*card 1 */}
                <div className="relative px-8 md:px-0 md:w-130 ">
                    <img className= "w-full h-120" src={shopCardsData.men.img} alt="men" />
                    <div className="absolute bottom-8 left-14 bg-white px-6 py-2  md:left-6">
                        <a href="#" className="text-base font-semibold">{shopCardsData.men.title}</a>
                    </div>

                </div>
                <div className="relative px-8 md:px-0 md:w-60">
                    <img className= "w-full h-120 md:object-cover" src={shopCardsData.women.img} alt="women" />
                    <div className="absolute bottom-8 left-14 bg-white px-6 py-2 md:left-6">
                        <a href="#" className="text-base font-semibold">{shopCardsData.women.title}</a>
                    </div>

                </div>

                <div className=" flex px-8 md:px-0 flex-col  gap-8 w-full md:w-auto md:gap-4">

                    <div className=" w-full relative md:px-0 md:h-58" >
                        <img className= "w-full h-60 object-cover" src={shopCardsData.accessories.img} alt="accessories"/>
                        <div className="absolute bottom-8 left-6 bg-white px-6 py-2 md:left-6">
                            <a href="#" className="text-base font-semibold">{shopCardsData.accessories.title}</a>
                        </div>
                    </div>
                    <div className="w-full relative md:px-0" >
                        <img className= "w-full h-60 object-cover md:h-58" src={shopCardsData.kids.img} alt="kids"/>
                        <div className="absolute bottom-8 left-6 bg-white px-6 py-2 md:left-6">
                            <a href="#" className="text-base font-semibold">{shopCardsData.kids.title}</a>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}
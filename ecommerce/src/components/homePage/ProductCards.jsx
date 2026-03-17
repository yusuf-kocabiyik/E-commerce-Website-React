import { productCardsData } from "../../data/homePageData/productCardsData"
import { ProductCartItem } from "./ProductCartItem"

export const ProductCards = ()=>{
    const products =productCardsData.products


    return(
        <main className="flex flex-col gap-6 my-8 py-4 px-8 md:w-300 mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-secondText text-2xl font-normal">Featured Products</h2>
                <h1 className="text-text text-3xl font-bold w-50" >BESTSELLER PRODUCTS</h1>
                <p className="text-secondText text-lg font-normal w-70">Problems trying to resolve the conflict between </p>
            </div>

            <ProductCartItem products={products} />

        </main>
    )
}
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/actions/cartActions";
import  HomeSlider1  from "../components/homePage/HomeSlider1";
import React from 'react';
import { ShopCards } from "../components/homePage/ShopCards";
import { ProductCards } from "../components/homePage/ProductCards";
import HomeSlider2 from "../components/homePage/HomeSlider2";
import { Blog1 } from "../components/homePage/Blog1";
import { Blogs } from "../components/homePage/Blogs";



export const HomePage = () => {

    const dispatch = useDispatch();
    const items = useSelector((store)=> store.cart.items);
    ///redux denendi ve çalışıyor.

    return (

        <>
            <HomeSlider1/>

            {/*
            REDUX İÇİN DENEME DE KULLANDIM.
            <div>
                <button onClick={()=>dispatch(addToCart({id:1,name:"tshirt"}))}>
                    Add
                </button>
                <div className="mt-4 text-sm">{JSON.stringify(items)}</div>
            </div>*/}
            <ShopCards/>
            <ProductCards/>
            <HomeSlider2/>
            <Blog1/>
            <Blogs/>
            
        </>
    )
}
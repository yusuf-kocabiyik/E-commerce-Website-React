
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import {homeSliderData} from "../../data/homePageData/homeSliderData.js"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HomeSlider2() {
   
    /* bg-position-[-15rem] */
    
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      spaceBetween={0}
      
      pagination={{ clickable: true }}
      navigation
      className="w-full h-[800px] md:h-[640px] "
      style={{
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  }}
    >
      {homeSliderData.homeSlider2.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="
              w-full h-full relative
               bg-secondary bg-[position:2rem_23rem] bg-no-repeat bg-[length:80%_auto] md:bg-[length:30%_auto] 
              flex items-center px-10 md:px-20  md:bg-no-repeat  md:bg-[position:90%_30%]
            "
            style={{ 
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay content */}
            <div
              className="
                px-6 absolute top-8 md:top-auto
                flex flex-col items-center md:items-start gap-6 
                text-white
                max-w-xs
              "
            >
              <span className="text-sm md:text-lg md:w-70 tracking-widest uppercase">
                {slide.season}
              </span>

              <h2 className="text-5xl md:text-7xl w-80 md:w-160 text-center md:text-start font-semibold ">
                {slide.title}
               
              </h2>

              <p className="text-lg w-60 md:w-110 text-center md:text-start text-white/90">
                {slide.description}
              </p>

              <button className="bg-success text-white px-6 py-3 text-lg rounded-lg font-semibold w-50">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

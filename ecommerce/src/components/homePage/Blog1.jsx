import { blogData } from "../../data/homePageData/blogData"

export const Blog1 =()=>{

    return(
        <main className="flex flex-col md:flex-row-reverse md:justify-center md:items-center gap-5 my-8 py-4 px-8 md:px-0 md:gap-5 md:w-auto ">
            <div className="flex flex-col text-center gap-4 md:w-110 ">
                <h2 className="text-muted font-bold text-lg">{blogData.blog1.season}</h2>
                <h1 className="text-text font-bold text-[40px]">{blogData.blog1.title}</h1>
                <p className="text-secondText font-bold text-[20px] w-70 text-center mx-auto">{blogData.blog1.text}</p>
                <div className="flex flex-col items-center text-center gap-4 md:flex-row md:gap-2 justify-center " >
                    <button className="bg-primary text-white w-40 h-14  font-bold text-base rounded-lg">{blogData.blog1.button1}</button>
                    <button className="text-primary border-2 border-primary w-40 h-14  font-bold text-base rounded-lg">{blogData.blog1.button2}</button>
                </div>

            </div>

            <div className="md:w-120">
                <img  className =" scale-105 md:scale-110 " src={blogData.blog1.img} alt="" />

            </div>
            
            

            

        </main>
    )
}
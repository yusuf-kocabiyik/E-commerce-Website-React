import { blogData } from "../../data/homePageData/blogData"
import { BlogItem } from "./BlogItem"
export const Blogs = ()=>{
    const blogs = blogData.blogs

    return(
         <main className="flex flex-col gap-6 my-8 py-4 px-8  mx-auto md:justify-center">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="text-primary text-lg font-bold">Practice Advice</h2>
                        <h1 className="text-text text-3xl font-bold w-50" >Featured Products</h1>
                        <p className="text-secondText text-lg font-normal w-70">Problems trying to resolve the conflict between </p>
                    </div>
        
                <BlogItem blogs={blogs} />
        
                </main>



    )
}
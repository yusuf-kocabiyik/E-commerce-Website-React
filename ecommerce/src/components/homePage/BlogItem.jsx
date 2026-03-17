import { AlarmClock } from 'lucide-react';
import { MessageSquare } from 'lucide-react';


export const BlogItem =({blogs})=>{
    
    return(<div className='flex flex-col gap-8  md:gap-3 md:flex-row  md:justify-center md:mx-auto md:w-80  '> 

        {
            blogs.map((blog)=>(

                <div className="flex flex-col gap-4 shadow-lg py-2 px-2 items-center" key={blog.id}>
                    <img className='w-80 h-75 md:min-w-70 md:max-h-70' src={blog.img} alt="blog" />
                    <div className="flex w-full px-2 justify-start gap-2 ">
                        <a className="text-disabled-element" href="">Google</a>
                        <a className='text-secondText' href="">Trending</a>
                        <a className='text-secondText' href="">New</a>
                    </div>
                   
                    <h2 className="text-text px-2 w-full font-bold text-lg">{blog.title}</h2>
                    <h3 className="text-secondText px-2 w-full  font-bold text-sm ">{blog.text}</h3>
                       
                     <div className="flex justify-between px-2 w-full ">
                        <p className='flex gap-1'><AlarmClock className='text-primary' />{blog.date}</p>
                        <p className='flex gap-1'><MessageSquare className='text-secondary' />{blog.comment}</p>
                    </div>   
                    

                    
                </div>
            )
            )

        }
    </div>)
}
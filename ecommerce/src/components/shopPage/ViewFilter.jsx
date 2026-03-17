
import { ChevronDown, LayoutGrid,List  } from 'lucide-react';
import { useState } from 'react';

export const ViewFilter = ()=>{
    const [isOpen,setIsOpen] = useState(false);
    const [filterOption,setFilterOption] = useState("Popularity") 
    const options=[
        "Popularity",
        "Price: Low to High",
        "Price: High to Low",
        "Newest"
    ];

    return(
    <div className="flex flex-col md:flex-row md:w-full md:gap-5 md:mx-auto md:justify-between md:px-10 gap-10 my-10 text-center text-secondText font-semibold">
        <p className='text-lg flex justify-center items-center-safe'>Showing all 12 results</p>
        <div className='flex justify-center items-center gap-4'>
            <p className='text-center my-auto text-lg'>Views:</p>
            <LayoutGrid size={40} strokeWidth={1.5} fill="black" className=' border-1 rounded-md p-2'/>
            <List size={40} strokeWidth={1.5} fill="black" className=' border-1 rounded-md p-2'/>
        </div>

        <div className=' flex flex-row  gap-4 md:gap-0 items-center justify-center  w-full md:w-80 md:justify-between'>
            <div className='relative w-40'>
                <button onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer bg-[#F9F9F9] border-[1px] flex items-center justify-center w-full h-18 border-[#DDDDDD]  h-12 text-xl rounded-md' >
                <span className=''>{filterOption}</span>
                <ChevronDown className=" w-6 h-6" />
                </button>
                {
                    isOpen && (
                        <div className='cursor-pointer absolute  top-full w-full left-0  bg-[#F9F9F9] text-lg flex flex-col  gap-2 bg-white border border-gray-200 rounded-md shadow-md'>
                            {options.map((option)=>(
                                <div key={option} onClick={()=>{
                                    setFilterOption(option)
                                    setIsOpen(false)
                                }    
                                }>{option}</div>
                            ))}
                        </div>
                    )
                }

            </div>
            
                <button className='cursor-pointer bg-primary text-xl text-white h-18 w-35 rounded-md '>Filter</button>

        </div>
    
    </div>)
}
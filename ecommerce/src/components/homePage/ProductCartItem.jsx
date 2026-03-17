

export const ProductCartItem = ({products})=>{



    return(
        
        <div className="flex flex-col gap-4 md:grid md:grid-cols-4 md:items-center">
            {products.map(product=>
                <div className="flex flex-col gap-4" key={product.id}>
                    <img className='' src={product.img} alt="product" />
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="text-text font-bold text-lg">{product.title}</h2>
                        <h3 className="text-secondText font-bold text-sm ">{product.text}</h3>
                        <p className="flex gap-2 justify-center font-bold" ><span className="text-muted">{product.price1}</span><span className="text-secondary">{product.price2}</span></p>
                        <div className="flex gap-2 items-center">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                            <div className="w-3 h-3 bg-alert rounded-full"></div>
                            <div className="w-3 h-3 bg-dark-background rounded-full"></div>
                        </div>
                    </div>

                    
                </div>
            )}
        
        </div>
    )
}
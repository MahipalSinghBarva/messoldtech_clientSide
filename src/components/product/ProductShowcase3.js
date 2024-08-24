import React from 'react'
import ProductCard from './ProductCard'

const ProductShowcase3 = ({ products, title }) => {
    return (
        <div className="px-4 py-8 ">
            <div className='flex justify-between items-center px-2 md:px-6 lg:px-28 mb-4'>
                <p className='font-bold text-lg md:text-xl'>{title}</p>
                <button type="button"
                    className="w-28 rounded-sm bg-pink-700 px-3 py-2 text-xs text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                    View All
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mx-auto max-w-7xl items-center">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductShowcase3

import React from 'react';

const ProductCard = ({ image, name, price }) => {
    return (
        <div className="relative rounded-md border py-2 px-2">
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover rounded-md md:h-48 lg:h-52"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded-md">
                    ₹{price}
                </div>
            </div>
            <div className="mt-2">
                <h1 className="text-xs font-medium leading-tight line-clamp-2">{name}</h1>
                <button
                    type="button"
                    className="mt-2 w-full rounded-sm bg-pink-700 px-2 py-1 text-xs text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

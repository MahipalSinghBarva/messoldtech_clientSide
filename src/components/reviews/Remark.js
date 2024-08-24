import React from 'react';

const Remark = () => {
  return (
    <div className='sm:h-8'>
      <hr />
      <div className="flex justify-evenly space-x-8 sm:space-x-16 md:space-x-24 text-xs  items-center">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-10 "
            src="https://static.vecteezy.com/system/resources/previews/027/213/478/non_2x/fast-delivery-truck-quick-delivery-transportation-with-clock-symbol-van-icon-courier-service-lorry-vehicle-speedy-cargo-user-interface-business-and-finance-shipment-illustration-vector.jpg"
            alt="Speedy delivery"
          />
          <p>Speedy delivery</p>
        </div>

     
        <div className="hidden md:block h-12 border-l border-gray-300"></div>

        <div className="flex flex-col items-center text-center">
          <img
            className="w-12 "
            src="https://img.myloview.com/stickers/parcel-delivery-location-vector-icon-box-and-map-pin-filled-flat-sign-for-mobile-concept-and-web-design-cargo-logistics-address-glyph-icon-symbol-logo-illustration-vector-graphics-700-245991920.jpg"
            alt="Cash on delivery"
          />
          <p>Cash on delivery</p>
        </div>

        
        <div className="hidden md:block h-12 border-l border-gray-300"></div>

        <div className="flex flex-col items-center text-center">
          <img
            className="w-8 "
            src="https://static.thenounproject.com/png/952397-200.png"
            alt="Easy return"
          />
          <p>Easy return</p>
        </div>
      </div>
    </div>
  );
};

export default Remark;

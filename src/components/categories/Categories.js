import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assest/3.webp'; 
import image2 from '../../assest/Degchi-Dhoop-Dani-Pot15.webp'; 


const categories = [
  { name: 'EVIL EYE', categoryImage: image1 },
  { name: 'POOJA THALI', categoryImage: image2 },
  { name: 'ROSE QUARTZ', categoryImage: image1 },
  { name: 'URLIS', categoryImage: image2 },
  { name: 'PYRITE', categoryImage: image1 },
  { name: 'CITRINE', categoryImage: image2 },

];

const CenteredCategories = () => {
  return (
    <div className="py-8 flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link to={`/category/${cat.name.toLowerCase()}`}>
              <img
                src={cat.categoryImage}
                alt={cat.name}
                className="rounded-full w-20 md:w-24 lg:w-28"
              />
            </Link>
            <p className="mt-2 text-xs md:text-sm text-center">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenteredCategories;

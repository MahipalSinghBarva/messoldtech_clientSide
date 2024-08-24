import React from 'react'
import HeroPage from "./HeroPage"
import Categories from '../categories/Categories'

import ProductShowcase3 from '../product/ProductShowcase3'

const Home = () => {
  const ganeshChaturthiProducts = [
    { image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/9/ganpati-decoration-ganesha_0_1200.jpg", name: "Eco-Friendly Ganpati", price: 499 },
    { image: "https://i.pinimg.com/736x/02/5e/fe/025efefa17f5f38a9f12e9b90c5b132d.jpg", name: "Plant-A-Ganesha", price: 399 },
    { image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/9/ganpati-decoration-ganesha_0_1200.jpg", name: "Ganesh Idol", price: 299 },
    { image: "https://i.pinimg.com/736x/02/5e/fe/025efefa17f5f38a9f12e9b90c5b132d.jpg", name: "Ganesha Statue", price: 799 },
    { image: "https://cdn0.weddingwire.in/article/4743/original/1280/jpg/123474-5-ganesh-chaturthi-decoration-nazrana-mubarak.jpeg", name: "Eco Ganpati Idol", price: 599 },
    { image: "https://i.pinimg.com/736x/02/5e/fe/025efefa17f5f38a9f12e9b90c5b132d.jpg", name: "Eco Ganesh Idol", price: 499 },
  ];

  const ganeshDecorationsProducts = [
    { image: "https://cityfurnish.com/blog/wp-content/uploads/2023/08/435ba9f088a68e9c1d8f373fbc38c8fa.jpeg", name: "Eco-Friendly Ganpati", price: 499 },
    { image: "https://i.pinimg.com/736x/02/5e/fe/025efefa17f5f38a9f12e9b90c5b132d.jpg", name: "Plant-A-Ganesha", price: 399 },
    { image: "https://cdn0.weddingwire.in/article/4743/original/1280/jpg/123474-5-ganesh-chaturthi-decoration-nazrana-mubarak.jpeg", name: "Ganesh Idol", price: 299 },
    { image: "https://cityfurnish.com/blog/wp-content/uploads/2023/08/435ba9f088a68e9c1d8f373fbc38c8fa.jpeg", name: "Ganesha Statue", price: 799 },
    { image: "https://i.pinimg.com/736x/02/5e/fe/025efefa17f5f38a9f12e9b90c5b132d.jpg", name: "Eco Ganpati Idol", price: 599 },

  ];

  const janamashthamiProducts = [
    { image: "https://m.media-amazon.com/images/I/71GFGmJWZNL._AC_UF1000,1000_QL80_.jpg", name: "Eco-Friendly Ganpati", price: 499 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs--lu6f6_8cIEZA466XSGExgCKLh0W6psPbaJCCWYZpsAaCtwPmtWdaiAp4bvf7K5VEY&usqp=CAU", name: "Plant-A-Ganesha", price: 399 },
    { image: "https://i.pinimg.com/736x/02/5e/fe/025efefa17f5f38a9f12e9b90c5b132d.jpg", name: "Ganesh Idol", price: 299 },
    { image: "https://m.media-amazon.com/images/I/71GFGmJWZNL._AC_UF1000,1000_QL80_.jpg", name: "Ganesha Statue", price: 799 },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs--lu6f6_8cIEZA466XSGExgCKLh0W6psPbaJCCWYZpsAaCtwPmtWdaiAp4bvf7K5VEY&usqp=CAU", name: "Eco Ganpati Idol", price: 599 },

  ];

  const poojaEssainalProducts = [
    { image: "https://assets.giftalove.com/resources/common/giftimages/largeimage/box-of-pooja-essentials-for-diwali_2.jpg", name: "Eco-Friendly Ganpati", price: 499 },
    { image: "https://ikiru.in/cdn/shop/products/buy-puja-essentials-brass-round-lobaan-dhoop-daan-for-pooja-room-or-puja-essentials-for-home-by-amaya-decors-on-ikiru-online-store-1_700x700.jpg?v=1715168284", name: "Plant-A-Ganesha", price: 399 },
    { image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28220584/2024/3/13/12917a02-96b9-4d61-9cc3-98b978553f861710338125840CraftVatikaGold-TonedReligiousIdolShowpiece1.jpg", name: "Ganesh Idol", price: 299 },
    { image: "https://ikiru.in/cdn/shop/products/buy-puja-essentials-brass-round-lobaan-dhoop-daan-for-pooja-room-or-puja-essentials-for-home-by-amaya-decors-on-ikiru-online-store-1_700x700.jpg?v=1715168284", name: "Ganesha Statue", price: 799 },
    { image: "https://assets.giftalove.com/resources/common/giftimages/largeimage/box-of-pooja-essentials-for-diwali_2.jpg", name: "Eco Ganpati Idol", price: 599 },
    { image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28220584/2024/3/13/12917a02-96b9-4d61-9cc3-98b978553f861710338125840CraftVatikaGold-TonedReligiousIdolShowpiece1.jpg", name: "Eco Ganpati Idol", price: 599 },

  ];
  return (
    <div>
      <HeroPage />
      <Categories />

      <ProductShowcase3 products={ganeshChaturthiProducts} title="Ganesh Chaturthi" />
      <ProductShowcase3 products={ganeshDecorationsProducts} title="Ganesh Decorations" />
      <ProductShowcase3 products={janamashthamiProducts} title="Janmashtami" />
      <ProductShowcase3 products={poojaEssainalProducts} title="Pooja Essainal" />
      <ProductShowcase3 products={poojaEssainalProducts} title="Healing Crystals" />
      <ProductShowcase3 products={poojaEssainalProducts} title="Limited Edition" />
      <ProductShowcase3 products={poojaEssainalProducts} title="Pooja Room Decor" />
      <ProductShowcase3 products={poojaEssainalProducts} title="Evil Eye" />
      <ProductShowcase3 products={poojaEssainalProducts} title="Pooja Thali Set" />
    </div>
  )
}

export default Home

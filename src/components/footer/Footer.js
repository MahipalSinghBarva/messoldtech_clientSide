import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-pink-300 py-10 px-4 md:px-10 lg:px-20 text-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

            {/* Column 1: Logo and Social Media */}
            <div className="text-center lg:text-left text-white">
              <div className='flex flex-col items-center lg:items-start '>
                <p className="text-sm lg:ml-20">My</p>
                <h3 className="font-bold text-4xl">Pooja Box</h3>
                <p className="mb-4 text-sm lg:ml-8">The Art of Gifting</p>
              </div>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="#" className="bg-transparent border border-white text-white rounded-md p-2 text-xs shadow-md hover:bg-gray-100 hover:text-gray-600">
                  FACEBOOK
                </a>
                <a href="#" className="bg-transparent border border-white text-white rounded-md p-2 text-xs shadow-md hover:bg-gray-100 hover:text-gray-600">
                  INSTAGRAM
                </a>
              </div>
            </div>

            {/* Column 2: Information */}
            <div className="text-center lg:text-left text-white/85">
              <h4 className="font-bold mb-4">Information</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Track your Order</a></li>
                <li><a href="#" className="hover:underline">Returns and Refunds</a></li>
                <li><a href="#" className="hover:underline">Holiday List</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Aartis</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Deals & Coupons</a></li>
              </ul>
            </div>

            {/* Column 3: About My Pooja Box */}
            <div className="text-center lg:text-left text-white/85">
              <h4 className="font-bold mb-4">About My Pooja Box</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Corporate Enquiry</a></li>
                <li><a href="#" className="hover:underline">Exchange/Cancel My Order</a></li>
              </ul>
            </div>

            {/* Column 4: Customer Care */}
            <div className="text-center lg:text-left text-white/80">
              <h4 className="font-bold mb-4">Customer Care</h4>
              <p className="mb-2">Phone: +91 8010288882 | +91 8010188881</p>
              <p className="mb-2">Email: orders@mypoojabox.com</p>
              <p>Address: My Pooja Box, Jagat Complex, 100 Ft Rd, Ghitorni, New Delhi 110030</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6 text-white/80">
            <div className="text-center lg:text-left text-sm mb-4 md:mb-0">
              &copy; 2024, All Rights Reserved. <a href="#" className="hover:underline">India</a>
            </div>
            <div className="flex space-x-4">
              <a href="#">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-16 w-auto" />
              </a>
              <a href="#">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12 w-auto" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;

import React, { useState } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      name: 'Shop',
      href: '/',
    },
    {
      name: 'Home Decor',
      href: '/about',
    },
    {
      name: 'Festive Decor',
      href: '/',
    },
    {
      name: 'Corporate Gifting',
      href: '/',
    },
  ]



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <div>
        <p className='bg-pink-600 text-white flex justify-center font-serif text-sm'>GET 10% OFF WITH CODE: ILOVEMPB</p>
      </div>
      <div className="relative w-full bg-white border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link to="/">
              <span className="font-bold text-pink-500">poojaBox</span>
            </Link>

          </div>
          <div className="hidden lg:block">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900 hover:underline"
                  >
                    {item.name} {(item.name === "Shop" || item.name === "Home Decor") && (
                      <span>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </span>
                    )}

                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex grow justify-end">
            <span className="relative inline-block">
              <img
                className="h-8 w-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIkQsVLkqDD5t4EaRHGyKbEPDXFD6cfF1wg&s"
                alt="cart"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"></span>
            </span>
          </div>
          <div className="ml-2 mt-2 hidden lg:block">
            <span className="relative inline-block">
              <img
                className="h-8 w-8 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/2832/2832499.png"
                alt="cart"
              />
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white"></span>
            </span>
          </div>
          <div className="ml-2 lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">

                      <span className="font-bold">poojaBox</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          {/* 
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span> */}
                          {item.name} {(item.name === "Shop" || item.name === "Home Decor") && (
                            <span>
                              <ChevronRight className="ml-3 h-4 w-4" />
                            </span>
                          )}

                        </a>
                      ))}
                    </nav>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

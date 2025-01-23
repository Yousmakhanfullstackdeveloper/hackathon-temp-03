import React from 'react'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link';
const Header = () => {
    return (
        <header className=' md:justify-center'>
            {/* ------------------------------------NAVBAR----------------------------- */}
            <div className='bg-[#F5F5F5] w=[1440px] h-[36px] m-0'>
                <div className='flex '>
                    <div className='upper-header ml-[48px] mt-[6px]'>
                        <Image src="/image/Frame1.png" alt="frame" width={24} height={24} ></Image>
                    </div>
                    <div className='bg-[#FFFFFF] w-[146.86px] h-[26px] mt-[5px] ml-[650px] px-[10px] py-[4px] text-sm'>
                        <h1>skip to main content</h1>
                    </div>
                    <div className='nav w-auto h-[6px]  ml-[200px] text-sm py-[5px]'>
                        <Link href="/" className="hover:text-gray-800">Find Link Store   | </Link>
                        <Link href="/products" className="hover:text-gray-800">Help   | </Link>
                        <Link href="/products" className="hover:text-gray-800">Product  | </Link>
                        <Link href="/join-us" className="hover:text-gray-800">Join Us   | </Link>
                        <Link href="/Login" className="hover:text-gray-800">Sign In  |</Link>
                        <Link href="/productdetail" className="hover:text-gray-800">Productdetail   | </Link>
                        <Link href="/cart" className="hover:text-gray-800">Cart  </Link>
                    

                    </div>
                </div>
            </div>
            {/* --------------------------------Navigation link-------------------------- */}
            <div className='w-[1440px] h-[60px] flex'>
                <div className='lower-header mt-[-8.74px] ml-[38.26px]'>
                    <Image src="/image/Frame2.png" alt="tick" width={78.47} height={78.47}></Image>
                </div>
            
                <nav className="flex gap-4 md:gap-6 text-gray-700 font-semibold md:text-[16px] sm:text-[14px] text-[10px] ml-[400px] mt-[19px]">
                    <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
                    <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
                    <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
                    <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
                    <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
                    <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
                </nav>

                {/*--------------------------------(Search, Wishlist, Cart)-------------------------------- */}
                <div className="flex items-center gap-4 mt-4 md:mt-0 ml-[140px]">
                    {/* --------------------------------Search Bar------------------------------ */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
                        />
                        {/* ----------------------------------Whishlist and cart----------------------------- */}
                        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
                    </div>
                    <CiHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black" />
                    <CiShoppingCart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
                </div>

            </div>
        </header>

    )
}

export default Header
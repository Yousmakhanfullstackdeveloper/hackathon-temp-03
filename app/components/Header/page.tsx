import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full">
            
            <div className="bg-gray-100 w-full py-2 px-4 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                    <Image src="/image/Frame1.png" alt="frame" width={24} height={24} />
                </div>
                <div className="hidden md:block bg-white px-3 py-1 text-xs rounded-md shadow-sm lg:ml-[420px]">
                    <h1>Skip to main content</h1>
                </div>
                <nav className="hidden md:flex gap-4 text-gray-600">
                    <Link href="/">Find Link Store | </Link>
                    <Link href="/products">Product | </Link>
                    <Link href="/join-us">Join Us | </Link>
                    <Link href="/login">Sign In | </Link>
                    <Link href="/productdetail">Product Detail | </Link>
                    <Link href="/carts">Cart</Link>
                </nav>
            </div>
            
            <div className="w-full py-4 px-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/image/Frame2.png" alt="logo" width={60} height={60} />
                </div>
                
                <nav className="hidden lg:ml-60 sm:flex gap-4 text-gray-700 font-medium text-sm md:text-base">
                    <Link href="#" className="hover:text-black">New & Featured</Link>
                    <Link href="#" className="hover:text-black">Men</Link>
                    <Link href="#" className="hover:text-black">Women</Link>
                    <Link href="#" className="hover:text-black">Kids</Link>
                    <Link href="#" className="hover:text-black">Sale</Link>
                    <Link href="#" className="hover:text-black">SNKRS</Link>
                </nav>
                
                <div className="flex items-center gap-4">
                
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
                        />
                        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
                    </div>
                    <CiHeart className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black" />
                    <CiShoppingCart className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black" />
                </div>
            </div>
        </header>
    );
};

export default Header;

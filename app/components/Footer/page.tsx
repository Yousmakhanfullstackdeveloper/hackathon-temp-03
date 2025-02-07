import React from 'react'
import Link from 'next/link'
import { PiPlaceholder } from 'react-icons/pi';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white py-8 px-6 mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
                <div>
                    <h1 className="text-base font-semibold mb-5">FIND A STORE</h1>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Become Link Member</Link></li>
                        <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
                        <li><Link href="#" className="hover:underline">Send Us Feedback</Link></li>
                        <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-base font-semibold mb-5">GET HELP</h1>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Order Status</Link></li>
                        <li><Link href="#" className="hover:underline">Delivery</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                        <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-base font-semibold mb-5">ABOUT NIKE</h1>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Investors</Link></li>
                        <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>
                <div className="flex justify-start sm:justify-center md:justify-end items-start gap-4">
                    <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaLinkedin className="text-lg cursor-pointer hover:text-gray-400" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-8 justify-between items-center text-xs text-gray-400">
                <div className="flex mb-4 md:mb-0 gap-2">
                    <PiPlaceholder className='text-[#111111] text-sm' />
                    <p>India</p>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="flex flex-wrap gap-4 text-center">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

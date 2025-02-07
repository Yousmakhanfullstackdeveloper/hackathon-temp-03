import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Section = () => {
  return (
    <div>
      {/* ---------------------------Featured-------------------------------- */}
      <div className="mt-12 mx-auto max-w-7xl px-4">
        <h1 className="text-[#111111] font-Helvetica Neue py-2 text-xl font-bold">Featured</h1>
        <div className="text-center">
          <Image src="/image/title.png" alt="run" width={1305} height={700} layout="intrinsic" />
        </div>
        <div className="text-center mt-16">
          <h1 className="text-[#111111] font-Helvetica Neue font-bold text-3xl">STEPS INTO WHAT FEELS GOOD</h1>
          <p className="text-[#111111] text-base mt-6 px-6 md:px-16">Cause everyone should know the feeling of running in that perfect pair</p>
          <div className="mt-8">
            <Button className="rounded-3xl">Find Your Shoe</Button>
          </div>
        </div>
      </div>

      {/* -------------------------------------Shops--------------------------------- */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Gear Up</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Men's Section */}
          <div>
            <div className="flex justify-between mb-4">
              <h1 className="font-bold">Shop Men's</h1>
              <div className="space-x-2">
                <button className="w-12 h-12">
                  <Image src="/image/right button.png" alt="right" width={50} height={50} />
                </button>
                <button className="w-12 h-12">
                  <Image src="/image/left button.png" alt="left" width={50} height={50} />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
                <Image src="/image/titleframe1st.png" alt="shoe1" width={300} height={300} />
                <div className="mt-4">
                  <h1 className="font-bold text-sm">Nike Dri-FIT ADV TechKnit Ultra</h1>
                  <span className="ml-4 font-bold">₹ 3 895</span>
                  <p className="text-[#757575]">Men's Short-Sleeve Running Top</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
                <Image src="/image/titleframe2nd.png" alt="shoe2" width={300} height={300} />
                <div className="mt-4">
                  <h1 className="font-bold text-sm">Nike Dri-FIT Challenge</h1>
                  <span className="ml-4 font-bold">₹ 2 495</span>
                  <p className="text-[#757575]">Men's 18cm Shorts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Women's Section */}
          <div>
            <div className="flex justify-between mb-4">
              <h1 className="font-bold">Shop Women's</h1>
              <div className="space-x-2">
                <button className="w-12 h-12">
                  <Image src="/image/right button.png" alt="right" width={50} height={50} />
                </button>
                <button className="w-12 h-12">
                  <Image src="/image/left button.png" alt="left" width={50} height={50} />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
                <Image src="/image/titleframe3rd.png" alt="shoe1" width={300} height={300} />
                <div className="mt-4">
                  <h1 className="font-bold text-sm">Nike Dri-FIT ADV Run Division</h1>
                  <span className="ml-4 font-bold">₹ 5 295</span>
                  <p className="text-[#757575]">Women's Long-Sleeve Running Top</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
                <Image src="/image/titleframe4th.png" alt="shoe2" width={300} height={300} />
                <div className="mt-4">
                  <h1 className="font-bold text-sm">Nike Fast</h1>
                  <span className="ml-4 font-bold">₹ 3 795</span>
                  <p className="text-[#757575]">Women's Mid-Rise 7/8 Running Leggings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------Title------------------------------- */}
      <section className="px-4 py-16">
        <h1 className="font-bold text-2xl mb-4">Don't Miss</h1>
        <div className="text-center">
          <Image src="/image/Brand.png" alt="brand" width={1334} height={700} layout="intrinsic" />
        </div>
      </section>

      {/* ---------------------------Essentials----------------------------- */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Flight Essentials</h1>
          <p className="mt-4 text-lg text-gray-700">Your built-to-last all-week wear—but with style only Jordan Brand can deliver</p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
          <div className="w-full h-auto bg-purple-400">
            <Image src="/image/1st.png" alt="Essential1" width={450} height={550} className="w-full h-auto" />
          </div>
          <div className="w-full h-auto bg-purple-400">
            <Image src="/image/2nd.png" alt="Essential2" width={450} height={550} className="w-full h-auto" />
          </div>
          <div className="w-full h-auto bg-purple-400">
            <Image src="/image/3rd.png" alt="Essential3" width={450} height={550} className="w-full h-auto" />
          </div>
        </div>
        
        <div className="w-full mt-16 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <ul className="text-start">
              <span className="font-medium font-bold">Icons</span>
              <li className="font-normal text-[#757575]">Air Force 1</li>
              <li className="font-normal text-[#757575]">Huarache</li>
              <li className="font-normal text-[#757575]">Air Max 90</li>
              <li className="font-normal text-[#757575]">Air Max 95</li>
            </ul>
            <ul className="text-start">
              <span className="font-medium font-bold">Shoes</span>
              <li className="font-normal text-[#757575]">All Shoes</li>
              <li className="font-normal text-[#757575]">Custom Shoes</li>
              <li className="font-normal text-[#757575]">Jordan Shoes</li>
              <li className="font-normal text-[#757575]">Running Shoes</li>
            </ul>
            <ul className="text-start">
              <span className="font-medium font-bold">Clothing</span>
              <li className="font-normal text-[#757575]">All Clothing</li>
              <li className="font-normal text-[#757575]">Modest Wear</li>
              <li className="font-normal text-[#757575]">Hoodies & Pullovers</li>
              <li className="font-normal text-[#757575]">Shirts & Tops</li>
            </ul>
            <ul className="text-start">
              <span className="font-medium font-bold">Kids'</span>
              <li className="font-normal text-[#757575]">Infant & Toddler Shoes</li>
              <li className="font-normal text-[#757575]">Kids' Shoes</li>
              <li className="font-normal text-[#757575]">Kids' Jordan Shoes</li>
              <li className="font-normal text-[#757575]">Kids' Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section

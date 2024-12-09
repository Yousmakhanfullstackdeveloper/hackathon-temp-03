import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const section = () => {
  return (
    <div>
     {/* ---------------------------Featured-------------------------------- */}
    <div className=" mt-[520px] ml-[120px]">
    
  <h1 className="text-[#111111] fonnt-Helvetica Neue py-[5px] mt-[30px] ml-[-5px] font-bold text-2xl">Featured</h1>
</div>
<div className='pl-[110px]'>
    <Image src="/image/title.png" alt="run" width={1305} height={700}></Image>
</div>
<div>
<h1 className='text-[#111111] Font-Helvetica Neue items-center font-bold text-4xl ml-[470px] mt-[100px]'>STEPS INTO WHAT FEELS GOOD</h1>
<p className='text-[#111111] Font-Helvetica Neue items-center text-base ml-[460px] mt-[30px] px-[50px]'>Cause everyone should know the feeling of running in that perfect pair</p>
<div className=' ml-[670px] space-x-3 mt-[45px]'>
    <Button className='rounded-3xl'>Find Your Shoe</Button>
</div>
</div>
{/* -------------------------------------shops--------------------------------- */}
<div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 ml-[70px]">Gear Up</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className='space-x-2 flex ml-[500px] items-center'>
    <h1 className='font-bold'>Shop Men's</h1>
    <button className="w-12 h-12"><Image src="/image/right button.png" alt="" width={50} height={50} /></button>
    <button className="w-12 h-12"><Image src="/image/left button.png" alt="" width={50} height={50}  /></button>
</div>
          </div>
          <div className='flex space-x-5'>
          <div className='ml-[80px]'><Image src='/image/titleframe1st.png' alt='shoe1' width={300} height={300}></Image>
   <div className='flex mt-[20px]'>
    <h1 className='font-bold text-[#111111] font-Helvetica Neue text-sm'>Nike Dri-FIT ADV TechKnit Ultra</h1>
    <span className='ml-[30px] font-bold'>₹ 3 895</span></div>
    <p className='text-[#757575]'>Men's Short-Sleeve</p>
    <p>Running Top</p></div>
    <div className='ml-[80px]'><Image src='/image/titleframe2nd.png' alt='shoe2' width={300} height={300}></Image>
   <div className='flex mt-[20px]'>
    <h1 className='font-bold text-[#111111] font-Helvetica Neue text-sm'>Nike Dri-FIT Challenge</h1>
    <span className='ml-[30px] font-bold'>₹ 2 495</span></div>
    <p className='text-[#757575]'>Men's 18cm (approx.) 2</p>
    <p className='text-[#757575]'>1 Versatile Shorts</p></div>
    </div>
        </section>
        <section>
        <div className="flex items-center justify-between mb-4">
            <div className='space-x-2 flex ml-[500px] items-center'>
    <h1 className='font-bold'>Shop Women's</h1>
    <button className="w-12 h-12"><Image src="/image/right button.png" alt="" width={50} height={50} /></button>
    <button className="w-12 h-12"><Image src="/image/left button.png" alt="" width={50} height={50}  /></button>
</div>
          </div>
          <div className='flex space-x-5'>
          <div className='ml-[80px]'><Image src='/image/titleframe3rd.png' alt='shoe1' width={300} height={300}></Image>
   <div className='flex mt-[20px]'>
    <h1 className='font-bold text-[#111111] font-Helvetica Neue text-sm'>Nike Dri-FIT ADV Run Division</h1>
    <span className='ml-[30px] font-bold'>₹ 5 295</span></div>
    <p className='text-[#757575]'>Women's Long-Sleeve </p>
    <p className='text-[#757575]'>Running Top</p></div>
    <div className='ml-[80px]'><Image src='/image/titleframe4th.png' alt='shoe2' width={300} height={300}></Image>
   <div className='flex mt-[20px]'>
    <h1 className='font-bold text-[#111111] font-Helvetica Neue text-sm'>Nike Fast</h1>
    <span className='ml-[30px] font-bold'>₹ 3 795</span></div>
    <p className='text-[#757575]'>Women's Mid-Rise 7/8 Running</p>
    <p className='text-[#757575]'>Leggings with Pockets</p></div>
    </div>
  </section>
</div>
    </div>
{/* ----------------------------Title------------------------------- */}
<section>
    <div>
        <h1 className='font-bold text-2xl ml-[98px] mb-[20px] mt-[90px]'>Don't Miss</h1>
    </div>
    <div className='pl-[100px]'>
        <Image src="/image/Brand.png" alt="brand" width={1334} height={700}></Image>
    </div>
</section>
{/* ---------------------------ESSential----------------------------- */}
<section>
<div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
        
          <h1 className="font-helvetica text-[52px]  leading-[60px] text-center  font-bold">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your buit to last all weeks wears-but with style only Joran Brand can deliver
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>

<div className="w-full h-auto mt-20 wrapper ">
    <div className="text-[23px] font-medium ml-[40px] mb-[1px] ">The Essential</div>
  
    
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[40px]">
      
      <div className="w-full h-auto ">
        <Image
          src="/image/1st.png"
          alt="Essential1"
          width={450}
          height={550}
          className="w-full"
        />
      </div>
  
      
      <div className="w-full h-auto ">
        <Image
          src="/image/2nd.png"
          alt="Essential2"
          width={450}
          height={550}
          className="w-full"
        />
      </div>
  
      
      <div className="w-full h-auto ">
        <Image
          src="/image/3rd.png"
          alt="Essential3"
          width={450}
          height={550}
          className="w-full"
          />
        </div>
      </div>
    
      
      <div className="w-full h-auto mt-16 px-[100px] leading-[40.66px]">
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          
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
</div>
</section>
</div>
  )
}

export default section

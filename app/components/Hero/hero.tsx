import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
const hero = () => {
  return (
    <section>
        <div className='section md-768px grid grid-cols-1 '>
        {/* ------------------------Shoe-section----------------------------- */}
            <div className='bg-[#F5F5F5] w-auto h-[58px] md-col-3'>
<h1 className='font-semibold ml-[700px] text-lg'>Hello Nike App</h1>
<p className='text-sm leading-[25px] ml-[580px]'>Download the app to access everything Nike.<Link className='underline' href="/">Get Your Great</Link></p>
            </div>
           <div className='pl-[95px]'>
            <Image src="/image/shoe.png" alt="shoe" width={1334} height={700}></Image>
           </div>
{/* --------------------------------Shoe-collection----------------------------- */}
<div className='w-[1008px] h-[229px] mt-[100px] ml-[308px]'>
    <h2 className='text-[#111111] Font-Helvetica Neue text-lg font-bold ml-[420px]'>First Look</h2>
    <h1 className='text-[#111111] Font-Helvetica Neue items-center text-6xl ml-[170px] leading-[90px]'>NIKE AIR MAX PULSE</h1>
    <p className='text-[#111111] Font-Helvetica Neue items-center text-sm ml-[170px] mt-[20px] px-[50px]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse </p>
        <p className='text-[#111111] Font-Helvetica Neue items-center text-sm ml-[170px] leadinng-[80px] px-[60px]'>— designed to push you past your limits and help you go to the max.</p>
<div className='flex ml-[350px] space-x-3 mt-[20px]'>
    <Button className='rounded-3xl'>Notify me</Button>
    <Button className='rounded-3xl'>Shop Air Max</Button>
</div>
</div>
{/* -------------------------------Best Of Air Max------------------------------- */}
<div className='bg-[#FFFFFF] w-[1440px] h-[52px] pl-[90px] mt-[60px]'>
<div className='flex justify-between'>
<h1 className='text-[#111111] fonnt-Helvetica Neue ml-[34.66px] mt-[30px] font-bold text-xl'>Best Of Air Max</h1>
<div className='flex items-center space-x-2 mr-[31px]'>
    <h1>shop</h1>
    <button className="w-12 h-12"><Image src="/image/right button.png" alt="" width={50} height={50} /></button>
    <button className="w-12 h-12"><Image src="/image/left button.png" alt="" width={50} height={50}  /></button>
</div> 
</div>
<div className='flex mt-[20px] space-x-10 ml-[34.66px]'>
    {/* card1 */}
    <div><Image src='/image/Image (3).png' alt='shoe1' width={400} height={300}></Image>
   <div className='flex mt-[20px]'>
    <h1 className='font-bold text-[#111111] font-Helvetica Neue'>Nike Air Max pulse </h1>
    <span className='ml-[170px] font-bold'>₹ 13 995</span></div>
    <p>Women's shoes</p></div>
    {/* card2 */}
    <div><Image src='/image/frame2nd.png' alt='shoe2' width={400} height={300}></Image>
   <div className='flex mt-[20px]'>
    <h1 className='font-bold text-[#111111] font-Helvetica Neue'>Nike Air Max pulse </h1>
    <span className='ml-[170px] font-bold'>₹ 13 995</span></div>
    <p>Men's shoes</p></div>
    {/* card3 */}
    <div><Image src='/image/frame3rd.png' alt='shoe3' width={400} height={300}></Image>
   <div className='flex mt-[20px]'>
    <h1 className='font-bold text-[#111111] font-Helvetica Neue'>Nike Air Max 97 SE </h1>
    <span className='ml-[170px] font-bold'>₹ 13 995</span></div>
    <p>Men's shoes</p></div>
</div>
</div>
</div>
 </section> 

    
  )
}

export default hero

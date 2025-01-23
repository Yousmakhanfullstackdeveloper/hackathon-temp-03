import React from 'react'
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
</div>
 </section> 

    
  )
}

export default hero

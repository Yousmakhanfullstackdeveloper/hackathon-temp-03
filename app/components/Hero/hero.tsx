import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section>
        <div className='section grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
            {/* ------------------------Shoe-section----------------------------- */}
            <div className='bg-[#F5F5F5] w-full h-auto flex flex-col justify-center items-center text-center px-4 py-2'>
                <h1 className='font-semibold text-lg'>Hello Nike App</h1>
                <p className='text-sm leading-[25px] mt-1'>Download the app to access everything Nike.
                <Link className='underline' href="/">Get Your Great</Link></p>
            </div>
            <div className='flex justify-center'>
                <Image src="/image/shoe.png" alt="shoe" width={1334} height={700} className='max-w-full h-auto'></Image>
            </div>
            {/* --------------------------------Shoe-collection----------------------------- */}
            <div className='w-full max-w-[1008px] h-auto mt-[100px] mx-auto text-center px-4'>
                <h2 className='text-[#111111] font-Helvetica Neue text-lg font-bold'>First Look</h2>
                <h1 className='text-[#111111] font-Helvetica Neue text-4xl md:text-6xl leading-[90px]'>NIKE AIR MAX PULSE</h1>
                <p className='text-[#111111] font-Helvetica Neue text-sm mt-[20px]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
                <p className='text-[#111111] font-Helvetica Neue text-sm'>— designed to push you past your limits and help you go to the max.</p>
                <div className='flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-3 mt-[20px]'>
                    <Button className='rounded-3xl w-full md:w-auto'>Notify me</Button>
                    <Button className='rounded-3xl w-full md:w-auto'>Shop Air Max</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;

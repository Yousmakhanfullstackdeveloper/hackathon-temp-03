import React from "react";
import Image from "next/image"
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@/components/ui/button";


export default function ProductDetails() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-6 rounded-lg bg-white w-[90%] max-w-[1200px] mx-auto mt-4 py-8 lg:gap-20">
      {/* Left Section  */}
      <div className="relative flex items-center justify-center w-full lg:w-2/4">
        <Image
          src="/image/shoe1.png"
          alt="Nike Air Force 1"
          className="w-full h-auto object-cover"
          width={400}
          height={400}
        />
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-6 mt-[90px] text-center lg:text-left ">
        <h1 className="text-xl font-semibold font-medium text-gray-900 mb-4 font-poppins">
          Nike Air Force 1 PLT.AF.ORM
        </h1>
        <p className="text-sm font-light text-gray-700 mb-6 leading-8 font-poppins ">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its "inside out"-inspired construction, including unique layering and
          exposed foam accents, ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal, while the unexpected shading, rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <p className="text-4xl font-medium text-gray-900 mb-6 ">
          ₹ 8,695.00
        </p>
        <Button className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300">
          <CiShoppingCart className="w-8 h-8 mr-3" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

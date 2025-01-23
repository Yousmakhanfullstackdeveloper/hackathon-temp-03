"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts, four } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const Shoes = () => {

const [product, setProdcut] = useState<Product[]>([])

useEffect(() => {
    async function fetchproduct() {
        const fetchedProduct : Product[] = await client.fetch(allProducts)
        setProdcut(fetchedProduct)
    }
    fetchproduct()
},[])

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
        <h1 className="text-2xl font-bold mb-6 text-center">Best Of Air Max</h1>
        <div className="grid grid-col-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4">
   {product.map((product) =>(
<div key={product._id} 
className="border rounded-lg shadow-md p-4 hover:shadown-lg tranaition duration-200">
<Link href={`/product/${product.slug.current}`}>
{product.image && (
    <Image
    src={urlFor(product.image).url()}
    alt="shoes"
    width={300}
    height={300}
    className="w-full h-48 object-cover rounded-md"
    />
)}
<h1 className="text-lg font-semibold mt-4">
{product.productName}
</h1>
<p className="text-gray-500 mt-2">
    {product.price ? `$${product.price}` : "Price not available"}
</p>
</Link>
</div>
   )
   )}
   </div>
   
   </div>
  )
}

export default Shoes;

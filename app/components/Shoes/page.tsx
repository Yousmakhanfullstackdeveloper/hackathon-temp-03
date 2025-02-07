"use client"
import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";


import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";

const Shoes = () => {

const [product, setProdcut] = useState<Product[]>([])

useEffect(() => {
    async function fetchproduct() {
        const fetchedProduct : Product[] = await client.fetch(allProducts)
        setProdcut(fetchedProduct)
    }
    fetchproduct()
},[]);

const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
        position : "top-right",
        icon : "success",
        title : `${product.productName} added to cart`,
        showConfirmButton : false,
        timer : 1000
    })
    addToCart(product)
    
}

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
{/* <button className="bg-gradient-to-bl from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out" 
onClick={(e) => handleAddToCart(e, product)}>
Add To Cart
</button> */}
<Button className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-md hover:bg-gray-500 transition duration-300"
onClick={(e) => handleAddToCart(e, product)}>
          <CiShoppingCart className="w-8 h-8 mr-3" />
          Add to Cart
        </Button>
</Link>
</div>
   )
   )}
   </div>
   </div>
  )
}

export default Shoes;

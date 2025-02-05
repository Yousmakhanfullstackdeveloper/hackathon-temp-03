"use client";
import { addToCart } from "@/app/actions/actions";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Shoes from "../components/Shoes/page";


const ProductDetail = () => {
  const [product, setProduct] = useState<Product[]>([]);
  

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);
  

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="min-h-screen">
            {/* Navbar */}
            <div className="w-full bg-white border-b shadow-sm py-4 px-8 flex items-center justify-between">
            </div>

            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 hidden md:block bg-gray-50 border-r py-8 px-4">
                    <h2 className="font-bold text-lg mb-4">New <span className="text-gray-400">(500)</span></h2>
                    <nav>
                    <ul className="space-y-2 text-gray-600">
                        <li>Shoes</li>
                        <li>Sports Bras</li>
                        <li>Tops & T-shirts</li>
                        <li>Hoodies & Sweatshirts</li>
                        <li>Jackets</li>
                        <li>Trousers & Tights</li>
                        <li>Shorts</li>
                        <li>Tractsuits</li>
                        <li>Jumpsuits & Rompers</li>
                        <li>Skirts & Dresses</li>
                        <li>Socks</li>
                         <li>Accessories & Equipment</li>
                    </ul>
                    </nav>
                </div>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Best Of Air Max</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
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
              <h1 className="text-lg font-semibold mt-4">{product.productName}</h1>
              <p className="text-gray-500 mt-2">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
            </Link>
            <Button
              className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-md hover:bg-gray-500 transition duration-300 mt-4 w-full"
              onClick={(e) => handleAddToCart(e, product)}
            >
              <CiShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProductDetail;

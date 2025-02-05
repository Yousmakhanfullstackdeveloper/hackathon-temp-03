import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CiShoppingCart } from "react-icons/ci";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        _type,
        image,
        price,
        category,
        description,
    }`, 
    { slug }
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-13">
        <div className="aspect-square mt-20">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold mt-40">
            {product.productName}
          </h1>
          <h2 className="text-xl text-justify pr-20">
            {product.description}
          </h2>
          <h3 className="text-xl font-bold">
            {product.category}
          </h3>
          <h1 className="text-2xl font-sans flex">
            <p className="text-2xl font-semibold">Price = </p> {product.price}$
          </h1>
          <Button className="flex items-center justify-center bg-black text-white py-2 px-6 rounded-md hover:bg-gray-500 transition duration-300">
          <CiShoppingCart className="w-8 h-8 mr-3" />
          Add to Cart
        </Button>
        </div>
      </div>
    </div>
  );
}

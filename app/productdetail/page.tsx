import Image from "next/image";

export default function Product() {
    // Product data array for multiple products using logicccccc
    const products = Array.from({ length: 6 }, (_, index) => ({
        id: index + 1,
        image: `/images/product${index + 1}.png`,
        name: `Nike Air Force ${index + 1}`,
        description: "Men's Shoes",
        price: `₹${10 + index * 5}`,
    }));

    return (
        <div className="min-h-screen">
            {/* Navbar */}
            <div className="w-full bg-white border-b shadow-sm py-4 px-8 flex items-center justify-between">
            </div>

            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 hidden md:block bg-gray-50 border-r py-8 px-4">
                    <h2 className="font-bold text-lg mb-4">New <span className="text-gray-400">(500)</span></h2>
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
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-3/4 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
                                <Image
                                    src="/image/shoe1.png"
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                
                                <div className="mt-4 text-center">
                                    <h3 className="font-semibold text-gray-700">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <p className="font-bold mt-2">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

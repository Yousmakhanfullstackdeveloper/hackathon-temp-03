"use client";  // Mark as a Client Component

interface AddToCartButtonProps {
  productName: string;
}

export default function AddToCartButton({ productName }: AddToCartButtonProps) {
  const handleAddToCart = () => {
    alert(`${productName} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  );
}
import Image from "next/image";
import { products } from "../data/products";

export default function OtherProductsPage() {
  const otherProducts = products.filter((item) => item.category === "other");

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Other Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {otherProducts.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="object-contain w-full h-48 mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-lg text-gray-800 mb-4">${product.price.toFixed(2)}</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { products } from "../data/products";

export default function NintendoPage() {
  const nintendoProducts = products.filter((item) => item.category === "nintendo");

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 pt-24 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-8">Nintendo Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nintendoProducts.map((product) => (
          <div key={product.id} className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700 text-lg mb-2">${product.price.toFixed(2)}</p>
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

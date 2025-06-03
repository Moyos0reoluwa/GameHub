"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductSection() {
  const categories = [
    {
      name: "PlayStation",
      href: "/playstation",
      image: "/images/playstation.png",
    },
    {
      name: "Xbox",
      href: "/xbox",
      image: "/images/xbox.png",
    },
    {
      name: "Nintendo",
      href: "/nintendo",
      image: "/images/nintendo.png",
    },
    {
      name: "Other Products",
      href: "/others",
      image: "/images/otherproducts.png", 
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-red-100 pt-24 pb-16" id="Products">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Our Products
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, href, image }, index) => (
            <motion.div
              key={name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={href}>
                <div className="relative h-64 w-full">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center bg-white">
                  <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

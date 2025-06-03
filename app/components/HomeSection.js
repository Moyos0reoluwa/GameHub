"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "animate.css";

export default function HomeSection() {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('/heroImg.png')` }}
      id="Home"
    >
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Welcome to <span className="text-blue-300">GameHub</span>{" "}
            <span className="text-red-400">Universe</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-xl mx-auto">
            Your one-stop shop for PlayStation, Xbox, and Nintendo consoles,
            games, controllers and accessories.
          </p>
          <Link
            href="#products"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition animate__animated animate__bounce animate__infinite"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

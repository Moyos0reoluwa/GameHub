"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-white" id="About">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-red-600">GameHub</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            GameHub Universe is your trusted destination for all things gaming — from the latest consoles and games to exclusive accessories and deals.
          </p>
          <p className="text-md text-gray-600">
            We’re more than just a store. We’re a community of passionate gamers committed to providing the best gear, guidance, and gaming experience possible. Whether you’re a PlayStation pro, Xbox enthusiast, or Nintendo fan, we’ve got you covered.
          </p>
        </motion.div>

        {/* Image or Visual */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/img.png"
            alt="About GameHub"
            width={500}
            height={400}
            className="rounded-xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "animate.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Products", label: "Products" },
    { href: "#Contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/gamehub_logo.png"
              alt="GameHub Universe Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition font-medium ${
                  pathname === href
                    ? scrolled
                      ? "text-gray-900 font-semibold"
                      : "text-blue-600 font-semibold"
                    : scrolled
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-blue-600"
                } text-base lg:text-lg`}
              >
                {label}
              </Link>
            ))}

            {/* Search Input + Icon */}
            <div className="relative">
              <FiSearch
                className={`absolute top-1/2 left-3 transform -translate-y-1/2 ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              />
              <input
                type="text"
                placeholder="Search..."
                className={`pl-10 pr-3 py-1.5 rounded-lg bg-white text-sm ${
                  scrolled ? "text-gray-800" : "text-gray-800"
                } placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition w-40 lg:w-56`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const query = encodeURIComponent(e.currentTarget.value);
                    window.location.href = `/search?q=${query}`;
                  }
                }}
              />
            </div>

            {/* CTA Button (subtle pulse) */}
            <Link
              href="/products"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition animate__animated animate__pulse animate__infinite text-base lg:text-lg"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile Menu Toggle (only when closed) */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className={`md:hidden text-2xl focus:outline-none z-[60] ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              aria-label="Open menu"
            >
              <FiMenu className={`${scrolled ? "text-gray-800" : "text-white"}`} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar (75% viewport height, top-right) */}
            <motion.div
              className="fixed top-0 right-0 w-full sm:w-2/3 h-[75vh] bg-white shadow-lg z-50 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close button inside panel */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-2xl text-gray-800 focus:outline-none"
                aria-label="Close menu"
              >
                <FiX />
              </button>

              <div className="pt-12 px-6 flex flex-col items-center text-center space-y-4 overflow-y-auto">
                {/* Search Input + Icon inside mobile menu */}
                <div className="relative w-full mb-4">
                  <FiSearch className="absolute top-3 left-3 text-gray-800" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const query = encodeURIComponent(e.currentTarget.value);
                        window.location.href = `/search?q=${query}`;
                        setIsOpen(false);
                      }
                    }}
                  />
                </div>

                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`w-full py-3 border-b text-xl font-medium transition ${
                      pathname === href
                        ? "text-blue-600 font-semibold"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  href="/products"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition animate__animated animate__pulse animate__infinite"
                  onClick={() => setIsOpen(false)}
                >
                  Buy Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

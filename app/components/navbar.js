"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
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
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition font-medium ${
                  pathname === href
                    ? "text-blue-600 font-semibold"
                    : "text-white hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/products"
              className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition animate__animated animate__pulse animate__infinite"
            >
              Buy Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-800 hover:text-blue-600 focus:outline-none z-[60]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FiX className="text-gray-800" /> : <FiMenu className="text-white"/>}
          </button>
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

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 md:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="px-6 pt-16 flex flex-col items-center text-center">
                {navLinks.map(({ href, label }, index) => (
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
                <Link
                  href="/products"
                  className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-center animate__animated animate__pulse animate__infinite"
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

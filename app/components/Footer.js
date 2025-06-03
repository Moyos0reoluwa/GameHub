"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">GameHub Universe</h3>
          <p className="text-sm">
            Your one-stop destination for PlayStation, Xbox, Nintendo, and more.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-lg">
            <a href="https://facebook.com/share/1Aopy2a7YH/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-white transition" />
            </a>
            <a href="https://twitter.com/GameHubUniverse?t=AzWcf4uUo2WM1DI2JkhT4Q&s=35" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-white transition" />
            </a>
            <a href="https://instagram.com/gamehubuniverse?utm_source=qr&igsh=MWM1aWEzeGcxbzEwZQ==" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GameHub Universe. All rights reserved.
      </div>
    </footer>
  );
}

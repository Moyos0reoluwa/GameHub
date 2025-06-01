"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-red-100 py-24 px-6" id="Contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Reach out to us directly using your favorite platform.
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Email */}
          <a
            href="mailto:support@gamehub.com"
            className="bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition flex flex-col items-center"
          >
            <FaEnvelope className="text-2xl mb-2" />
            <span>Email</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+1234567890"
            className="bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition flex flex-col items-center"
          >
            <FaPhoneAlt className="text-2xl mb-2" />
            <span>Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition flex flex-col items-center"
          >
            <FaWhatsapp className="text-2xl mb-2 text-green-600" />
            <span>WhatsApp</span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition flex flex-col items-center"
          >
            <FaTwitter className="text-2xl mb-2 text-blue-400" />
            <span>Twitter</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition flex flex-col items-center"
          >
            <FaInstagram className="text-2xl mb-2 text-pink-500" />
            <span>Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md p-6 rounded-xl hover:bg-blue-50 transition flex flex-col items-center"
          >
            <FaFacebookF className="text-2xl mb-2 text-blue-600" />
            <span>Facebook</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "../assets/Logo/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 font-serif pt-30 pb-5 font-bold">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 text-xl font-bold text-green-700 italic mb-4">
            <img src={logo} alt="Logo" className="  w-20  object-contain" />
            <span>Giri Furni 🛋️</span>
          </div>
          <p className="text-sm text-gray-600">
            Premium furniture crafted with elegance and comfort. Make your home a masterpiece.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold ml-5 mb-3">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-sm ml-5">
            <NavLink to="/" className="hover:text-amber-600">Home 🏠</NavLink>
            <NavLink to="/shop" className="hover:text-amber-600">Shop 🛒</NavLink>
            <NavLink to="/about" className="hover:text-amber-600">About Us ✌️</NavLink>
            <NavLink to="/services" className="hover:text-amber-600">Services 👍</NavLink>
            <NavLink to="/contact" className="hover:text-amber-600">Contact ✌️</NavLink>
            <NavLink to="/blog" className="hover:text-amber-600">Blog🛍️</NavLink>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact 🛂</h4>
          <ul className="text-sm space-y-2">
            <li> 📩 Email: girifurni145@gmail.com</li>
            <li> ☎️ Phone: +977-9819720761</li>
            <li> 🛻 Address: Barmajhiya-Saptari, Nepal</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-xl text-green-700">
            <a href="http://facebook.com/bhuban.giri.969" target="_blank" className="hover:text-amber-600"><FaFacebookF /></a>
            <a href="https://www.instagram.com/bhuwan5053/" target="_blank" className="hover:text-amber-600"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@bhubangiri785?lang=en" target="_blank" className="hover:text-amber-600"><FaTiktok /></a>
            <a href="https://www.tiktok.com/@bhubangiri785?lang=en" target="_blank" className="hover:text-amber-600"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-4">
        © {new Date().getFullYear()} <NavLink to="/" className="text-green-800 underline italic">Giri Furni.</NavLink> All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import img3 from "../assets/img3.jpg";
import img2 from "../assets/img2.jpg";

import logo from "../assets/Logo/logo.png";
import product from "../assets/product.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import sofa1 from "../assets/sofa1.jpg";
import f1 from "../assets/images/f1.png"
import f2 from "../assets/images/f2.png"
import f3 from "../assets/images/f3.png"
import f4  from  "../assets/images/f4.png"
import f5 from "../assets/images/f5.png"
import f6 from "../assets/images/f6.png"
import f7 from "../assets/images/f7.png"
import f8 from "../assets/images/f8.png"
import f9 from "../assets/images/f9.png"

import { FaTruck } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { HiSupport } from "react-icons/hi";
import { FaRepeat } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="flex  mt-10 flex-col-reverse md:flex-row items-center font-serif justify-between px-6 md:px-16 py-12 bg-[#5B8E7D]">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Giri Furni Design Studio 🕉️🦚
          </h1>
          <p className="text-white text-base md:text-lg">
            Furniture plays a crucial role in both the functionality and
            aesthetic of any space. Choosing multi-functional and modular pieces
            can greatly enhance practicality, especially in smaller areas. Items
            like sofa beds, extendable dining tables, or storage ottomans are
            perfect examples of smart design.
          </p>
          <div className="flex flex-col font-serif sm:flex-row gap-4 justify-center md:justify-start">
            <NavLink to="/shop">
            <button className="px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-gray-800 transition">
              Shop Now ❤️
            </button>
            </NavLink>
            <NavLink to="/about">
            <button
              className="px-6 py-2  text-white
             rounded-full  hover:bg-gray-800 bg-amber-700 transition"
            >
              Explore ✌️🤷‍♂️
            </button>
            </NavLink>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src={logo} alt="logo" className="w-full max-w-md mx-auto" />
        </div>
      </div>

      <div className="px-6 font-serif md:px-16 py-12 bg-white">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            <span className="text-green-800">
              Crafted with excellent material.🏠🏘️🏦
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
          Discover our curated selection of top-quality furniture, where premium craftsmanship meets affordability. Find luxurious or budget-friendly furniture pieces, handpicked for your home.
          </p>
         <NavLink to="/services">
         <button className="px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition">
            Explore
          </button>
         </NavLink>
        </div>

        <div className="grid font-serif gap-8 md:grid-cols-3">
          {[
            { img: product, name: "Nordic Chair", price: "Rs: 8000.00" },
            { img: product1, name: "Kruzo Aero Chair", price: "Rs: 10000.00" },
            { img: product2, name: "Ergonomic Chair", price: "Rs: 8000.00" },
            { img: f1, name: "Sofa", price: "Rs: 53000.00" },
            { img: f2, name: "Seater Sofa", price: "Rs: 60000.00" },
            { img: f3, name: "5 Seater Sofa", price: "Rs: 40000.00" },
            { img: f4, name: "Bed", price: "Rs: 80000.00" },
            { img: f5, name: "Study Table", price: "Rs: 15000.00" },
            { img: f6, name: "Sofa", price: "Rs: 40000.00" },
            { img: f7, name: "Kitchen Decor", price: "Rs: 120000.00" },
            { img: f8, name: "4 Seater sofa", price: "Rs: 40000.00" },
            { img: f9, name: "Bed", price: "Rs: 25000.00" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-gray-50 rounded-2xl overflow-hidden shadow-md  hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full mt-8 h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-400"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
                  New
                </span>
              </div>
              <div className="text-center p-4 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-600">{item.price}</p>
                <div className="flex justify-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.64 12.18 1 7.91l6.06-.88L10 2l2.94 5.03L19 7.91l-4.64 4.27 1.52 5.91z" />
                    </svg>
                  ))}
                </div>
                <NavLink to="/shop">
                <button className=" mt-5 ">
                  <span className="bg-white text-black px-5 py-2 items-center rounded-full font-medium  shadow-md">
                    Add to Cart
                  </span>
                </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 font-serif md:px-16 py-12 bg-white flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="text-center lg:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">
              Why Choose Us 🛖🏚️🏠🏘️
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
            At Giri Furni, we’re more than just furniture—we’re about creating spaces you love. With high-quality craftsmanship, stylish designs, and customer-first service, we make it easy to furnish your home with confidence. Enjoy fast & free shipping, 24/7 support, and hassle-free returns. Your comfort and satisfaction are our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <FaTruck size={32} className="text-amber-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Fast & Free Shipping 🛍️
                </h2>
                <p className="text-gray-600 text-sm">
                Get your dream furniture delivered fast—at no extra cost Fast, free shipping on every piece of furniture. No hidden fees We offer fast and free shipping on all furniture, so you can shop stress-free
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GiShoppingBag size={32} className="text-amber-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Easy to Shop 🏪
                </h2>
                <p className="text-gray-600 text-sm">
                We’ve made furniture shopping simple and stress-free. Browse through our collections with ease, enjoy a smooth checkout process, and get what you love without the hassle. Whether you’re at home or on the go, finding the perfect piece is just a few clicks away
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HiSupport size={32} className="text-amber-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  24/7 Support 🏪
                </h2>
                <p className="text-gray-600 text-sm">
                We’re here for you anytime. Our dedicated support team is available 24/7 to assist with orders, product info, or anything else you need—day or night.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaRepeat size={32} className="text-amber-600" />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Hassle Free Returns 🏦
                </h2>
                <p className="text-gray-600 text-sm">
                We offer easy and stress-free returns to make sure you’re completely satisfied. Just follow a few simple steps and we’ll take care of the rest—no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full font-serif lg:w-1/2">
          <img
            src={sofa1}
            alt="Sofa"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>
      </div>

      <div className="relative font-serif flex justify-center items-center px-6 py-12 bg-gray-200">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          <img
            src={img3}
            alt="Main"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
        <div className="absolute font-serif top-0 right-0 w-[35%] md:w-[25%] lg:w-[20%]">
          <img
            src={img2}
            alt="Small"
            className="w-full h-full object-cover rounded-xl shadow-md border-4 border-white"
          />
        </div>
      </div>

      <div className="grid font-serif grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 bg-gray-100">
        <div className="relative group bg-gray-200 p-6 rounded-lg text-center">
          <img
            src={product}
            alt="Nordic Chair"
            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-800">
            Nordic Chair
          </h1>
          <p className="text-gray-600 text-sm mt-2">
          A perfect blend of minimalist design and everyday comfort, the Nordic Chair adds a modern touch to any space. Crafted with clean lines, natural materials, and a timeless Scandinavian aesthetic, it’s ideal for both dining and lounging. Style meets simplicity—beautifully
          </p>
          <NavLink
            to="/"
            className="text-amber-600 text-sm mt-2 inline-block transition-all duration-300 group-hover:underline"
          >
            <NavLink to="/shop"><button><span>Read More</span></button></NavLink>
          </NavLink>
        </div>
        <div className="relative group bg-gray-200 p-6 rounded-lg text-center">
          <img
            src={product1}
            alt="Kruzo Aero Chair"
            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-800">
            Kruzo Aero Chair
          </h1>
          <p className="text-gray-600 text-sm mt-2">
          Elevate your space with the Kruzo Aero Chair—where modern design meets ergonomic comfort. Featuring a sleek, curved silhouette and breathable materials, it’s built for both style and support. Perfect for home offices, lounges, or creative spaces, this chair delivers on both form and function
          </p>
          <NavLink
            className="text-amber-600 text-sm mt-2 inline-block transition-all duration-300 group-hover:underline"
          >
             <NavLink to="/shop"><button><span>Read More</span></button></NavLink>
          </NavLink>
        </div>
        <div className="relative group bg-gray-200 p-6 rounded-lg text-center">
          <img
            src={product2}
            alt="Ergonomic Chair"
            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="mt-4 text-xl font-semibold text-gray-800">
            Ergonomic Chair
          </h1>
          <p className="text-gray-600 text-sm mt-2">
          Designed for all-day comfort, our Ergonomic Chair supports your posture with adjustable features and contoured cushioning. Whether you're working, studying, or relaxing, it helps reduce strain and boost productivity—comfort that works as hard as you do
          </p>
          <NavLink
            to="/"
            className="text-amber-600 text-sm mt-2 inline-block transition-all duration-300 group-hover:underline"
          >
             <NavLink to="/shop"><button><span>Read More</span></button></NavLink>
          </NavLink>
        </div>
      </div>
      {/* <TestimonialSlider/> */}
        
    </div>
  );
}

export default Home;

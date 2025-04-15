import React from "react";
import { FaCouch, FaPaintRoller, FaWrench, FaThLarge, FaCubes, FaBuilding } from "react-icons/fa";
import post from "../assets/post.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import product from "../assets/product.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";

const services = [
  {
    title: "Custom Furniture",
    description: "We specialize in custom-made furniture tailored to your style and space. Modern, classic, rustic – we create what you imagine.",
    image: post,
    icon: <FaCouch className="text-4xl text-amber-600 mb-4" />,
    link: "/services/custom-furniture"
  },
  {
    title: "Interior Design",
    description: "Our professional interior designers transform your rooms into functional, beautiful spaces aligned with your lifestyle.",
    image: post1,
    icon: <FaPaintRoller className="text-4xl text-amber-600 mb-4" />,
    link: "/services/interior-design"
  },
  {
    title: "Furniture Repair",
    description: "We restore furniture to its former glory. From structural fixes to cosmetic touch-ups – leave it to our skilled craftsmen.",
    image: post2,
    icon: <FaWrench className="text-4xl text-amber-600 mb-4" />,
    link: "/services/furniture-repair"
  },
  {
    title: "Space Planning",
    description: "Maximize your space with smart, strategic layout planning that blends functionality and style.",
    image: product,
    icon: <FaThLarge className="text-4xl text-amber-600 mb-4" />,
    link: "/services/space-planning"
  },
  {
    title: "3D Visualization",
    description: "Visualize your space before implementation. Our 3D renders help you explore the design realistically and confidently.",
    image: product1,
    icon: <FaCubes className="text-4xl text-amber-600 mb-4" />,
    link: "/services/3d-visualization"
  },
  {
    title: "Commercial Projects",
    description: "From corporate offices to retail stores, we design commercial spaces that reflect brand identity and function.",
    image: product2,
    icon: <FaBuilding className="text-4xl text-amber-600 mb-4" />,
    link: "/services/commercial-projects"
  }
];

function Service() {
  return (
    <div className="py-16 font-serif bg-gray-50">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-green-700">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore the high-quality services we offer to meet your needs and exceed your expectations. Crafted with care, backed by experience.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center group hover:shadow-xl transition duration-300">
              <div className="overflow-hidden rounded-md mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
              </div>
              {service.icon}
              <h3 className="text-2xl font-semibold text-green-700 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <a
                href={service.link}
                className="inline-block  bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-5 rounded-3xl shadow shadow-gray-900 transition duration-300"
              >
                Request Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;

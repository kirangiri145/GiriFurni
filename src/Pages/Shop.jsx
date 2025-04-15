import React from "react";
import { useCart } from "../Context/CartContext"; 
import { useNavigate } from "react-router-dom"; 
import { toast, Bounce } from "react-toastify";



import img1 from "../assets/img1.jpg";
import product from "../assets/product.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import post from "../assets/post.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";
import f5 from "../assets/images/f5.png";
import f6 from "../assets/images/f6.png";
import f7 from "../assets/images/f7.png";
import f8 from "../assets/images/f8.png";
import f9 from "../assets/images/f9.png";
import f10 from "../assets/images/f10.jpg";
import f11 from "../assets/images/f11.jpg";
import f12 from "../assets/images/f12.jpg";
import f13 from "../assets/images/f13.jpg";
import f14 from "../assets/images/f14.jpg";
import f15 from "../assets/images/f15.jpg";
import f16 from "../assets/images/f16.jpg";
import f17 from "../assets/images/f17.jpg";
import b1 from "../assets/Model/b1.jpeg"
import b2 from "../assets/Model/b2.jpg"
import b3 from "../assets/Model/b3.jpg"
import b4 from "../assets/Model/b4.jpg"
import b5 from "../assets/Model/b5.webp"
import b6 from "../assets/Model/b6.png"
import b7 from "../assets/Model/b7.webp"
import b8 from "../assets/Model/b8.jpg"
import b10 from "../assets/Model/b10.webp"
import b11 from "../assets/Model/b11.jpeg"
import b12 from "../assets/Model/b12.webp"
import b13 from "../assets/Model/b13.webp"
import b14 from "../assets/Model/b14.jpg"
import b15 from "../assets/Model/b15.jpg"
import b16 from "../assets/Model/b16.jpg"
import b18 from "../assets/Model/b18.webp"
import b19 from "../assets/Model/b19.jpg"
import b20 from "../assets/Model/b20.jpeg"
import b21 from "../assets/Model/b21.jpg"
import b22 from "../assets/Model/b22.jpg"
import b23 from "../assets/Model/b23.webp"
import b24 from "../assets/Model/b24.jpg"

const products = [
  {
    id: 1,
    title: "Nordic Chair",
    price: "Rs: 4000.00",
    image: img1,
    description: "Comfortable and stylish Nordic-style chair.",
  },
  
  {
    id: 2,
    title: "TableLamp",
    price: "Rs: 8500.00",
    image: img2,
    description: "Elegant, Functional, Minimalist or Versatile",
  },
  {
    id: 3,
    title: "Flower Stan",
    price: "Rs: 3000.00",
    image: product,
    description: "Elegance and charm to any room.",
  },
  {
    id: 4,
    title: "Modern Desk",
    price: "Rs: 5500.00",
    image: img3,
    description: "Spacious and minimalistic modern desk.",
  },
  {
    id: 5,
    title: "Sofa Set",
    price: "Rs: 12000.00",
    image: img2,
    description: "Stylish sofa set perfect for living rooms.",
  },
  {
    id: 6,
    title: "Dining Table",
    price: "Rs: 9500.00",
    image: product,
    description: "Modern dining table with a minimalist design.",
  },
  {
    id: 7,
    title: "Kruzo Aero Chair",
    price: "Rs: 8500.00",
    image: product1,
    description:" Designed with a smooth, contoured silhouette and crafted from high-quality materials, it provides exceptional support for long sitting hours. Its unique design makes it ideal for both home offices and stylish lounges, offering a bold yet sophisticated touch."
  },
  {
    id: 8,
    title: "Sleeping Sofa",
    price: "Rs: 40000.00",
    image: f1,
    description:"Ideal for small spaces or guest rooms, this versatile piece provides a practical solution for lounging during the day and sleeping at night. With soft cushions and a modern design, it ensures a restful sleep and stylish seating all in one."
  },
  {
    id: 9,
    title: "Ergonomic Chair",
    price: "Rs: 5000.00",
    image: post,
    description:"The Ergonomic Chair is designed for optimal comfort and support, providing a perfect seating solution for long hours of work or relaxation. With adjustable features, lumbar support, and a contoured design, it promotes healthy posture and reduces strain on the back and neck. "
  },
  {
    id: 10,
    title: "Ergonomic Chair",
    price: "Rs: 10000.00",
    image: post1,
    description:" Workspaces or study areas, this chair blends functionality with modern style to enhance your productivity and comfort."
  },
  {
    id: 11,
    title: "sofa With Tool",
    price: "Rs: 25000.00",
    image: post2,
    description:"The Sofa with Tool is a multifunctional piece that combines comfort with practicality. Equipped with built-in tools like adjustable recliners, USB charging ports, or hidden storage, this sofa enhances your living space by offering convenience alongside relaxation. "
  },
  {
    id: 12,
    title: "Sleeping Sofa",
    price: "Rs: 40000.00",
    image: f1,
    description:"Its soft cushions and modern design ensure comfort both as a sofa and as a bed, making it an essential addition to any home."
  },
  {
    id: 13,
    title: "5 Seater Sofa",
    price: "Rs: 90000.00",
    image: f2,
    description:"The 5-Seater Sofa offers ample space and exceptional comfort, making it perfect for larger families or those who enjoy hosting guests. With its plush cushions, sturdy frame, and stylish design, this sofa combines relaxation with elegance."
  },
  {
    id: 14,
    title: "5 Seater Sofa",
    price: "Rs: 80000.00",
    image: f3,
    description:"Whether for lounging, watching movies, or socializing, it provides the perfect setting for everyone to unwind together in comfort and style."
  },
  {
    id: 15,
    title: "Single Bed With Metress",
    price: "Rs: 45000.00",
    image: f4,
    description:"The Single Bed is a perfect choice for compact spaces, offering a simple yet stylish design that doesn't compromise on comfort. With its sturdy frame and soft mattress, it provides a restful sleep experience while maximizing room space."
  },
  {
    id: 16,
    title: "Study Table",
    price: "Rs: 15000.00",
    image: f5,
    description:"The Study Table is designed to enhance your workspace with a clean, organized setup. Featuring spacious drawers and a sleek surface, it provides ample room for books, laptops, and stationery, making studying or working more efficient."
  },
  {
    id: 17,
    title: "Modern Sofa",
    price: "Rs: 95000.00",
    image: f6,
    description:"Offering a stylish addition to any living room or lounge area. With its clean lines, plush cushions, and contemporary aesthetics, it creates an inviting space for relaxation and socializing."
  },
  {
    id: 18,
    title: "Kitchen Decor",
    price: "Rs: 150000.00",
    image: f7,
    description:"From stylish wall art and innovative storage solutions to unique accessories like decorative trays and plants, kitchen decor enhances both the functionality and aesthetic appeal of your kitchen."
  },
  {
    id: 19,
    title: "",
    price: "Rs: 50000.00",
    image: f8,
    description:"Featuring a solid wooden frame and plush cushions, it offers both comfort and durability. The natural wood finish enhances the sofa's classic appeal, making it a perfect fit for any living room or traditional decor."
  },
  {
    id: 20,
    title: "Bed",
    price: "Rs:40000.00",
    image: f9,
    description:"Its durable wooden frame ensures long-lasting support, while the simple design complements any bedroom decor. Perfect for children’s rooms, guest rooms, or smaller apartments, this bed provides both comfort and elegance in one timeless piece."
  },
  {
    id: 21,
    title: "Computer Table",
    price: "Rs: 18000.00",
    image: f10,
    description:"Table is designed to provide a sturdy, spacious workspace for your computing needs. With its durable wooden frame and functional layout, it offers ample space for your computer, documents, and accessories. The sleek design complements any office or study area, while the natural wood finish adds warmth and sophistication."
  },
  {
    id: 22,
    title: "Tea Table",
    price: "Rs: 10000.00",
    image: f11,
    description:"Tea Table brings warmth and charm to your living space with its elegant, natural wood finish. Perfect for serving tea or coffee, this table features a sturdy wooden frame and a spacious surface for drinks, snacks, and decorative items. Its timeless design complements both modern and traditional interiors, making it an ideal addition to your living room or lounge area."
  },
  {
    id: 23,
    title: "Study Table",
    price: "Rs: 15000.00",
    image: f12,
    description:"Table with Computer combines functionality and style to create the perfect workspace. Crafted from durable wood, it features a spacious surface that accommodates your computer, books, and study materials. The sleek design ensures ample room for comfortable work, while the natural wood finish adds a touch of warmth to any study or office environment."
  },
  {
    id: 24,
    title: "Dining Table With 4 chair",
    price: "Rs: 30000.00",
    image: f13,
    description:" Dining table is designed to bring family and friends together. Crafted from high-quality wood with a smooth finish, it offers a spacious and sturdy surface perfect for meals, conversations, and special gatherings. Its timeless design complements any interior, making it a beautiful and functional centerpiece for your dining area."
  },
  {
    id: 25,
    title: "Sleeping Sofa",
    price: "Rs: 26000.00",
    image: product2,
    description:"Sleeping sofa combines comfort and convenience, offering a cozy seating space by day and transforming into a comfortable bed by night. Its sleek design, soft cushioning, and durable upholstery make it perfect for small spaces, guest rooms, or anyone who loves versatile furniture with style."
  },
  {
    id: 26,
    title: "Computer Table",
    price: "Rs: 18000.00",
    image: f15,
    description:"Computer table is designed for productivity and organization, featuring a spacious surface, cable management options, and sturdy wooden construction. Ideal for home offices or study corners, it combines modern design with everyday convenience."
  },
  {
    id: 27,
    title: "Double Bed",
    price: "Rs:75000.00",
    image: f16,
    description:"This elegant double bed offers both comfort and style, crafted with durable wood and a smooth finish. Its spacious design provides ample room for restful sleep, making it a perfect centerpiece for any bedroom."
  },
  {
    id: 28,
    title: "Double Bed",
    price: "Rs: 80000.00",
    image: f17,
    description:"A sturdy and practical box palang, designed with built-in storage to maximize bedroom space. Its solid wooden frame and minimalist design bring functionality and traditional charm together for everyday comfort."
  },
  {
    id: 29,
    title: "Modern Bed With Mattress",
    price: "Rs: 90000.00",
    image: f4,
    description:"A sleek and stylish modern bed paired with a comfortable mattress, designed to provide both elegance and restful sleep. Its contemporary design fits effortlessly into any modern bedroom décor."
  },
  {
    id: 30,
    title: "Kitchen Decoration",
    price: "Rs: 100000.00",
    image: f7,
    description:"Beautifully crafted kitchen decor pieces designed to enhance the heart of your home. Perfect for adding charm, organization, and style to your cooking space."
  },
  {
    id: 31,
    title: "Study Table With Computer",
    price: "Rs: 25000.00",
    image: f12,
    description:"A multifunctional wooden study table with ample space for a computer setup, providing an organized and comfortable workspace ideal for both students and professionals."
  },
  {
    id: 32,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: f14,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 33,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b1,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 34,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b2,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 35,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b3,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 36,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b4,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 37,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b5,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 38,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b6,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 39,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b7,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 40,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b8,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 41,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b10,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 42,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b11,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 43,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b12,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 44,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b14,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 45,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b14,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 46,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b15,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 47,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b16,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 48,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b1,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 49,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b18,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 50,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b19,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 51,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b20,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 52,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b21,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 53,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b22,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 54,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b23,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 55,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b24,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },
  {
    id: 56,
    title: "Dianing Table With 4 Chair",
    price: "Rs: 9000.00",
    image: b10,
    description:"A stylish dining table set that includes four comfortable chairs, perfect for cozy family dinners or small gatherings, combining elegance and functionality in a compact design."
  },


  
  
];

function Shop() {
  
  const { addToCart } = useCart(); 
  const navigate = useNavigate(); 

  const handleAddToCart = (product) => {
    addToCart(product); 
    navigate("/cart"); 
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="py-16 font-serif bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-center text-green-700 font-bold">
                {product.price}
              </p>
              <div className="text-center mt-4">
                <button
                  onClick={() => handleAddToCart(product)} 
                  className="bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
              {product.description && (
                <p className="mt-4 text-sm text-center font-serif text-gray-600">
                  {product.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;

import React from "react";
import post from "../assets/post.jpg";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import product from "../assets/product.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";

function Blog() {
  return (
    <div className="blog-section py-12 font-serif bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[post, post1, post2, product, product1, product2, post1, post, post2].map(
            (imgSrc, index) => {
              const titles = [
                "First Time Home Owner Ideas",
                "How To Keep Your Furniture Clean",
                "Small Space Furniture Apartment Ideas",
              ];
              const authors = ["Bhuban Giri", "Raj Cahudhary", "Arun madal"];
              const dates = ["Dec 19, 2025", "Dec 15, 2024", "Dec 12, 2023"];

              return (
                <div
                  key={index}
                  className="post-entry bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
                >
                  <a href="#" className="post-thumbnail block">
                    <img
                      src={imgSrc}
                      alt={titles[index % 3]}
                      className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-110"
                    />
                  </a>
                  <div className="post-content-entry p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      <a href="#" className="hover:underline">
                        {titles[index % 3]}
                      </a>
                    </h3>
                    <div className="meta text-sm text-gray-600 mt-2">
                      <span>
                        by{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                          {authors[index % 3]}
                        </a>
                      </span>
                      <span className="mx-2">on</span>
                      <span>
                        <a href="#" className="text-blue-500 hover:underline">
                          {dates[index % 3]}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Blog;

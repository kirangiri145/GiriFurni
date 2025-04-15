// import { useState } from 'react';
// import person from "../../assets/person.jpg";
// import person1 from "../../assets/person1.jpg";
// import person2 from "../../assets/person2.jpg";
// import person3 from "../../assets/person3.jpg";

// const TestimonialSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonials = [
//     {
//       img: person,
//       name: "John Doe",
//       text: "This is the best furniture store I've ever shopped from. Highly recommend!"
//     },
//     {
//       img: person1,
//       name: "Jane Smith",
//       text: "Amazing quality and fast delivery. I'm absolutely in love with my new chair!"
//     },
//     {
//       img: person2,
//       name: "Mark Johnson",
//       text: "Great customer service and excellent products. Would shop again!"
//     },
//     {
//       img: person3,
//       name: "Sarah Lee",
//       text: "The best shopping experience ever. I highly recommend this store!"
//     }
//   ];

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full bg-gray-100 py-12">
//       <div className="relative w-full max-w-2xl mx-auto">
//         <div
//           className="transition-all duration-500 ease-in-out transform"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="flex justify-center items-center flex-shrink-0 w-full bg-white p-6 rounded-lg shadow-lg"
//             >
//               <img
//                 src={testimonial.img}
//                 alt={testimonial.name}
//                 className="w-16 h-16 rounded-full mx-auto"
//               />
//               <h3 className="mt-4 text-xl font-semibold text-gray-800">{testimonial.name}</h3>
//               <p className="text-gray-600 mt-2">{testimonial.text}</p>
//             </div>
//           ))}
//         </div>
//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
//           onClick={goToPrevious}
//         >
//           {/* &#8249; */}
//         </button>
//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
//           onClick={goToNext}
//         >
//           &#8250;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

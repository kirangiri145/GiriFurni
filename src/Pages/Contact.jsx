import React, { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosTime } from "react-icons/io";
import PhoneInput from "react-phone-input-2";
import Bhuban from "../assets/Bhuban.png";

function Contact() {
  const [Phone, setPhone] = useState("");

  return (
    <div className="overflow-x-hidden font-serif">
      <div className="py-16 rounded-4xl shadow-2xl  shadow-gray-950 bg-gray-100">
        <div className="container rounded-2xl shadow shadow-black mx-auto px-4">
          <div className="text-center shadow-2xl  rounded-2xl shadow-black mb-12">
            <h2 className="text-3xl md:text-4xl mt-2 font-bold text-green-800">
              CEO Message
            </h2>
          </div>
          <div className="flex  justify-center">
            <div className="bg-white p-6 sm:p-8  shadow-2xl shadow-gray-950 rounded-3xl mb-6 text-center max-w-md">
              <img
                src={Bhuban}
                alt="Bhuban Giri"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Bhuban Giri
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                CEO, Co-Founder, Giri Furniture Inc.
              </p>
              <blockquote className="text-gray-700 text-sm sm:text-base">
                &ldquo;At Giri Furni Shop, our mission is to deliver not just
                furniture, but pieces that enrich your space and stand the test
                of time. We're dedicated to providing exceptional
                quality.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 px-4 md:px-16">
        <div className="text-center mb-6 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 ">
            Our Contact
          </h1>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-orange-500">
            GET IN TOUCH
          </h2>
        </div>
        <div className="text-center max-w-lg mx-auto mb-8">
          <h2 className="text-xl font-semibold text-gray-700">
            Our Friendly Team would love to hear from you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center md:text-left">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-gray-800 flex justify-center md:justify-start gap-2 items-center">
              <FaLocationPin size={28} className="text-amber-600" />
              Location
            </h1>
            <p className="text-gray-600 mt-2">
              Brmajhiya Word No:-2, Saptari, Nepal
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-gray-800 flex justify-center md:justify-start gap-2 items-center">
              <FiPhoneCall size={28} className="text-amber-600" />
              Phone
            </h1>
            <p className="text-gray-600 mt-2">
              <span className="text-green-800 font-bold"> Mobile:</span> (+977)
              9819720761 <br />
              <span className="block">(+977) 9824751818</span>
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold text-gray-800 flex justify-center md:justify-start gap-2 items-center">
              <IoIosTime size={28} className="text-amber-600" />
              Service Time
            </h1>
            <p className="text-gray-600 mt-2">
              <span className="text-green-800 font-bold"> SUN-FRI:</span>{" "}
              <span className="font-semibold">8am-6pm</span>
            </p>
            <p className="text-gray-600 mt-2">
              <span className="text-green-800 font-bold">SAT-SUN:</span>{" "}
              <span className="font-semibold text-red-500">Closed</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-12 md:px-16 bg-gray-100">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.4027842136002!2d86.89859770615335!3d26.601272546900084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eee38c02e37ec1%3A0x9db2eb7cbf6bbfa1!2sGIRI%20FURNITURE!5e1!3m2!1sne!2snp!4v1744712635570!5m2!1sne!2snp"
            width="600"
            height="450"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Contact <span className="text-amber-700">Us</span>
            </h1>
            <p className="text-gray-600 mt-2 font-semibold">
              If you have any queries, send us a message. Our friendly team
              would love to hear from you.
            </p>
          </div>

          <form
            action="https://getform.io/f/bejrxvza"
            method="POST"
            className="space-y-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-semibold">
                  First Name
                </label>
                <input
                   name="name"
                  type="text"
                  placeholder="Enter First Name"
                  className="border p-2 rounded w-full focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 font-semibold">
                  Last Name
                </label>
                <input
                 name="name"
                  type="text"
                  placeholder="Enter Last Name"
                  className="border p-2 rounded w-full focus:ring-2 focus:ring-orange-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
              name="email"
                type="email"
                placeholder="Enter Email"
                className="border p-2 rounded w-full focus:ring-2 focus:ring-orange-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Phone</label>
              <PhoneInput
                country={"np"}
                value={Phone}
                onChange={(value) => setPhone(value)}
                inputClass="!w-full border p-2 rounded focus:ring-2 focus:ring-orange-300"
                containerClass="w-full"
                preferredCountries={["np", "in", "us"]}
                enableSearch
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
              name="message"
               type="text"
                rows="3"
                placeholder="Enter Message Here..."
                className="border p-2 rounded w-full focus:ring-2 focus:ring-orange-300"
              ></textarea>
            </div>
            <button className="bg-emerald-700 text-white py-3 px-6 rounded-lg hover:bg-orange-600 w-full transition duration-300 ease-in-out">
              <span className="text-amber-50">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

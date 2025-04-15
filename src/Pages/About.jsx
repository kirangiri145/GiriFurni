import React from "react";
import bhuban from "../assets/Worker/bhuban.jpg";
import raj from "../assets/Worker/raj.jpg";
import arun from "../assets/Worker/arun.jpg";
import binod from "../assets/Worker/binod.jpg";
import pardip from "../assets/Worker/pradip.jpg";
import manoj from "../assets/Worker/manoj.jpg";
import mohan from "../assets/Worker/mohan.jpg";
import lala from "../assets/Worker/lala.jpg";
import santosh from "../assets/Worker/santosh.jpg";
import sarban from "../assets/Worker/sarban.jpg";
import sanjay from "../assets/Worker/sanjay.jpg";
import rupesh from "../assets/Worker/rupesh.jpg";
import suraj from "../assets/Worker/suraj.jpg";
import suran from "../assets/Worker/suran.jpg";
import suren from "../assets/Worker/suren.jpg";
import sofa from "../assets/Worker/Sofa.jpg";
import butta from "../assets/Worker/butta.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Team Member",
    phone: "9819720761",
    role: "Bhuban Giri",
    image: bhuban,
    featured: true,
  },
  {
    id: 2,
    name: "Raj chaudhary",
    phone: "9800000002",
    role: "Supervisor",
    image: raj,
  },
  {
    id: 3,
    name: "Arun Mandal",
    phone: "9800000003",
    role: "Sub-Supervisor",
    image: arun,
  },
  {
    id: 4,
    name: "Binod Mukhiya",
    phone: "9800000004",
    role: "Designer (Buta)",
    image: binod,
  },
  {
    id: 5,
    name: "Pardip Giri",
    phone: "9800000005",
    role: "Head Painter",
    image: pardip,
  },
  {
    id: 6,
    name: "Manoj",
    phone: "9800000006",
    role: "Painter",
    image: manoj,
  },
  {
    id: 7,
    name: "Mohan",
    phone: "9800000007",
    role: "Painter",
    image: mohan,
  },
  {
    id: 8,
    name: "Lala Mandal",
    phone: "9800000008",
    role: "Worker",
    image: lala,
  },
  {
    id: 9,
    name: "Santosh Madal",
    phone: "9800000009",
    role: "Worker",
    image: santosh,
  },
  {
    id: 10,
    name: "Sarban Mandal",
    phone: "9800000010",
    role: "Worker",
    image: sarban,
  },
  {
    id: 11,
    name: "Sanjay Madal",
    phone: "9800000011",
    role: "Worker",
    image: sanjay,
  },
  {
    id: 12,
    name: "Rupesh Giri",
    phone: "9800000012",
    role: "Worker",
    image: rupesh,
  },
  {
    id: 13,
    name: "Suraj Giri",
    phone: "9800000013",
    role: "Worker",
    image: suraj,
  },
  {
    id: 14,
    name: "Suran Mandal",
    phone: "9800000014",
    role: "Worker",
    image: suran,
  },
  {
    id: 15,
    name: "Suren Mandal",
    phone: "9800000015",
    role: "Worker",
    image: suren,
  },
  {
    id: 16,
    name: "Ramcharan Mandal",
    phone: "9800000016",
    role: "Butta Designer",
    image: butta,
  },
  {
    id: 17,
    name: "Khoni Vai",
    phone: "9800000017",
    role: "Sofa Maker",
    image: sofa,
  },
];

function About() {
  const featuredMember = teamMembers.find((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);

  return (
    <div className="py-16 font-serif shadow-2xl shadow-gray-950 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">Our Team</h2>
        </div>

        {/* Featured Member */}
        {featuredMember && (
          <div className="mb-12">
            <div className="w-full rounded-xl overflow-hidden shadow-lg group">
              <img
                src={featuredMember.image}
                alt={featuredMember.name}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6 text-center font-serif bg-green-50">
                <h3 className="text-2xl font-semibold text-gray-950">
                  {featuredMember.name}
                </h3>
                <p className="text-green-600 font-medium">
                  {featuredMember.role}
                </p>
                <p className="text-gray-700 text-sm mt-1">
                  📞 {featuredMember.phone}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Other Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherMembers.map((member) => (
            <div
              key={member.id}
              className="text-center bg-gray-50 rounded-xl shadow-lg p-4 hover:shadow-2xl transition group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover mb-4 rounded-lg transform transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium">{member.role}</p>
              <p className="text-gray-700 text-sm mt-1">📞 {member.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

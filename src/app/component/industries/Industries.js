"use client";
import React from "react";

function Industries() {
  return (
    <div>
      <div className="bg-[#ecf2f6] pt-10 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-black">
              Industries <span className="text-primary">We Serve</span>
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {/* Healthcare */}
            <div className="relative bg-gray-100 rounded-lg text-center border border-gray-300 h-80 p-5">
              <div className="flex justify-center mb-5">
                <div className="mb-4 flex items-center justify-center bg-gray-800 rounded-lg text-primary text-xl w-16 h-16">
                  <i className="fa fa-medkit text-white"></i>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">Healthcare</h3>
              <p className="mb-0 font-medium text-gray-500">
                Achieve work-life balance and choose when and where you work.
              </p>
              <a
                href="#"
                className="inline-block text-gray-600 mt-4 hover:text-gray-800 transition duration-300 text-sm"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-right fa-sm ml-1"></i>
              </a>
            </div>

            {/* Educational */}
            <div className="relative bg-gray-100 rounded-lg text-center border border-gray-300 h-80 p-5">
              <div className="flex justify-center mb-5">
                <div className="mb-4 flex items-center justify-center bg-gray-800 rounded-lg text-primary text-xl w-16 h-16">
                  <i className="fa fa-graduation-cap text-white"></i>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">
                Educational
              </h3>
              <p className="mb-0 font-medium text-gray-500">
                Interactive and engaging educational services and products that
                bring successful educational information exchange.
              </p>
              <a
                href="#"
                className="inline-block text-gray-600 mt-4 hover:text-gray-800 transition duration-300 text-sm"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-right fa-sm ml-1"></i>
              </a>
            </div>

            {/* E-Commerce */}
            <div className="relative bg-gray-100 rounded-lg text-center border border-gray-300 h-80 p-5">
              <div className="flex justify-center mb-5">
                <div className="mb-4 flex items-center justify-center bg-gray-800 rounded-lg text-primary text-xl w-16 h-16">
                  <i className="fa fa-cart-plus text-white"></i>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">E-Commerce</h3>
              <p className="mb-0 font-medium text-gray-500">
                Leading-edge tech solutions for E-Commerce that bring scalable
                results and success to businesses.
              </p>
              <a
                href="#"
                className="inline-block text-gray-600 mt-4 hover:text-gray-800 transition duration-300 text-sm"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-right fa-sm ml-1"></i>
              </a>
            </div>

            {/* Agriculture */}
            <div className="relative bg-gray-100 rounded-lg text-center border border-gray-300 h-80 p-5">
              <div className="flex justify-center mb-5">
                <div className="mb-4 flex items-center justify-center bg-gray-800 rounded-lg text-primary text-xl w-16 h-16">
                  <i className="fa fa-leaf text-white"></i>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-black">Agriculture</h3>
              <p className="mb-0 font-medium text-gray-500">
                Smart agricultural solutions that manage, streamline, and scale
                your AgriTech operations beyond boundaries.
              </p>
              <a
                href="#"
                className="inline-block text-gray-600 mt-4 hover:text-gray-800 transition duration-300 text-sm"
              >
                Read More{" "}
                <i className="fas fa-long-arrow-right fa-sm ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;

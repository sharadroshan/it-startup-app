"use client";

import React from "react";
import Image from "next/image";
import Lisungi_new from "../../assets/lisungi-new.webp";

function Stories() {
  return (
    <div>
      <div className="bg-[#fcefe0] pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className="">
              <h1 className="text-5xl font-bold text-black leading-tight">
                <span className="text-black">Success</span>
                <br />
                <span className="text-primary">Stories</span>
              </h1>
              <div className="text-lg text-black">
                <p className="mt-10">
                  Building delightful software products and crafting exceptional
                  digital experiences for pioneering enterprises, unicorns, and
                  innovative startups.
                </p>
                <p className="mt-5">
                  We empower your business with innovative digital solutions
                  beyond the ordinary.
                </p>
              </div>
              <button className=" mt-14 px-12 py-3 bg-primary text-white hover:bg-primaryHover rounded-lg">
                Get in touch
              </button>
            </div>
            <div className="grid justify-center items-center text-center ">
              <div className="relative w-[400px] h-[500px] grid grid-rows-2 rounded-3xl overflow-hidden shadow-lg">
                <div className="flex justify-center items-center bg-gray-200">
                  <Image
                    src={Lisungi_new}
                    width={150}
                    height={150}
                    alt="Lisungi New"
                  />
                </div>
                <div className="bg-white text-left text-black p-10">
                  <h1 className="text-2xl mb-5 font-bold">
                    Award achieved by our client
                  </h1>
                  <p className="font-semibold">Noora Health has raised</p>
                  <span className="text-3xl text-blue-500 font-bold">$ 120K</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;

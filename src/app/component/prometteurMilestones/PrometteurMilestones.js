"use client";
import React from "react";
import Image from "next/image";
import LogoCircle from "../../assets/logo-circle.webp";
import { motion } from "framer-motion";

function PrometteurMilestones() {
  return (
    <div className="bg-primary pt-20 pb-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div>
            <h1 className="text-5xl font-bold">
              <span className="text-black">Prometteur </span>Milestones
            </h1>
            <h3 className="mt-10 text-3xl font-semibold">
              Creating Technology Excellence
            </h3>
            <div className="text-lg">
              <p className="mt-10">
                Prometteur Solutions is a renowned mobile app and web
                development company with a human-centered design approach.
                &quot;Prometteur,&quot; meaning &quot;Promising,&quot; is well-known for Product
                Engineering & Digital Solutions partnerships.
              </p>
              <p className="mt-5">
                Our engineers are experts in integrations across platforms,
                conducting end-to-end product development with scalable
                architecture. When you work with a proficient, experienced team,
                you will have fewer things to worry about and more aspects to
                consider.
              </p>
              <p className="mt-5">
                At Prometteur, we strive to change the apprehensions that come
                with hiring an offshore software development team. We specialize
                in helping technology companies build massive engineering teams
                that create disruptive products together and are eager to take
                on new challenges.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center items-center relative">
            {/* Logo Circle in the center */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-full absolute z-0" // Position the logo in the center
            >
              <Image
                src={LogoCircle}
                alt="Prometteur Logo Circle"
                width={300}
                height={300}
                className="rounded-full"
              />
            </motion.button>

            {/* Motion Cards Around the Logo */}
            <motion.div
              className="w-80 h-28 bg-white rounded-lg flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 mt-20"
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Content */}
              <div className="grid grid-cols-3 items-center text-center">
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-200 border-red-500 rounded-full border-2 flex items-center justify-center border-dashed">
                    <i
                      className="fa-solid fa fa-user fa-lg text-red-400 text-4xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div className="col-span-2 text-left">
                  <h1 className="text-4xl text-black font-bold">90+</h1>
                  <h1 className="text-sm mt-1 text-black">
                    Employee Retention Rate: Great culture=Happy Employees
                  </h1>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-3 rounded-lg w-48 h-56 border-2 flex flex-col items-center justify-center bg-white shadow-lg absolute bottom-0 left-0 transform -translate-x-1/2 mb-20"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-14 h-14 bg-red-200 border-red-500 rounded-full border-2 flex border-dashed items-center justify-center">
                <i
                  className="fa fa-trophy fa-lg text-red-400 text-4xl"
                  aria-hidden="true"
                ></i>
              </div>
              <h1 className="text-4xl mt-5 text-black font-bold">4.7 / 5</h1>
              <h1 className="text-xs mt-2 text-black text-center block">
                Rated by 300+ Clients for App Development on Upwork, Google,
                Clutch, and Good Firms
              </h1>
            </motion.div>

            <motion.div
              className="p-3 rounded-lg w-48 h-56 border-2 flex flex-col items-center justify-center bg-white shadow-lg absolute bottom-0 right-0 transform translate-x-10 mb-20"
              initial={{ x: 0 }}
              animate={{ x: [-10, 10, -10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-14 h-14 bg-cyan-200 border-cyan-500 rounded-full border-2 flex border-dashed items-center justify-center">
                <i
                  className="fa fa-pencil fa-lg text-cyan-400 text-4xl"
                  aria-hidden="true"
                ></i>
              </div>
              <h1 className="text-4xl mt-5 text-black font-bold">9+</h1>
              <h1 className="text-xs mt-2 text-black text-center block">
                Years of Experience in Empowering Businesses to Create
                World-Class Digital Products
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrometteurMilestones;

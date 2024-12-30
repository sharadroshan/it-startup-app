"use client";
import React from "react";
import { motion } from "framer-motion";
import HoverMotionDiv from "../motion/HoverMotionDiv";

const services = [
  {
    title: "Mobile App Development",
    description: "Mobile-Quality Digital Solutions for Mobile Apps.",
    iconClass: "fas fa-mobile-alt fa-2xl text-green-400",
    buttonText: "Learn More",
  },
  {
    title: "Web App Development",
    description:
      "Everything from a single static page to complex web applications.",
    iconClass: "fas fa-laptop-code fa-2xl text-blue-400",
    buttonText: "Learn More",
  },
  {
    title: "Wearable App Development",
    description: "Design Optimized Solutions for Wearables.",
    iconClass: "fas fa-paint-brush fa-2xl text-purple-400",
    buttonText: "Learn More",
  },
  {
    title: "UI / UX Development",
    description: "Leverage Infinite Possibilities with Design Thinking.",
    iconClass: "fas fa-pencil-alt fa-2xl text-yellow-400",
    buttonText: "Learn More",
  },
  {
    title: "CMS",
    description: "Budget-Effective and Game-Changing CMS Development.",
    iconClass: "fas fa-cogs fa-2xl text-red-400",
    buttonText: "Learn More",
  },
  {
    title: "E-Commerce Development",
    description:
      "Powerful eCommerce Development that Complements Changing Business Environment",
    iconClass: "fas fa-shopping-cart fa-2xl text-green-400",
    buttonText: "Learn More",
  },
  {
    title: "On Demand",
    description: "Bringing Your On-Demand Ideas to Life.",
    iconClass: "fas fa-bolt fa-2xl text-blue-400",
    buttonText: "Learn More",
  },
  {
    title: "Hire Dedicated Resource",
    description:
      "Hire an Offshore Engineering Team [Managed and in One Location]",
    iconClass: "fas fa-users fa-2xl text-purple-400",
    buttonText: "Learn More",
  },
];

function OureService() {
  return (
    <div>
      <div className="bg-[#ecf2f6] pt-10 pb-20">
        <div className="container">
          <div className="text-center mb-10">
            <h1 className="text-6xl font-bold text-black">
              Our <span className="text-primary">Services</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="rounded-3xl p-8 bg-white shadow-lg flex flex-col justify-between items-center h-full"
                whileInView={{
                  scale: [0, 1],
                  opacity: [0, 1],
                  transition: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
                initial={{ scale: 0, opacity: 0 }}
                viewport={{ once: true }}
              >
                <HoverMotionDiv>
                  <div className="w-20 h-20 bg-[#ecf2f6]  rounded-full flex items-center justify-center mb-5">
                    <i className={service.iconClass} aria-hidden="true"></i>
                  </div>
                </HoverMotionDiv>
                <h2 className="text-xl font-semibold text-black text-center mb-4">
                  {service.title}
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <motion.button
                    className="px-6 py-2 bg-primary hover:bg-primaryHover rounded-lg text-white font-semibold transition-all duration-500 ease-in-out focus:outline-none"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OureService;

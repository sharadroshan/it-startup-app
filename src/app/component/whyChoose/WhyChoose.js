"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const cardData = [
  {
    backgroundColor: "#deddfb",
    title: "Real-time Team collaboration",
    description:
      "We guarantee three hours of overlapping work time with your internal staff, ensuring seamless integration.",
    icon: "fad fa-users-crown",
  },
  {
    backgroundColor: "#f4f7fc",
    title: "Streamlined Processes",
    description:
      "Save time and increase efficiency with our reusable code libraries and optimized workflows.",
    icon: "fad fa-cogs",
  },
  {
    backgroundColor: "#e0e7ff",
    title: "Expert Support",
    description:
      "Leverage top-notch experts and finely-tuned software development procedures.",
    icon: "fad fa-headset",
  },
  {
    backgroundColor: "#f9a8d4",
    title: "Reliable Delivery",
    description:
      "We ensure timely project delivery and high-quality results tailored to your needs.",
    icon: "fad fa-truck",
  },
];

const WhyChoose = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-white">
      <div className="container mx-auto py-10 text-black">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold">
            Why <span className="text-primary">Choose Us ?</span>
          </h1>
          <p className="mt-5">
            We provide reliable and efficient delivery, leveraging top-notch
            experts and finely-tuned software development procedures.
            <br />
            Our reusable code libraries and solutions allow you to save up to
            30% of your time, enhancing efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="industryBox min-h-[362px] text-center py-[45px] px-[25px] rounded-lg overflow-hidden relative flex items-center justify-center"
              style={{ backgroundColor: card.backgroundColor }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 rounded-lg z-2 transition-opacity duration-600 ${
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              {hoveredCard === index ? (
                /* Description Section */
                <motion.div
                  className="relative z-3 transform transition-all duration-500 translate-y-10 opacity-0"
                  animate={{ translateY: 0, opacity: 1 }}
                >
                  <div className="leading-relaxed font-light text-white">
                    <div className="mb-6 font-bold text-2xl">{card.title}</div>
                    {card.description}
                  </div>
                </motion.div>
              ) : (
                /* Title Section */
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`${card.icon} text-4xl`}></i>
                  <h3 className="text-lg font-semibold mt-4 leading-snug">
                    {card.title}
                  </h3>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

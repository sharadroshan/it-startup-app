"use client";

import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import MobileSlider from "../../assets/mobile_slider.webp";
import Dotted_Shap from "../../assets/dotted-shape-2.webp";

function Banner() {
  const [step, setStep] = useState(1);
  const [successMessage, setSuccessMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event handler to show or hide the button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // Show the button if scrolled down 200px
      } else {
        setIsVisible(false); // Hide the button if above 200px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on component unmount
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFinish = () => {
    setSuccessMessage(true);
  };

  return (
    <div className="bg-white relative">
      <div className="container h-screen mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 items-center gap-8">
          {/* Left Column: Form and Typewriter */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-black">
              Product Engineering & Digital Solutions Partner with exceptional
            </h1>
            <div className="mt-14 text-3xl sm:text-5xl text-black">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<strong><span style="color: #4ecdc4;">App</span> Development</strong>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<strong><span style="color: #4ecdc4;">Web</span> Development</strong>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<strong><span style="color: #4ecdc4;">UI / UX</span> Design</strong>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<strong><span style="color: #4ecdc4;">App</span> Modernization</strong>'
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      '<strong><span style="color: #4ecdc4;">MVP</span> Development</strong>'
                    )
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  loop: true, // Infinite loop
                  cursor: "|", // Custom cursor
                  delay: 75, // Typing speed
                }}
              />
              <h3 className="text-lg mt-5 sm:text-xl">
                Services for Modern Enterprises and Innovative Startups
              </h3>
            </div>
            <div className="pb-3 mt-5">
              {/* Phone Number Section */}
              {step === 1 && (
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <div className="flex flex-col sm:flex-row sm:w-full sm:max-w-md w-full">
                    <input
                      id="country_code"
                      type="text"
                      className="px-4 py-3 text-black w-20 bg-gray-100 border border-primary"
                      placeholder="+91"
                    />
                    <input
                      id="phone_number"
                      type="text"
                      className="px-4 py-3 mt-2 sm:mt-0 sm:ml-2 text-black w-full bg-gray-100 border border-primary"
                      maxLength="15"
                      placeholder="Phone Number"
                    />
                  </div>
                  <button
                    className="py-3 px-6 bg-primary text-white hover:bg-primaryHover mt-4 sm:mt-0 sm:ml-2"
                    type="button"
                    onClick={handleNext}
                  >
                    Get Started
                  </button>
                </div>
              )}

              {/* Name Section */}
              {step === 2 && (
                <div className="flex items-center mb-4">
                  <button
                    type="button"
                    className="bg-primary px-10 py-3 "
                    onClick={handlePrev}
                  >
                    <i className="fas fa-long-arrow-alt-left"></i>
                  </button>
                  <div className="flex items-center w-full sm:w-auto">
                    <input
                      id="name"
                      type="text"
                      className="px-4 py-3 mt-2 sm:mt-0 sm:ml-2 text-black w-full bg-gray-100 border border-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <button
                    className="py-3 px-10 bg-primary text-white mt-4 sm:mt-0 sm:ml-2"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Email Section */}
              {step === 3 && (
                <div className="flex items-center mb-4">
                  <button
                    type="button"
                    className="bg-primary px-10 py-3"
                    onClick={handlePrev}
                  >
                    <i className="fas fa-long-arrow-alt-left"></i>
                  </button>
                  <div className="flex items-center w-full sm:w-auto">
                    <input
                      id="email"
                      type="email"
                      className="px-4 py-3 mt-2 sm:mt-0 sm:ml-2 text-black w-full bg-gray-100 border border-primary"
                      placeholder="Email Id"
                    />
                  </div>
                  <button
                    className="py-3 px-10 bg-primary text-white mt-4 sm:mt-0 sm:ml-2"
                    type="button"
                    onClick={handleFinish}
                  >
                    Finish
                  </button>
                </div>
              )}

              {/* Success Message */}
              {successMessage && (
                <div className="mt-2 text-green-500">
                  Thank you for Submitting the form
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Image/Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-r from-[#D6FFFC] to-[#FAE7E4] w-[500px] h-[500px] rounded-full min-h-[45vh] mx-auto">
              <div className="absolute inset-0 z-10 flex justify-center items-center">
                <Image
                  src={MobileSlider}
                  alt="mobile_slider"
                  className="w-[400px] h-[550px] object-contain"
                />
              </div>
            </div>

            {/* Cards Positioned Below the Mobile Image */}
            <div className="flex justify-between mt-8">
              {/* First Card */}
              <motion.div
                className=" absolute left-0 top-[50%] transform -translate-y-[50%] rounded-lg w-36 h-48 border-2 flex flex-col items-center justify-center bg-white shadow-lg"
                initial={{ x: 0 }} // Starting position (centered)
                animate={{ x: [-10, 10, -10] }} // Move 10px left and 10px right
                transition={{
                  duration: 3, // Slower animation speed
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              >
                <div className="w-14 h-14 bg-green-200 border-green-500 rounded-full border-2 flex border-dashed items-center justify-center">
                  <i
                    className="fas fa-mobile-alt fa-lg text-green-400 text-4xl"
                    aria-hidden="true"
                  ></i>
                </div>
                <h1 className="text-4xl mt-5 text-black font-bold">850+</h1>
                <h1 className="text-sm mt-2 text-black text-center block">
                  Apps <br />
                  Development
                </h1>
              </motion.div>

              {/* Second Card */}
              <motion.div
                className="absolute right-0 top-[50%] transform -translate-y-[50%] rounded-lg w-44 h-48 border-2 flex flex-col items-center justify-center bg-white shadow-lg"
                initial={{ y: 0 }} // Starting position (centered)
                animate={{ y: [-10, 10, -10] }} // Move 10px up and 10px down
                transition={{
                  duration: 3, // Slower animation speed
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              >
                <div className="w-14 h-14 bg-yellow-100 border-yellow-300 rounded-full border-2 flex border-dashed items-center justify-center">
                  <i
                    className="fa-solid fa-laptop-code fa-lg text-yellow-400 text-4xl"
                    aria-hidden="true"
                  ></i>
                </div>
                <h1 className="text-4xl mt-5 text-black font-bold">500+</h1>
                <h1 className="text-sm mt-2 text-black text-center block">
                  Web App <br />
                  Development
                </h1>
              </motion.div>

              {/* Third Card */}
              <motion.div
                className="absolute right-0 top-0 transform  -translate-y-[50%] rounded-lg w-56 h-28  border-2 flex items-center justify-around bg-white shadow-lg"
                initial={{ x: 0 }} // Starting position (centered)
                animate={{ x: [-10, 10, -10] }} // Move 10px left and 10px right
                transition={{
                  duration: 3,
                  repeat: Infinity, // Infinite loop
                  ease: "easeInOut", // Smooth easing
                }}
              >
                <div className="w-14 h-14 bg-red-200 border-red-500 rounded-full border-2 border-dashed flex items-center justify-center">
                  <i
                    className="fa-solid fa-smile fa-lg text-red-400 text-4xl"
                    aria-hidden="true"
                  ></i> 
                </div>
 
                <div className="text-center">
                  <h1 className="text-4xl mt-1 text-black font-bold">950+</h1>
                  <h1 className="text-sm mt-2 text-black">Happy Clients</h1>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="max-w-full">
            <Image
              src={Dotted_Shap}
              alt="Dotted Shap"
              width={159}
              height={146}
              className="absolute bottom-0 right-0"
            />
          </div>
          <div
            className={`fixed right-5 bottom-20 h-16 w-16  cursor-pointer rounded-full shadow-lg z-50 transition-all duration-200 ${
              isVisible
                ? "opacity-100 visibility-visible translate-y-0 border-2 border-primary"
                : "opacity-0 visibility-hidden translate-y-4"
            }`}
            onClick={scrollToTop}
          >
            <svg className="w-full h-full text-white" viewBox="-1 -1 102 102">
              <path
                className="transition-all duration-200"
                d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                style={{
                  transition: "stroke-dashoffset 10ms linear",
                  strokeDasharray: "307.919, 307.919",
                  strokeDashoffset: "128.8",
                }}
              ></path>
            </svg>
            <i className="fa fa-long-arrow-up absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white opacity-100 transition-all duration-200"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

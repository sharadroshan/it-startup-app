// components/MotionCarousel.js

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import images
import Mobile_Image_1 from '../../assets/mobile_1.avif';
import Mobile_Image_2 from '../../assets/mobile_2.avif';
import Mobile_Image_3 from '../../assets/mobile_3.avif';
import Mobile_Image_4 from '../../assets/mobile_4.avif';

const SwiperComponent = () => {
  // Define the images
  const images = [
    { src: Mobile_Image_1, alt: "Mobile 1", width: 251, height: 528 },
    { src: Mobile_Image_2, alt: "Mobile 2", width: 251, height: 528 },
    { src: Mobile_Image_3, alt: "Mobile 3", width: 251, height: 528 },
    { src: Mobile_Image_4, alt: "Mobile 4", width: 251, height: 528 },
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through the images
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(timer); // Clean up timer on unmount
  }, [images.length]); // Added dependency 'images.length'

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden relative">
      <motion.div
        className="swiper-wrapper flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move to the current image
          transition: 'transform 0.8s ease-in-out', // Smooth slide transition
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="swiper-slide flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={image.src} // Correct usage, directly passing the imported image
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SwiperComponent;

"use client"
import React from "react";

function Ideas() {
  return (
    <div>
      <div className="bg-white pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className="mt-20">
              <h1 className="text-5xl font-bold text-black leading-tight">
                <span className="text-black">Converting ideas</span>
                <br />
                <span className="text-primary"> to Products</span>
              </h1>
              <div className="text-lg text-black">
                <p className="mt-10">
                  Crafting high-quality, inspirational designs and robust
                  solutions for Web, Mobile &amp; Cloud.
                </p>
                <p className="mt-5">
                  Our subject matter experts will guide you in selecting the
                  appropriate infrastructure and technologies, ensuring
                  alignment with your product vision.
                </p>
                <p className="mt-5">
                  We offer a range of highly sought-after, tailor-made, scalable
                  solutions that we&apos;ve developed to meet your needs in half the
                  time.
                </p>
                <p className="mt-5">
                  Let&apos;s discuss your app idea and explore how to bring it to
                  reality.
                </p>
              </div>
              <button className=" mt-14 px-12 py-3 bg-primary text-white hover:bg-primaryHover rounded-lg">
                Free Consultation
              </button>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ideas;

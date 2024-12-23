import React from "react";

const cards = [
  { icon: "fas fa-rocket", title: "Start Up Business" },
  { icon: "fas fa-building", title: "Enterprises" },
  { icon: "fas fa-user", title: "Individuals" },
  { icon: "fas fa-globe", title: "Global Brands" },
];

function WeWorkWith() {
  return (
    <div>
      <div className="relative bg-white pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className=" text-black">
              <h1 className="text-5xl font-bold text-black leading-tight">
                <span className="text-black">Who We </span>
                <span className="text-primary"> Work With</span>
              </h1>
              <h3 className="text-3xl mt-5 font-bold">
                Trusted by Startups Loved by Enterprises
              </h3>
              <p className="mt-10 text-lg">
                As a prominent web and mobile app development company in both India and the USA, we
                have collaborated with numerous clients, spanning from startups to enterprises, to
                deliver top-notch solutions in the industry.
              </p>
              <p className="mt-5 text-lg">
                Leverage our 10+ years of expertise in product development, reusable code libraries,
                and customized solutions to reduce your time-to-market by up to two times.
              </p>
              <p className="mt-5 text-lg">
                Our well-defined processes enable us to deliver reliable, scalable, and efficient
                digital products. Our carefully selected engineers and robust project management
                processes leave little room for errors.
              </p>
            </div>

            {/* Right Column */}
            <div className="grid grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="relative bg-primary text-black rounded-[30px] p-[25px] min-h-[200px] shadow-[0_2px_9px_0_rgba(0,0,0,0.16)] flex flex-col items-center justify-center"
                >
                  <div className="text-white text-4xl mb-4">
                    <i className={card.icon} aria-hidden="true"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-center">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeWorkWith;

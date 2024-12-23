import React from "react";

function PartnershipModel() {
  return (
    <div>
      <div className="bg-[#27272E] pt-20 pb-20 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-6xl font-bold ">
              Partnership <span className="text-primary">Models</span>
            </h1>
            <p className="mt-5">
              Prometteur Solutions, a leading mobile app development company in
              the USA and India, offers tailor-made
              <br />
              app development services across various industries. Access
              industry-leading technology solutions.
            </p>
            <button className=" mt-14 px-12 py-3  bg-primary text-black hover:bg-primaryHover rounded-lg">
              Let&apos;s Discuss Your Project
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="relative p-14 h-full rounded-[30px] transition-all duration-300 shadow-[0_2px_9px_rgba(0,0,0,0.16)] bg-gradient-to-b from-[#27272E] to-[#303035] border-t-[#27272E] border-b-[rgba(74,75,86,0.72)] overflow-hidden hover:bg-[#5956E9] hover:shadow-[0_2px_9px_#5956E9]">
              <h3 className="text-white text-3xl font-bold">
                Fixed Price Model
              </h3>
              <p className="text-gray-400 mt-10 text-xl">
                We offer time estimates and allocate skilled resources to
                collaborate with you on your project, providing clear cost and
                timeline projections before the development phase commences.
                This long-term engagement model is particularly fitting for
                clients with a well-defined vision of their requirements.
              </p>
            </div>
            <div className="relative p-14 h-full rounded-[30px] transition-all duration-300 shadow-[0_2px_9px_rgba(0,0,0,0.16)] bg-gradient-to-b from-[#27272E] to-[#303035] border-t-[#27272E] border-b-[rgba(74,75,86,0.72)] overflow-hidden hover:bg-[#FAB7C4] hover:shadow-[0_2px_9px_#FAB7C4]">
              <h3 className="text-white text-3xl font-bold">
              Hire Dedicated Model
              </h3>
              <p className="text-gray-400 mt-10 text-xl">
              This is a classic and straightforward engagement approach that enhances operational efficiency by integrating our skilled professionals to work remotely with your team. You pay only for the hours the app developer dedicates to your project. Commence the project without exhaustive specifications. This model offers flexibility to add or update features at any point in your project timeline.
              </p>
            </div>
            <div className="relative p-14 h-full rounded-[30px] transition-all duration-300 shadow-[0_2px_9px_rgba(0,0,0,0.16)] bg-gradient-to-b from-[#27272E] to-[#303035] border-t-[#27272E] border-b-[rgba(74,75,86,0.72)] overflow-hidden hover:bg-[#F6C40E] hover:shadow-[0_2px_9px_#F6C40E]">
              <h3 className="text-white text-3xl font-bold">
              On Site Development Model
              </h3>
              <p className="text-gray-400 mt-10 text-xl">
              If you are seeking temporary resources to function as an extension of your own team at your location, this model is highly suitable. We offer a dedicated team comprising designers, developers, a project manager, and QA for a defined period (minimum 3 months) to finalize your project. This approach ensures on-time project completion, minimizing communication gaps throughout the entire process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnershipModel;

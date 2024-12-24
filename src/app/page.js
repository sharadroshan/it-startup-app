import Header from "./component/header/Header";
import Banner from "./component/banner/Banner";
import PrometteurMilestones from "./component/prometteurMilestones/PrometteurMilestones";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Stories from "./component/stories/Stories";
import Ideas from "./component/ideas/Ideas";
import OureService from "./component/ourService/OureService";
import WeWorkWith from "./component/weWorkWith/WeWorkWith";
import PartnershipModel from "./component/partnershipModel/PartnershipModel";
import WhyChoose from "./component/whyChoose/WhyChoose";
import Footer from "./component/footer/Footer";
import StackSection from "./component/stackSection/StackSection";
import Industries from "./component/industries/Industries";

export default function Home() {
  return (
    <div className="">
      {/* <Header />
      <Banner />
      <PrometteurMilestones />
      <Stories />
      <Ideas />
      <OureService />
      <StackSection />
      <Industries />
      <WeWorkWith />
      <PartnershipModel />
      <WhyChoose />
      <Footer /> */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600">
          This is a simple card component. It contains an image, a title, a
          description, and a button.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  );
}

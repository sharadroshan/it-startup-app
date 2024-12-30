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
      <h1 className="text-3xl text-red-500">Hello World</h1>
    </div>
  );
}

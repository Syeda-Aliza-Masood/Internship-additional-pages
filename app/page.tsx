import NavBar from "./Components/NavBar";
import Secondbar from "./Components/Secondbar";
import HeroSection from "./Components/HeroSection";
import DealSection from "./Components/DealSection";
import HomeSection from "./Components/HomeSection";
import ElectronicSection from "./Components/ElectronicSection";
import SendQuoteSection from "./Components/SendQuoteSection";
import Recommendation from "./Components/Recommendation";
import Service from "./Components/Service";
import Suplier from "./Components/Suplier";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";



export default function home() {
  return (
    <div>
      <NavBar />
      <Secondbar />
      <HeroSection />
      <DealSection />
      <HomeSection />
      <ElectronicSection />
      <SendQuoteSection />
      <Recommendation />
      <Service />
      <Suplier />
      <Subscribe />
      <Footer />
      
     
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import OurBusiness from "./components/our-business/OurBusiness";
import CoreValues from "./components/core-values/CoreValues";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Clients from "./components/clients/Clients";

export default function Home() {
  return ( 
    <div >
      <Header />
      <div id="home">
        <Carousel />
      </div>
      <div id="ourbusiness">
        <OurBusiness />
      </div>
      <CoreValues />
      <div id="services">
        <Services />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  
  );
}

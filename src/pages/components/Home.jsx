import Navbar from "./navbar";
import HeroSection from "./HeroSection";
import MenuShowCase from "./MenuShowCase";
import MenuSection from "./MenuSection";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MenuShowCase />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;

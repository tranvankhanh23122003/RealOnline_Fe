import Footer_menu from "../components/Menu/Footer_menu";
import Header_menu from "../components/Menu/Header_menu";
import Banner_section from "../components/Homepage/Banner_section";
import Services_section from "../components/Homepage/Services_section";
import Cashback_section from "../components/Homepage/Cashback_section";
import Projects_section from "../components/Homepage/Projects_section";
import Baner4buoc from "../components/Homepage/Baner4buoc";

const Homepage = () => {
  return (
    <div className="">
      <Header_menu />
      <Banner_section />
      <Services_section />
      <Cashback_section />
      <Projects_section />
      <Baner4buoc />
      <Footer_menu />
    </div>
  );
};

export default Homepage;

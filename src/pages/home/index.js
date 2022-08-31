import React from "react";
import NavBar from "../../component/Navbar";
import Header from "./Header";
import Partner from "./Patners";
import Payments from "./payments";
import Solutions from "./solutions/index";
import Newsletter from "./Newsletter";
import CTA from "./CTA";
import Testimoniials from "./Testimonials";
import Youtube from "./Youtube";
import Services from "./Services";

const Index = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Partner />
      <Services />
      <Payments />
      <Solutions />
      <Newsletter />
      <CTA />
      <Testimoniials />
      <Youtube />
    </>
  );
};

export default Index;

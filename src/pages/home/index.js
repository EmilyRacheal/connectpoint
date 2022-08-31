import React from "react";
import NavBar from "../../component/Navbar";
import Header from "./Header";
import Partner from "./Patners";
import Payments from "./payments";
import Solutions from "./solutions"
import PaymentServices from "./Paymentservices"
import Services from "./Services"
import Testimonials from "./Testimonials"
import CTA from "./CTA"
import NewsLetter from "./Newsletter"
import Youtube from "./Youtube"
import Footer from "../../component/Footer"


const Index = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Partner />
      <Payments />
      <Solutions />
      <Services />
      <PaymentServices />
      <Testimonials />
      <Youtube />
      <CTA />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Index;

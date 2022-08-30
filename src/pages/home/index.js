import React from "react";
import NavBar from "../../component/Navbar";
import Header from "./Header";
import Partner from "./Patners";
import Payments from "./payments";
import Solutions from "./solutions"
import Services from "./services"

const Index = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Partner />
      <Payments />
      <Solutions />
      <Services />
    </>
  );
};

export default Index;

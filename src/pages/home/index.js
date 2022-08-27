import React from "react";
import NavBar from "../../component/Navbar";
import Header from "./Header";
import Partner from "./Patners";
import Payments from "./payments";
import Solutions from "./solutions/index"

const Index = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Partner />
      <Payments />
      <Solutions />
    </>
  );
};

export default Index;

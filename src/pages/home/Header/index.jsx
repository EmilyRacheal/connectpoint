import React from "react";
import styles from "./header.module.css";
import Girl from "../../../assets/hhh 1.png";
import Play from "../../../assets/play.png";

function Index() {
  return (
    <div className={`${styles.bg}`}>
      <div className="flex flex-col items-center justify-center w-full px-5 py-20 md:flex md:flex-row md:px-20 md:pt-0 ">
        <div className="w-full md:w-1/2">
          <h3 className={`${styles.heading} `}>
            Easy Payment At Your Fingertip
          </h3>
          <p className={`${styles.headingText} lg:pt-10 pt-7`}>
            Cpoint Pay offers you the best payment experience at your
            convenient. Transfer money, pay bills and topup your airtime and
            data from Cpoint app to earn instant cashbacks.
          </p>
          <div className="flex items-center py-10 gap-x-5 md:pt-10">
            <img src={Play} alt="" className={`${styles.playImg}`} />
            <button className={`${styles.learn}  text-center`}>
              Learn more
            </button>
          </div>
        </div>
        <div className="justify-center hidden w-full md:w-1/2 md:flex ">
          <img src={Girl} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Index;

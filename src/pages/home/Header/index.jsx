import React from "react";
import styles from "./header.module.css";
import Girl from "../../../assets/hhh 1.png";
import Play from "../../../assets/play.png";

function Index() {
  return (
    <div className={`${styles.bg}`}>
      <div className="flex flex-col md:flex md:flex-row w-full md:px-20 px-5 pt-10 md:pt-0 items-center justify-center 	">
        <div className="md:w-1/2 w-full">
          <h3 className={`${styles.heading} `}>
            Easy Payment At Your Fingertip
          </h3>
          <p className={`${styles.headingText} lg:pt-10 pt-5`}>
            Cpoint Pay offers you the best payment experience at your
            convenient. Transfer money, pay bills and topup your airtime and
            data from Cpoint app to earn instant cashbacks.
          </p>
          <div className="flex gap-x-5 items-center md:pt-10 py-5">
            <img src={Play} alt="" className={`${styles.playImg}`} />
            <button className={`${styles.learn}  text-center`}>
              Learn more
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full justify-center md:flex hidden ">
          <img src={Girl} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default Index;

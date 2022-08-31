import React from "react";
import styles from "./cta.module.css";
import Phone1 from "../../../assets/ge.png";
import Phone2 from "../../../assets/ge1.png";

function Index() {
  return (
    <div className={`${styles.downloadBg} border-b border-b-white  `}>
      <div className="flex items-center justify-center md:px-20 px-5 ">
        <div className={`${styles.downloadText} `}>
          <h3 className="mb-5 md:font-bold">DownloadCpoint Pay & Agent App</h3>
          <p>Register and start transacting in less that 2 minutes.</p>
        </div>
        <div>
          <img src={Phone1} alt="" className=" hidden lg:block" />
          {/* <img src={Phone2} alt="" /> */}
        </div>
      </div>
      <div className="flex items-center justify-center w-full  ">
        <div
          className={`${styles.callToaction} flex flex-col items-center justify-center py-10 `}
        >
          <div className={`${styles.callWidth} text-center px-3 lg:px-0 `}>
            <h3>
              DO YOU WANT TO START OR EXPAND YOUR BUSINESS AS AN ENTERPRENEUR?
            </h3>
            <p>
              Now is the time to get Cpoint Agent! it cost effective and simple
              to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

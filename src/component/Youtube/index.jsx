import React from "react";
import styles from "./youtube.module.css";
import Youplay from "../../assets/youtube-player-png-6 1.png";

function Index() {
  return (
    <div className={`${styles.youplayBg} py-20 px-5`}>
      <div className="flex items-center justify-center flex-col">
        <h3
          className={`${styles.textColor} font-bold md:text-3xl text-lg pb-10`}
        >
          Connecting People, Businesses with Payment Tools & Solutions
        </h3>
        {/* <img src={Youplay} alt="" srcset="" /> */}
        <iframe
          width="860"
          height="417"
          src="https://www.youtube.com/embed/uXWycyeTeCs"
          title="Youtube Player"
          frameborder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Index;

import React from "react";
import styles from "./services.module.css";

function Index() {
  return (
    <div className={`${styles.serviceBg} mb-10 py-20`}>
      <div className="flex items-center gap-x-3 w-full justify-center">
        <div className="sm:flex items-center hidden w-1/2">
          <div className={`${styles.line} `}></div>
          <div className={`${styles.circle}`}></div>
        </div>
        <div className="md:text-2xl text-lg lg:pr-20 text-white lg:w-1/2 px-5">
          <p>
            We provide{" "}
            <span className="font-bold">individual & businesses</span> with the
            tools they need to enjoy & provide{" "}
            <span className="font-bold">efficient financial services</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;

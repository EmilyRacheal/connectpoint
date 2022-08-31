import React from "react";
import styles from "./newsletter.module.css";
import { MdPlayArrow } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

function Index() {
  return (
    <div className="flex items-center justify-center py-20 px-5">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex gap-x-4 items-center mb-3">
          <MdPlayArrow size={30} color="#028bbe" />

          <h3 className={`${styles.newsColor} md:text-2xl text-sm font-medium`}>
            OUR NEWSLETTER
          </h3>
          <MdPlayArrow size={30} color="#028bbe" />
        </div>
        <p
          className={`${styles.newsColor} md:text-3xl text-lg font-bold mb-10`}
        >
          Subscribe to our newsletter to get the latest updates from
          connectpoint{" "}
        </p>
        <div className="flex flex-col md:flex md:flex-row items-center md:w-full ">
          <div className={`${styles.inputBox} flex items-center md:w-1-/2  `}>
            <div className="flex items-center justify-between px-3 py-3  w-0">
              <input type="text" placeholder="Email" />
              <AiFillEye size={25} color="#028bbe" />
            </div>
          </div>
          <button className={`${styles.btn} py-3 w-40 text-sm`}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Index;

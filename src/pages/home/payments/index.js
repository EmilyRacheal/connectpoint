import React from "react";
import styles from "./payment.module.css";
import manImg from "../../../assets/man.png";
import posImg from "../../../assets/pos.png";
import pcImg from "../../../assets/retail.png";

const Index = () => {
  return (
    <>
      <div className="w-full  md:px-20 px-5">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Payment Made Easy
        </h2>
        <p className="text-center py-2 text-lg">
          Pay bills in a flash, save more and spend less, send and receive bills
          seamlessly
        </p>

        <div className={`${styles.cardsContainer}`}></div>

        <div className="flex flex-col md:flex-row justify-between mt-14 gap-x-14 ">
          <div className="w-full md:w-1/2">
            <div
              className={`${styles.cardImgBox} relative flex justify-center`}
            >
              <img
                className={`${styles.cardImg} absolute bottom-px`}
                src={manImg}
                alt="human holding a machine"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-5 md:mt-0">
            <h2
              className={`${styles.titleText} text-2xl md:text-3xl font-bold`}
            >
              Accept payment anytime, anywhere.
            </h2>
            <p className="my-4 text-base md:text-2xl">
              We are the fastest way to pay, whether you want to send money,
              withdraw, pay for your bills or open an account, Cpoint pay got
              you covered
            </p>
            <button className={`${styles.btn} h-10 text-white font-bold mt-4`}>
              Learn more{" "}
            </button>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row-reverse mt-14 gap-x-14 ">
          <div className="w-full md:w-1/2">
            <div
              className={`${styles.cardImgBox} relative flex justify-center`}
            >
              <img
                className={`${styles.cardImg} absolute bottom-px`}
                src={posImg}
                alt="human holding a machine"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2
              className={`${styles.titleText} text-2xl md:text-3xl mt-5 md:mt-0 font-bold`}
            >
              Make more money offering payment service
            </h2>
            <p className="my-4 text-base md:text-2xl">
              Become a Cpoint Agent and earn money by assisting your customers
              with paying bills, purchasing airtime or data, making deposits,
              withdrawing money, opening a Cpoint account while earning
              commission.
            </p>
            <button className={`${styles.btn} h-10 text-white font-bold mt-4`}>
              Learn more{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-14 gap-x-14 ">
          <div className="w-full md:w-1/2">
            <div
              className={`${styles.cardImgBox} relative flex justify-center`}
            >
              <img
                className={`${styles.cardImg1} absolute bottom-px`}
                src={pcImg}
                alt="human holding a machine"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2
              className={`${styles.titleText} text-2xl md:text-3xl mt-5 md:mt-0 font-bold`}
            >
              Complete control at your fingertip
            </h2>
            <p className="my-4 text-base md:text-2xl">
              We connect businesses like yours with the best tools to accepts
              payments online and offline either through traditional or non-
              traditional means. Our Cloud based retail Solution allows business
              especially stores, supermarkets, pharmacies, retail companies and
              others to manage their day to day business effortlessly.
            </p>
            <button className={`${styles.btn} h-10 text-white font-bold mt-4`}>
              Learn more{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

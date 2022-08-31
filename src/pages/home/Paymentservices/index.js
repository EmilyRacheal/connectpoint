import React from "react";
import styles from "./services.module.css";

import dotsImg from "../../../assets/dots.svg";
import icon1 from "../../../assets/recycle.png";
import icon2 from "../../../assets/flash.svg";
import icon3 from "../../../assets/retail.svg";
import icon4 from "../../../assets/user.svg";
import icon5 from "../../../assets/house.svg";

const Index = () => {
  return (
    <div className="w-full  md:px-20 px-5 py-20">
      <h2 className={`${styles.titleText} text-center text-4xl font-bold`}>
        Financial services on your fingertip
      </h2>

      <div className="w-full flex justify-between mt-10">
        <img src={dotsImg} alt="dots" className={`${styles.dotsImg}`} />
        <img src={dotsImg} alt="dots" className={`${styles.dotsImg}`} />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-10">
        <div className={`${styles.card} p-4`}>
          <img alt="icon" src={icon1} />
          <h2 className="py-5 text-lg sm:text-2xl">Fast Money Transfer</h2>
          <p>
            Send Money to Family and Friends within seconds wi`th the Cpoint pay
            mobile app earn instant cashbacks.
          </p>
        </div>

        <div className={`${styles.card} p-4 `}>
          <img alt="icon" src={icon2} />
          <h2 className="py-5 text-2xl">Pay Bills In A Flash</h2>
          <p>
            Make payments and renew all your bills - Cable TV, utility etc
            easily with Cpoint Pay services.
          </p>
        </div>

        <div className={`${styles.card} p-4`}>
          <img alt="icon" src={icon3} />
          <h2 className="py-5 text-2xl">Fast Money Transfer</h2>
          <p>
            Manage your inventories, orders of products, and provide mutiple
            payments options using the Cpoint Retail services..
          </p>
        </div>

        <div className={`${styles.card} p-4`}>
          <img alt="icon" src={icon4} />
          <h2 className="py-5 text-2xl">Open an Account</h2>
          <p>
            Create an account on the cpointpay app and start transaction with
            zero deduction
          </p>
        </div>

        <div className={`${styles.card} p-4`}>
          <img alt="icon" src={icon5} />
          <h2 className="py-5 text-2xl">User Friendly Agent Services</h2>
          <p>
            Offer reliable payment services in your neighbourhood and earn
            commissions as a Cpoint agent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

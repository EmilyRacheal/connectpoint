import React from "react";
import styles from "./testimonials.module.css";

function Index() {
  return (
    <div className={`${styles.testimonialBg} py-20 px-5 md:px-20 `}>
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white md:text-3xl text-lg font-bold">
            What our clients are saying about us
          </h3>
          <div className={`${styles.line} mt-3 mb-20`}></div>
        </div>
      </div>

      <div
        className={`${styles.cardBox} flex sm:flex-row flex-col gap-x-3 gap-y-4 sm:gap-y-0`}
      >
        <div className={`${styles.test1} md:py-8 py-5 md:px-8 px-3 `}>
          <h3 className="font-semibold md:pb-8 pb-3 text-center">
            Damiana Rita
          </h3>
          <p>
            Wow, this makes my transfer, bill payment and Airtime so easy for
          </p>
        </div>

        <div className={`${styles.test1} md:py-8 py-5 md:px-8 px-3`}>
          <h3 className="font-semibold md:pb-8 pb-3 text-center">
            Onwunali Chiamaka
          </h3>
          <p>This app makes payment so easy and smooth.</p>
        </div>

        <div className={`${styles.test1} md:py-8 py-5 md:px-8 px-3`}>
          <h3 className="font-semibold md:pb-8 pb-3 text-center">
            Onwunali Chiamaka
          </h3>
          <p>
            The app is efficient. Bill payment has been seamless since I got the
            app
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;

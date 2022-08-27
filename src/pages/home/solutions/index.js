import React from "react";
import styles from "./solutions.module.css";

import phone1 from "../../../assets/phone1.png";
import phone2 from "../../../assets/phone2.png";
import pos1 from "../../../assets/pos1.png";
import pos2 from "../../../assets/pos2.png";
import pc1 from "../../../assets/pc1.png";

const Index = () => {
  return (
    <div className={`${styles.container} w-full  md:px-20 px-5 mt-11`}>
      <h2 className="text-center text-white text-4xl font-bold pt-8">
        Modern solutions to connect to your business
      </h2>
      <p className="text-center text-white py-2 text-lg">
        Unlock more opportunities to finance your business.
      </p>

      <div className="flex justify-between mt-14 gap-x-14 ">
        <div className={`${styles.cardBox} w-1/2 relative`}>
          <div className={`${styles.imgBox}`}>
            <img src={phone1} alt="phone" className={`${styles.img1}`} />
            <img src={phone2} alt="phone" className={`${styles.img2}`} />
          </div>

          <h2 className={`${styles.titleText} text-3xl font-bold mt-6`}>
            Cpoint Pay
          </h2>
          <p className="my-4 text-2xl">
            Take advantage of the amazing payment solutions, make all your
            transactions on the CpointPay app
          </p>
        </div>

        <div className={`${styles.cardBox} w-1/2 relative`}>
          <div className={`${styles.imgBox}`}>
            <img src={pos1} alt="phone" className={`${styles.img3}`} />
            <img src={pos2} alt="phone" className={`${styles.img4}`} />
          </div>

          <h2 className={`${styles.titleText} text-3xl font-bold mt-6`}>
            Cpoint Agent
          </h2>
          <p className="my-4 text-2xl">
            Accept payments from your customers with our POS terminals which are
            secure and reliable for all your card transactions.
          </p>
        </div>
      </div>

      <div className={`${styles.cardBox} w-full mt-10 flex-col flex justify-center items-center`}>
        <h2 className={`${styles.titleText} text-3xl font-bold mt-2`}>
          Cpoint Retail
        </h2>
        <p className="my-4 text-2xl">
          Manage every aspect of your business with the Moniepoint app and get
          easy access to your finances on-the-go.
        </p>

        <div className={`${styles.imgBox}`}>
          <img src={pc1} alt="phone" className={`${styles.img} mt-5`} />
        </div>
      </div>
    </div>
  );
};

export default Index;

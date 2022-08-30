import React from "react";
import styles from "./footer.module.css";
import Logo from "../../assets/Cpoint Logo 2 1.png";

function Index() {
  return (
    <div className={`${styles.footerBg} `}>
      <div className="py-12 border-b border-b-white"></div>
      <div className="lg:px-20 px-5 pt-10  border-b border-b-white">
        <div className="md:flex md:flex-row flex flex-col justify-center  text-white md:gap-x-20 gap-y-4 pb-3">
          <div>
            <img src={Logo} className={`${styles.img}`} alt="" />
          </div>
          <div>
            <h3 className="md:text-2xl text-lg font-bold md:pb-5 pb-1">
              Company
            </h3>
            <ul className="flex flex-col gap-y-2 md:text-lg text-sm">
              <li>About Us</li>
              <li>Blog</li>
              <li>Join our Team</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-2xl text-lg font-bold md:pb-5 pb-1">
              Reasources
            </h3>
            <ul className="flex flex-col gap-y-2 text-sm md:text-lg">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h3 className="md:text-2xl text-lg font-bold md:pb-5 pb-1">
              Our products
            </h3>
            <ul className="flex flex-col gap-y-2 text-sm md:text-lg">
              <li>Payment Services</li>
              <li>Messenger Bots</li>
              <li>Retail Services</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${styles.footerB} lg:px-20 px-5 pt-5 text-white md:text-lg text-sm`}
      >
        <p>
          © 2022. Connectpoint is a PPS Liscenced company with its services
          provided byConnect point linmited and duly licensed by the Central
          Bank of Nigeria. Unauthorised reproduction or redistribution of
          copyrighted materials on this website and Connetpoint pages is
          strictly prohibited. By clicking on some of the links above, you will
          leave connectpoint website and be directed to a third-party website.
          The privacy practices of those third parties may differ from those of
          Connectpoint. We recommend you review the privacy statements of those
          third-part websites, as Connectpoint is not responsible for those
          third parties' privacy or security practices. Additional disclosures
          can be found in the resources section of our website. .==
        </p>
      </div>
    </div>
  );
}

export default Index;

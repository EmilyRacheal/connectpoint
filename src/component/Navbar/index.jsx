import React, { useState } from "react";
import styles from "./navbar.module.css";
import Logo from "../../assets/Cpoint Logo 2 1.png";
import { AiOutlineMenu } from "react-icons/ai";

function Index() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${styles.navbar}`}>
      <div className="flex items-center justify-between px-5 py-3 lg:px-20">
        <div className="flex items-center justify-center">
          <img src={Logo} className={`${styles.img}`} alt="" />
        </div>
        <div>
          <ul className="hidden font-semibold lg:flex gap-x-7 ">
            <li className={`${styles.home}`}>Home</li>
            <li>Product</li>
            <li>Services</li>
            <li>Company</li>
            <li>Contact Us</li>
            <li className={`${styles.agent} py-1 px-3`}>Become An Agent</li>
          </ul>
          <AiOutlineMenu onClick={handleShowMenu} className="block lg:hidden" />
        </div>
      </div>
      {showMenu === true ? (
        <div className={`${styles.mobileBg} flex flex-row `}>
          <ul
            className={`${styles.list} flex flex-col px-5 pb-5 text-white gap-y-3`}
          >
            <li className={`${styles.home}`}>Home</li>
            <li>Product</li>
            <li>Services</li>
            <li>Company</li>
            <li>Contact Us</li>
            <div>
              <li className={`${styles.agentS} py-1 px-3`}>Become An Agent</li>
            </div>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;

import React from "react";
import header from "./Header.module.css";

import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className={header.header}>
      <div className={header.header_logo}>
        <div>5</div>
        <div>B</div>
        <div>U</div>
        <div>K</div>
        <div>V</div>
      </div>
      <div className={header.icons}>
        <span>
          <Icon icon="eva:gift-outline" />
        </span>
        <span>
          <Icon icon="uil:graph-bar" />
        </span>
        <span>
          <Icon icon="material-symbols:help-outline-rounded" />
        </span>
      </div>
    </div>
  );
};

export default Header;

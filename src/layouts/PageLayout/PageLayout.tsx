import React, { ReactElement } from "react";
import layout from "./PageLayout.module.css";

import VirtualKeyboard from "src/components/Keyboard/VirtualKeyboard";
import GameField from "src/components/GameField/GameField";

type Props = {
  children: ReactElement;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className={layout.layout}>
      <div className={layout.children}>
        {children}
        <GameField />
      </div>
      <VirtualKeyboard />
    </div>
  );
};

export default PageLayout;

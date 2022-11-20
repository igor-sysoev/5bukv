import React from "react";
import keyboard from "./VirtualKeyboard.module.css";

const VirtualKeyboard = () => {
  const EngAlphabetKeyboard = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "Backspace",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Enter",
  ];
  const RusAlphabetKeyboard = [
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    "ж",
    "э",
    // "⟵",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    // "✔",
  ];

  return (
    <div>
      <div className={keyboard.keyboard}>
        <div>
          {RusAlphabetKeyboard.slice(0, 12).map((letter) => (
            <button className={keyboard.button}>{letter}</button>
          ))}
        </div>
        <div>
          {RusAlphabetKeyboard.slice(12, 23).map((letter) => (
            <button className={keyboard.button}>{letter}</button>
          ))}
        </div>
        <div>
          <button className={keyboard.delete}>⟵</button>
          {RusAlphabetKeyboard.slice(23, 34).map((letter) => (
            <button className={keyboard.button}>{letter}</button>
          ))}
          <button className={keyboard.submit}>✔</button>
        </div>
      </div>
    </div>
  );
};

export default VirtualKeyboard;

// сделать инпуты на кажую букву с лимитом в один знак
// далее автовокус на следующий инпут чтобы так написать слово

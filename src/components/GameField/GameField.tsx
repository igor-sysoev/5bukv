import React from "react";
import field from "./GameField.module.css";

const GameField = () => {
  const Line1 = [" w", "o ", " r", " d", " s"];
  const Line2 = [" w", "o ", " r", " d", " s"];
  const Line3 = [" w", "o ", " r", " d", " s"];
  const Line4 = [" w", "o ", " r", " d", " s"];
  const Line5 = [" w", "o ", " r", " d", " s"];
  const Line6 = [" w", "o ", " r", " d", " s"];
  return (
    <div>
      <div className={field.field}>
        <div>
          {Line1.map((letter) => (
            <input type="text" value={letter} />
          ))}
        </div>
        <div>
          {Line2.map((letter) => (
            <input type="text" value={letter} />
          ))}
        </div>
        <div>
          {Line3.map((letter) => (
            <input type="text" value={letter} />
          ))}
        </div>
        <div>
          {Line4.map((letter) => (
            <input type="text" value={letter} />
          ))}
        </div>
        <div>
          {Line5.map((letter) => (
            <input type="text" value={letter} />
          ))}
        </div>
        <div>
          {Line6.map((letter) => (
            <input type="text" value={letter} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameField;

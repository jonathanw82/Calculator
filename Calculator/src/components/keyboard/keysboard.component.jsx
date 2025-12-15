import "./keyboard.styles.css";
import Didgit from "../didits/digits.component";

const Keyboard = ({handleClick}) => {
  const KeyboardRows = [
    ['C'],
    [1, 2, 3, "+"],
    [4, 5, 6, "-"],
    [7, 8, 9, "/"],
    [0, "*", ".", "="],
  ];

  return (
    <div className="keyboard">
      {KeyboardRows.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className="key-row">
            {row.map((number) => (
              <Didgit
                handleClick={() => handleClick(number)}
                key={`digit-${number}`}
                number={number}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;

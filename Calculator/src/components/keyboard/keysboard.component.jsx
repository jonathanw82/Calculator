import "./keyboard.styles.css";
import Didgit from "../didits/digits.component";
import KeyboardRows from './keyboard.component.row.array'

const Keyboard = ({handleClick}) => {

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

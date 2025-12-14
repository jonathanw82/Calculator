import "./keyboard.styles.css";
import Didgit from "../didits/digits.component";
import { useState} from "react";

const Keyboard = () => {
  const KeyboardRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
  // const operators = ['+','-','*','/'];

  const [inputvalue, setInputValue] = useState([])

  const handleClick = (value) =>{
    // create event handler 
    console.log(value);
  }

  return (
    <div className="keyboard">
      <h1>Keyboard</h1>
      {KeyboardRows.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className="key-row">
            {row.map((number) => (
              <Didgit handleClick= {handleClick} key={`digit-${number}`} number={number} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;

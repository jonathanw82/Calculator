import Keyboard from "../src/components/keyboard/keysboard.component";
import Display from "../src/components/display/display.component";
import "./App.css";
import { useState, useEffect } from "react";
import KeyboardRows from "./components/keyboard/keyboard.component.row.array";

function App() {
  const [inputResult, setInputResult] = useState("");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [dislayInput, setDislayInput] = useState("");
  const [displayAnswer, setdisplayAnswer] = useState("");

  function useExternalKeyBoardEvent(rows, handleClick) {
    useEffect(() => {
      const handleGlobalKeyDown = (event) => {
        const keyPressed = event.key;

        const AllKeysAsStrings = rows.flat().map((key) => key.toString());

        if (AllKeysAsStrings.includes(keyPressed)) {
          let convertKeyToInt = parseInt(event.key);
          if (!Number.isNaN(convertKeyToInt) && isFinite(convertKeyToInt)) {
            // It's a number (1, 2, 3...)
            handleClick(convertKeyToInt);
          } else {
            // It's an operator, 'C', '.', or '='
            handleClick(keyPressed);
          }
        } else if (keyPressed === "Enter") {
          event.preventDefault();
          handleClick("=");
        } else if (keyPressed === "Backspace") {
          event.preventDefault();
          handleClick("Backspace");
        }
      };

      window.addEventListener("keydown", handleGlobalKeyDown);

      return () => window.removeEventListener("keydown", handleGlobalKeyDown);
    }, [rows, handleClick]);
    return;
  }
  useExternalKeyBoardEvent(KeyboardRows, handleClick);

  const calculateResult = (secondOperand) => {
    let result = 0;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        if (secondOperand === 0) {
          alert("Cannot divide by zero");
          resetCalculator();
          return;
        }
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    let roundedResultString = result.toFixed(10);
    let finalResultNumber = parseFloat(roundedResultString);
    const finalResultString = finalResultNumber.toString();
    setInputResult(finalResultString);
    setdisplayAnswer(finalResultString);
    setFirstOperand(null);
    setOperator(null);
  };

  function handleClick(digit) {
    if (digit === "C") {
      resetCalculator();
      return;
    }
    const isDigit = typeof digit === "number" || digit === '.';
    setDislayInput(dislayInput + digit);

    if (isDigit) {
      setInputResult(inputResult + digit);
    } else {
      const currentNumber = parseFloat(inputResult);
      if (firstOperand === null) {
        setFirstOperand(currentNumber);
        setInputResult("");
        setOperator(digit);
      } else if (digit === "=") {
        calculateResult(currentNumber);
        setFirstOperand(null);
      } else {
        setOperator(digit);
      }
    }

    if (digit === "Backspace") {
      setInputResult(inputResult.slice(0, -1));
      setDislayInput(dislayInput.slice(0, -1));
      return;
    }
  }

  function resetCalculator() {
    setInputResult("");
    setFirstOperand(null);
    setOperator(null);
    setDislayInput("");
    setdisplayAnswer("0");
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className="container">
        <div className="reactio">REACTIO</div>
        <Display result={displayAnswer || "0"} value={dislayInput || "0"} />
        <Keyboard handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;

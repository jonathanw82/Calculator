
import Keyboard from '../src/components/keyboard/keysboard.component';
import Display from '../src/components/display/display.component';
import './App.css';
import { useState } from "react";

function App() {
  const [inputResult, setInputResult] = useState("");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [dislayInput, setDislayInput] = useState('');
  const [displayAnswer, setdisplayAnswer] = useState('');

  const calculateResult = (secondOperand) => {
    let result = 0;

    // Use a switch statement to handle different operations
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
        // Add error handling for division by zero
        if (secondOperand === 0) {
          alert("Cannot divide by zero");
          resetCalculator(); // Helper function to clear state
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

  const handleClick = (digit) => {
    const isDigit = typeof digit === "number";
    setDislayInput(dislayInput + digit);

    if (isDigit) {
      setInputResult(inputResult + digit);
    } else {
      if(digit === 'C') resetCalculator();
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
  };

  function resetCalculator() {
    setInputResult("");
    setFirstOperand(null);
    setOperator(null);
    setDislayInput('');
    setdisplayAnswer('0')
  }

  return (
    <>
    <h1>Calculator</h1>
    <div className='container'>
    <div className='reactio'>REACTIO</div>
      <Display result={displayAnswer || '0'} value={dislayInput || '0'}/>
      <Keyboard handleClick={handleClick}/>
    </div>
    </>
  )
}

export default App

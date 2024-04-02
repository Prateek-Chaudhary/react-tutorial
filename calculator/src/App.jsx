import './App.css'
import AnswerBox from './components/AnswerBox';
import InputBox from './components/InputBox';
import OuterBox from './components/OuterBox';
import ComputeButtons from './components/ComputeButtons';
import { useState } from 'react';

function App() {

  let buttonList = ['C', 'X', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '.', '%', '0', '√', '='];

  let [buttonValue, setButtonValue] = useState("");
  let [answer, setAnswer] = useState("Result");

  let clickedBtn = (btn) => {
    if (btn === 'C') {
      setButtonValue("");
      setAnswer("Result");
    }

    else if (btn === '=') {

      let root = false;
      root = buttonValue.indexOf("√");
      if (root !== false) {
        let numInd = root + 1;
        while (!isNaN(parseInt(buttonValue[numInd]))) {
          numInd++;
        }
        let num = buttonValue.substring(root + 1, numInd);
        let modifiedExpression = buttonValue.replace("√" + num, Math.sqrt(num));
        setAnswer(eval(modifiedExpression));
      }
      else {
        let ans = eval(buttonValue);
        setAnswer(ans);
      }
    }

    else if (btn === 'X') {
      let newValue = buttonValue.substring(0, buttonValue.length - 1);
      setButtonValue(newValue);
    }

    else if (buttonValue.charAt(buttonValue.length - 1) === '.' && btn === '.') {/* empty */ }

    else if ((buttonValue.length === 0) && (btn === '*' || btn === '/' || btn === '%')) setButtonValue("");

    else if ((buttonValue.endsWith('/') && (btn === '%' || btn === '/' || btn === '*' || btn === '+' || btn === '-')) || (buttonValue.endsWith('*') && (btn === '%' || btn === '/' || btn === '*' || btn === '+' || btn === '-')) || (buttonValue.endsWith('%') && (btn === '%' || btn === '/' || btn === '*' || btn === '+' || btn === '-')) || (buttonValue.endsWith('+') && (btn === '%' || btn === '/' || btn === '*' || btn === '+' || btn === '-')) || (buttonValue.endsWith('-') && (btn === '%' || btn === '/' || btn === '*' || btn === '+' || btn === '-')) || (buttonValue.endsWith('√') && (btn === '%' || btn === '/' || btn === '*' || btn === '+' || btn === '-'))) { /* empty */ }

    else {
      buttonValue += btn;
      setButtonValue(buttonValue);
    }
  }

  return (
    <>
      <OuterBox>
        <h1 className='text-3xl mt-2 mb-5'>Calculator</h1>
        <AnswerBox answer={answer} />
        <InputBox value={buttonValue} onChange={clickedBtn} />
        <ComputeButtons buttonList={buttonList} clickedBtn={clickedBtn} />
      </OuterBox>
    </>
  )
}

export default App

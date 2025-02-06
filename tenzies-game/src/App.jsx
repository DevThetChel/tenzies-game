import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Die } from "./components/Die";

function App() {
  const [allDice, setAllDice] = useState(getAllNewDice());
  function getAllNewDice() {
    // const numbersArray = [];
    // for (let i = 0; i < 10; i++) {
    //   const randomNumber = Math.ceil(Math.random() * 6);
    //   numbersArray.push(randomNumber);
    // }
    // return numbersArray;

    // Or

    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  function rollDice() {
    setAllDice(getAllNewDice());
  }

  const diceElements = allDice.map((diceNumber, index) => (
    <Die key={index} value={diceNumber} />
  ));
  return (
    <>
      <div className="main">
        <div className="dies-container">{diceElements}</div>
        <button onClick={rollDice} className="roll-button">
          Roll
        </button>
      </div>
    </>
  );
}

export default App;

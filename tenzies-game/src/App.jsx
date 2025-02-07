import { useEffect, useState } from "react";

import "./App.css";
import { Die } from "./components/Die";
import { nanoid } from "nanoid";

function App() {
  const [allDice, setAllDice] = useState(getAllNewDice());

  const gameWon =
    allDice.every((die) => die.isHeld) &&
    allDice.every((die) => die.number === allDice[0].number);

  if (
    allDice.every((die) => die.isHeld) &&
    allDice.every((die) => die.number === allDice[0].number)
  ) {
    alert("Game Won!");
    // setGameWon(true);
  }

  function getAllNewDice() {
    const numbersArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6);
      numbersArray.push({ number: randomNumber, isHeld: false, id: nanoid() });
    }
    return numbersArray;

    // Or

    // return new Array(10)
    //   .fill(0)
    //   .map(() => ({ number: Math.ceil(Math.random() * 6), isHeld: false , id: nanoid()}));
  }

  function rollDice() {
    setAllDice((die) =>
      die.map((die) =>
        die.isHeld ? die : { ...die, number: Math.ceil(Math.random() * 6) }
      )
    );
  }

  function holdNumber(id) {
    console.log(id);

    setAllDice((prev) =>
      prev.map((die) => (die.id === id ? { ...die, isHeld: !die.isHeld } : die))
    );
  }

  const diceElements = allDice.map((die) => (
    <Die key={die.id} die={die} holdNumber={holdNumber} />
  ));

  return (
    <>
      <div className="main">
        <h3 className="title">Tenzies</h3>
        <p className="des">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dies-container">{diceElements}</div>
        <button onClick={rollDice} className="roll-button">
          {gameWon ? "Next game" : "Roll"}
        </button>
      </div>
    </>
  );
}

export default App;

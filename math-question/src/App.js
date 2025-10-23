import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const notation = [
  { name: "plus", symbol: "+" },
  { name: "minus", symbol: "-" },
  { name: "multiplication", symbol: "x" },
  { name: "divison", symbol: ":" },
];

function count() {
  const symbol = notation[Math.floor(Math.random() * 4)].symbol;
  return symbol;
}

export default function App() {
  return (
    <div className="App">
      <CreateQuestion />
    </div>
  );
}

function CreateQuestion() {
  const [numberOne, setNumberOne] = useState(20);
  const [numberTwo, setNumberTwo] = useState(10);

  return (
    <div className="container">
      <div className="box">
        <span className="question">{`${numberOne} ${count()} ${numberTwo}`}</span>
      </div>
      <div>
        <input className="answer" type="text" placeholder="Answer..." />
      </div>
      <button className="btn">Submit</button>
    </div>
  );
}

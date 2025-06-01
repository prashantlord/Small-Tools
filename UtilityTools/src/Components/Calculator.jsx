import { ArrowLeft, EqualSquare } from "lucide-react";
import { useEffect, useState } from "react";
import MainSection from "./MainSection";

function Calculator({ name, info, setPageMain }) {
  const [input, setInput] = useState("");
  function handleCalc() {
    try {
      let temp = eval(input.replace(/^0+/, ""));
      setInput(temp);
    } catch (error) {
      setInput("Error");
    }
  }

  document.addEventListener("keypress", function (event) {
    event.key === "Enter" ? handleCalc() : null;
  });

  return (
    <div>
      <div
        className="flex w-fit  cursor-pointer hover:iteam-hover "
        onClick={() => setPageMain("main")}
      >
        <ArrowLeft /> Go Back{" "}
      </div>
      <h1 className=" text-2xl md:text-3xl font-semibold">{name}</h1>
      <p className="text-sm">{info}</p>

      <div className="mt-10 w-fit   ">
        <div className="flex flex-col gap-5 items-center ">
          <div className=" w-70 h-20 overflow-hidden rounded-md">
            <input
              type="text"
              className="bg-black w-full h-full focus:no-focus py-5 text-white text-xl pl-2 "
              autoFocus
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div className=" flex justify-center ">
            <div className="grid grid-cols-4 gap-3 w-fit ">
              <button
                className="action-button"
                onClick={() => {
                  let temp = String(input) + "*";
                  setInput(temp);
                }}
              >
                *
              </button>
              <button
                className="action-button"
                onClick={() => {
                  let temp = String(input) + "/";
                  setInput(temp);
                }}
              >
                /
              </button>
              <button
                className="action-button"
                onClick={() => {
                  let temp = String(input) + "-";
                  setInput(temp);
                }}
              >
                -
              </button>
              <button
                className="action-button"
                onClick={() => {
                  let temp = String(input) + "+";
                  setInput(temp);
                }}
              >
                +
              </button>

              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "1";
                  setInput(temp);
                }}
              >
                1
              </button>
              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "2";
                  setInput(temp);
                }}
              >
                2
              </button>
              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "3";
                  setInput(temp);
                }}
              >
                3
              </button>

              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "4";
                  setInput(temp);
                }}
              >
                4
              </button>
              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "5";
                  setInput(temp);
                }}
              >
                5
              </button>
              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "6";
                  setInput(temp);
                }}
              >
                6
              </button>

              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "7";
                  setInput(temp);
                }}
              >
                7
              </button>
              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "8";
                  setInput(temp);
                }}
              >
                8
              </button>
              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "9";
                  setInput(temp);
                }}
              >
                9
              </button>

              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + "0";
                  setInput(temp);
                }}
              >
                0
              </button>
              <button
                className="button"
                onClick={() => {
                  let temp = String(input) + ".";
                  setInput(temp);
                }}
              >
                .
              </button>
              <button
                className="button bg-red-500 hover:bg-red-700"
                onClick={() => {
                  setInput("");
                }}
              >
                C
              </button>

              <button
                className="button bg-green-800 hover:bg-green-900"
                onClick={handleCalc}
              >
                =
              </button>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;

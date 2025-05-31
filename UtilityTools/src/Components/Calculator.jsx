import { ArrowLeft, EqualSquare } from "lucide-react";
import { useState } from "react";
import MainSection from "./MainSection";

function Calculator({ name, info, setPageMain }) {
  const [input, setInput] = useState();
  function handleCalc() {
    if (Number(input)) {
      let temp = eval(input);
      setInput(temp);
    } else {
      setInput("Error");
    }
  }

  return (
    <div>
      <div>
        <div
          className="flex w-fit  cursor-pointer hover:iteam-hover "
          onClick={() => setPageMain("main")}
        >
          <ArrowLeft /> Go Back{" "}
        </div>
        <h1 className=" text-2xl md:text-3xl font-semibold">{name}</h1>
        <p className="text-sm">{info}</p>
      </div>
      <div className="mt-10 w-fit   ">
        <div className="flex flex-col gap-5 items-center ">
          <div className=" w-70 h-20 overflow-hidden rounded-md">
            <input
              type="text"
              className="bg-black w-full h-full focus:no-focus py-5 text-white text-xl pl-2 "
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className=" flex justify-center ">
            <div className="grid grid-cols-4 gap-3 w-fit ">
              <button className="action-button">*</button>
              <button className="action-button">/</button>
              <button className="action-button">-</button>
              <button className="action-button">+</button>

              <button className="button">1</button>
              <button className="button">2</button>
              <button className="button">3</button>

              <button className="button">4</button>
              <button className="button">5</button>
              <button className="button">6</button>

              <button className="button">7</button>
              <button className="button">8</button>
              <button className="button">9</button>

              <button className="button">0</button>
              <button className="button">.</button>
              <button className="button bg-red-500 hover:bg-red-700">C</button>

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

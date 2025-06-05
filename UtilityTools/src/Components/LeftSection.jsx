import {
  ArrowLeftRight,
  Calculator,
  Clock,
  Hamburger,
  Hammer,
  Menu,
  Table2,
} from "lucide-react";
import { useState } from "react";
import MainSection from "./MainSection";

export default function () {
  const [tool, setTools] = useState("All Tools");

  return (
    <>
      <Menu className="fixed top-5 left-8 md:hidden cursor-pointer  " />
      <aside className="hidden md:inline fixed  top-25 left-8  w-50 h-dvh ">
        <h1 className="text-xl font-semibold">Categories</h1>
        <div className="pl-2 my-5">
          
            <button
              className=" catogery "
              onClick={() => setTools("All Tools")}
            >
              <Table2 className="inline" /> ALL Tools
            </button>
            <button
              className=" catogery "
              onClick={() => setTools("Calculators")}
            >
              <Calculator className="inline" /> Calculators
            </button>
            <button className="catogery" onClick={() => setTools("Convertors")}>
              <ArrowLeftRight className="inline" /> Convertors
            </button>
            <button className="catogery" onClick={() => setTools("Timers")}>
              <Clock className="inline" /> Timers
            </button>
            <button className=" catogery" onClick={() => setTools("Utilities")}>
              <Hammer className=" inline" /> Utilities
            </button>
          </div>
       
      </aside>
      <MainSection tool={tool} />
    </>
  );
}

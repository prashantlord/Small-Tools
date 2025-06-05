import { useEffect, useState } from "react";

import Calculator from "./Calculator";

import CurrencyConv from "./CurrencyConv";

function MainSection({ tool, search, elem }) {
  const [page, setPage] = useState(elem);
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [renderC, setRenderC] = useState(false);
  const tools = [
    {
      name: "Calculator",
      description: "Perform basic and advanced calculations",
      url: "/src/assets/Tools/calculator.svg",
      category: "calculators",
    },
    {
      name: "Currency Converter",
      description: "Convert currencies with real-time exchange rates",
      url: "/src/assets/Tools/currencyconverter.svg",
      category: "convertors",
    },
  ];

  function handle() {
    setPage("main");
  }
  useEffect(() => {
    handle();
  }, []);

  switch (page) {
    case "main":
      return (
        <div className=" relative mx-10 top-10 md:ml-65">
          <div className="mb-5">
            <h1 className="font-bold text-2xl md:text-4xl">{tool}</h1>
            <p className="text-sm md:text-md">
              Explore a variety of tools to boost your productivity.
            </p>
          </div>
          <div className=" flex flex-wrap gap-5 ">
            {tools.map((item, key) =>
              tool.toLowerCase() === item.category ||
              tool.toLowerCase() === "all tools" ? (
                <div
                  key={key}
                  className=" w-20 sm:w-30 md:w-30 xl:w-50 cursor-pointer transition-colors duration-300 ease-in  "
                  onClick={() => {
                    setPage(item.name.toLowerCase());
                    setName(item.name);
                    setInfo(item.description);
                    setRenderC("renderCurencyConv");
                  }}
                >
                  <div className=" overflow-hidden rounded-xl">
                    <img
                      src={item.url}
                      alt={item.category}
                      className="w-full rounded-xl   md:border-none hover:scale-[1.1] transition-all duration-300"
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-xs text-center sm:text-sm md:text-xl xl:text-left font-semibold ">
                      {item.name}
                    </h1>
                    <p className=" text-[0.8rem] text-sm hidden xl:inline">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      );
      break;
    case "calculator":
      return (
        <div className=" relative mx-10 top-10 md:ml-65">
          <Calculator name={name} info={info} setPageMain={setPage} />
        </div>
      );
      break;
    case "currency converter":
      return (
        <div className=" relative mx-10 top-10 md:ml-65">
          <CurrencyConv name={name} info={info} setPageMain={setPage} />
        </div>
      );
      break;
  }
}
export default MainSection;

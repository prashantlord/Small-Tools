import { useEffect, useState } from "react";

import Calculator from "./Calculator";

function MainSection({ tool, search, elem }) {
  const [page, setPage] = useState(elem);
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const tools = [
    {
      name: "Calculator",
      description: "Perform basic and advanced calculations",
      url: "/src/assets/Tools/calculator.svg",
      category: "calculators",
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
          <div className="">
            {tools.map((item, key) =>
              tool.toLowerCase() === item.category ||
              tool.toLowerCase() === "all tools" ? (
                <div
                  key={key}
                  className=" w-30 md:w-40 cursor-pointer transition-colors duration-300 ease-in"
                  onClick={() => {
                    setPage(item.name.toLowerCase());
                    setName(item.name);
                    setInfo(item.description);
                  }}
                >
                  <div className=" overflow-hidden rounded-xl">
                    <img
                      src={item.url}
                      alt={item.category}
                      className="w-full rounded-xl border-1 md:border-none hover:scale-[1.1] transition-all duration-300"
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-xl md:text-2xl font-semibold ">
                      {item.name}
                    </h1>
                    <p className=" text-[0.8rem] md:text-sm">
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
  }
}
export default MainSection;

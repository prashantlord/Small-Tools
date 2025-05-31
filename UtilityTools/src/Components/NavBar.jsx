import { Box, Search } from "lucide-react";
import { useState } from "react";


function NavBar() {
  const [input, setInput] = useState("hello");
  const [search, setSearch] = useState();
  return (
    <header className=" navBorder flex  ">
      <div className="w-full h-15  ">
        <h1 className="text-xl  flex w-fit gap-5 relative left-20 top-5 cursor-pointer  md:left-10 select-none ">
          {" "}
          <span>
            <Box />
          </span>
          ToolBox
        </h1>
      </div>
      <div className="  relative top-5 right-20">
        <div className="flex gap-3">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="focus:no-focus w-20 pl-1 md:w-50 "
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
    </header>
  );
}
export default NavBar;

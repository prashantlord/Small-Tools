import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

function ThemeToggle() {
  const [themeDark, setThemeDark] = useState(true);
  function themeHandle() {
    themeDark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }

  useEffect(() => {
    themeHandle();
  }, [themeHandle]);

  return (
    <button
      onClick={() => {
        setThemeDark((initial) => !initial);
        themeHandle();
      }}
      className=" fixed right-10 top-5 cursor-pointer hover:iteam-hover  "
    >
      {themeDark === true ? <Sun /> : <Moon />}
    </button>
  );
}
export default ThemeToggle;

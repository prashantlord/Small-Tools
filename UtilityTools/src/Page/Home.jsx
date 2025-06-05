import LeftSection from "../Components/LeftSection";

import NavBar from "../Components/NavBar";
import ThemeToggle from "../Components/ThemeToggle";

function Home() {
  return (
    <>
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* NavBar */}
      <NavBar />
      {/* Left Bar */}
      <LeftSection />
    </>
  );
}
export default Home;

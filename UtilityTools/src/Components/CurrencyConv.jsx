import { ArrowLeft } from "lucide-react";
function CurrencyConv({ name, info, setPageMain }) {
  console.log("works");
  return (
    <div>
      {" "}
      <div
        className="flex w-fit  cursor-pointer hover:iteam-hover "
        onClick={() => setPageMain("main")}
      >
        <ArrowLeft /> Go Back{" "}
      </div>
      <h1 className=" text-2xl md:text-3xl font-semibold">{name}</h1>
      <p className="text-sm">{info}</p>
    </div>
  );
}
export default CurrencyConv;

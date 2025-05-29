import { ArrowLeftRight } from "lucide-react";
import { useEffect, useState } from "react";

function CurrencyUI() {
  const [currencies, setCurrencies] = useState();
  const [rates, setRates] = useState();
  const [finalResult, setFinalResult] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("AUD");
  const [userInput, setUserInput] = useState(1);

  // Currencies -->       https://api.frankfurter.app/currencies
  // conversionRates -->  https://api.frankfurter.dev/v1/latest

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Fetch Error", error);
    }
  };

  const fetchCurrencyRates = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/latest");
      const data = await res.json();
      setRates(data.rates);
    } catch (error) {
      console.error("Fetch Error in Rates", error);
    }
  };

  function swapCurrencies() {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }

  function finalCalculation() {
    let temp1 = userInput * (1 / rates[from]);
    let temp2 = temp1 * rates[to];
    console.log(rates[from], rates[to], from, to, userInput);
    setFinalResult("After Conversion " + temp2.toFixed(2));
  }

  useEffect(() => {
    fetchCurrency();
    fetchCurrencyRates();
  }, []);

  return (
    <div className="shadow p-5 grid grid-cols-1 md:w-fit w-74   ">
      <h1 className="text-xl text-center font-bold font-sans">
        Currency Converter
      </h1>
      <div
        className="grid grid-cols-1 gap-3  my-10 md:grid-cols-3 
       "
      >
        {currencies ? (
          <select
            name="from"
            id="from"
            onChange={(e) => {
              setFrom(e.target.value);
            }}
            value={from}
            className=" border-2 border-gray-400 p-2 w-full rounded-md cursor-pointer"
          >
            {currencies.map((item, key) => (
              <option value={item} key={key}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          ""
        )}

        <div className="w-full flex item-center justify-center">
          <ArrowLeftRight
            className=" bg-red-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-red-700 transition-colors duration-300   "
            onClick={swapCurrencies}
          />
        </div>

        {currencies ? (
          <select
            name="to"
            id="to"
            onChange={(e) => {
              setTo(e.target.value);
            }}
            value={to}
            className=" border-2 border-gray-400 p-2 w-full md:w-40 rounded-md cursor-pointer"
          >
            {currencies.map((item, key) => (
              <option value={item} key={key}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          ""
        )}
      </div>
      <input
        type="number"
        className="border-2 border-gray-400 p-2 w-full  rounded-md font-semibold focus:outline-none mb-2 "
        value={userInput}
        onChange={(e) => setUserInput(Number(e.target.value))}
      />
      <button
        className="border-2 p-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-700 transition-colors duration-300 cursor-pointer"
        onClick={finalCalculation}
      >
        Convert
      </button>
      <p className="text-right text-green-500 font-medium text-[1.4rem]">
        {" "}
        {finalResult}
      </p>
    </div>
  );
}
export default CurrencyUI;

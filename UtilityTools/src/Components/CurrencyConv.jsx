import { useEffect, useState } from "react";
import { ArrowLeft, ArrowLeftRight } from "lucide-react";

function CurrencyConv({ name, info, setPageMain }) {
  // Currencies -->       https://api.frankfurter.app/currencies
  // conversionRates -->  https://api.frankfurter.dev/v1/latest?amount=1&from=USD&to=INR

  const [currencies, setCurrencies] = useState([]);

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [amount, setAmount] = useState();
  const [input, setInput] = useState(1);

  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Fetch Error", error);
    }
  };

  const handleconversion = async () => {
    try {
      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?amount=${input}&from=${from}&to=${to}`
      );
      const data = await res.json();

      const temp = data.rates && Object.values(data.rates);
      setAmount(temp[0]);
    } catch (error) {
      console.error("Fetch Error", error);
    }
  };

  useEffect(() => {
    fetchCurrency();
  }, []);

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
      <div>
        <div>
          <h3>From</h3>
          <select
            name="from"
            id="from"
            className="w-50 h-10 border-2 pl-2 rounded-md"
            onChange={(e) => setFrom(e.target.value)}
            value={from}
          >
            {currencies.map((item, key) => (
              <option key={key} className="text-black">
                {item}
              </option>
            ))}
          </select>
        </div>
        <ArrowLeftRight />
        <div>
          <h3>To</h3>
          <select
            name="to"
            id="to"
            className="w-50 h-10 border-2 pl-2 rounded-md"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          >
            {currencies.map((item, key) => (
              <option key={key} className="text-black">
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-5 w-fit ">
          <input
            type="number"
            className="border-2 w-50 h-10 focus:no-focus rounded.md"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div>
          <button
            className="border-2 p-2 mt-5 cursor-pointer rounded-md hover:border-2  hover:bg-white  hover:text-black transition-colors duration-300"
            onClick={() => handleconversion()}
          >
            Convert
          </button>
        </div>
        <p>The converted amount is: {amount}</p>
      </div>
    </div>
  );
}

export default CurrencyConv;

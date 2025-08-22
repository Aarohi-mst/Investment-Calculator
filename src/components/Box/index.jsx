import { useState } from "react";
import Calculation from "./Calculation";
import List from "./List";
const Box = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue, //+ added to covert the value in no. and not in by default string
      };
    });
  };
  return (
    <div className="h-auto  w-[40%] border border-white flex flex-col justify-center items-center">
      <Calculation userInput={userInput} handleChange={handleChange} />
      <List input={userInput} />
    </div>
  );
};

export default Box;

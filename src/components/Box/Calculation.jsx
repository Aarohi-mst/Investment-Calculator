const Calculation = ({ userInput, handleChange }) => {
  //Old method-----------------------------------------------------------
  // const [initialInvestment, setInitialInvestment] = useState("1000");
  // const [annualInvestment, setAnnualInvestment] = useState("1200");
  // const [expectedReturn, setExpectedReturn] = useState("6");
  // const [duration, setDuration] = useState("10");

  //-----------------------NEW WAY-------------------------------------------
  //in index.jsx

  return (
    <div className="h-[20%] w-[95%] bg-[#307e6c] flex justify-around items-start p-3 mt-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="initialInvestment" className="text-white">
            Initial Investment
          </label>
          <input
            id="initialInvestment"
            type="number"
            value={userInput.initialInvestment}
            required
            className="border border-white rounded-md h-8 px-2 text-white"
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="annualInvestment" className="text-white">
            Annual Investment
          </label>
          <input
            id="annualInvestment"
            type="number"
            value={userInput.annualInvestment}
            required
            className="border border-white rounded-md h-8 px-2 text-white"
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="expectedReturn" className="text-white">
            Expected Return (%)
          </label>
          <input
            id="expectedReturn"
            type="number"
            value={userInput.expectedReturn}
            required
            className="border border-white rounded-md h-8 px-2 text-white"
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="duration" className="text-white">
            Duration (Years)
          </label>
          <input
            id="duration"
            type="number"
            value={userInput.duration}
            required
            className="border border-white rounded-md h-8 px-2 text-white"
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculation;

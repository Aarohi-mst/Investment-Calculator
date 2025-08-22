import {
  calculateInvestmentResults,
  formatter,
} from "../../utils/investment.js";
const List = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <div className="h-[80%] w-[90%] p-3 rounded-xl shadow-md overflow-x-auto">
      <table className="table-auto w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-[#307e6c]">Year</th>
            <th className="px-4 py-2 text-[#307e6c]">Investment Value</th>
            <th className="px-4 py-2 text-[#307e6c]">Interest (Year)</th>
            <th className="px-4 py-2 text-[#307e6c]">Total Interest</th>
            <th className="px-4 py-2 text-[#307e6c]">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((item) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              initialInvestment;
            const totalAmountInvestment = item.valueEndOfYear - totalInterest;

            return (
              <tr
                key={item.year}
                className="border-b hover:bg-gray-50 hover:text-[#307e6c]"
              >
                <td className="px-4 py-2">{item.year}</td>
                <td className="px-4 py-2">
                  {formatter.format(item.valueEndOfYear)}
                </td>
                <td className="px-4 py-2">{formatter.format(item.interest)}</td>
                <td className="px-4 py-2">{formatter.format(totalInterest)}</td>
                <td className="px-4 py-2">
                  {formatter.format(totalAmountInvestment)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;

import React from "react";
import { useTrans } from "../Context/FinanceContext";
import { Link } from "react-router-dom";

function Report() {
  const { trans } = useTrans();

  const totalIncome = trans.reduce(
    (sum, transaction) => sum + (transaction.income || 0),
    0
  );
  const totalExpenses = trans.reduce(
    (sum, transaction) => sum + (transaction.expense || 0),
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-xl">
        Summary Report
      </h1>
      <div className="space-y-4">
        <div className="flex justify-between p-4 border border-gray-200 rounded-md">
          <span className="font-medium text-gray-800">Total Income:</span>
          <span className="text-green-600">${totalIncome.toFixed(2)}</span>
        </div>
        <div className="flex justify-between p-4 border border-gray-200 rounded-md">
          <span className="font-medium text-gray-800">Total Expenses:</span>
          <span className="text-red-600">${totalExpenses.toFixed(2)}</span>
        </div>
        <div className="flex justify-between p-4 border border-gray-200 rounded-md font-bold">
          <span className="text-gray-800">Net Balance:</span>
          <span
            className={
              totalIncome - totalExpenses >= 0
                ? "text-green-600"
                : "text-red-600"
            }
          >
            ${(totalIncome - totalExpenses).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/setting">
          <button className="text-white text-xl rounded-2xl text-bold bg-gradiant1 py-3 px-7 mt-4">
            <strong>View Settings</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Report;

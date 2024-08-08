import React, { useRef, useState } from "react";
import { useTrans } from "../Context/FinanceContext";

function AddTransaction() {
  const { addTrans } = useTrans(); // Access addTrans from context

  const [error, setError] = useState(""); // State for handling errors

  const incomeRef = useRef(null);
  const expenseRef = useRef(null);
  const categoryRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const income = parseFloat(incomeRef.current.value);
    const expense = parseFloat(expenseRef.current.value);
    const category = categoryRef.current.value.trim();

    if (isNaN(income) || isNaN(expense) || !category) {
      setError("Please fill out all fields with valid data.");
      return;
    }

    if (income < 0 || expense < 0) {
      setError("Income and expense must be non-negative.");
      return;
    }

    addTrans(income, expense, category); // Call addTrans with the form values

    // Clear the form fields and error state
    incomeRef.current.value = "";
    expenseRef.current.value = "";
    categoryRef.current.value = "";
    setError("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-xl">
        Add your Transaction Details Here
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="income" className="font-medium text-gray-700">
            Income
          </label>
          <input
            id="income"
            type="number"
            ref={incomeRef}
            placeholder="Enter your income..."
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="expense" className="font-medium text-gray-700">
            Expense
          </label>
          <input
            id="expense"
            type="number"
            ref={expenseRef}
            placeholder="Enter your expense..."
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="category" className="font-medium text-gray-700">
            Category
          </label>
          <input
            id="category"
            type="text"
            ref={categoryRef}
            placeholder="Enter category..."
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;

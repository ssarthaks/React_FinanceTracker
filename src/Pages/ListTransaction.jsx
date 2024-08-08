import React from 'react';
import { useTrans } from '../Context/FinanceContext';

function ListTransaction() {
  const { trans, removeTrans } = useTrans(); 

  const handleDelete = (id) => {
    removeTrans(id);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-xl">List of Transactions</h1>
      {trans.length === 0 ? (
        <p className="text-center text-gray-500">No transactions available.</p>
      ) : (
        <ul className="space-y-4">
          {trans.map((transaction) => (
            <li key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
              <div>
                <p className="font-medium text-gray-800">Income: ${transaction.income.toFixed(2)}</p>
                <p className="text-gray-600">Expense: ${transaction.expense.toFixed(2)}</p>
                <p className="text-gray-500">Category: {transaction.category}</p>
              </div>
              <button
                onClick={() => handleDelete(transaction.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListTransaction;

import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  // Separate incomes and expenses
  const incomeTransactions = transactions.filter((t) => t.amount > 0);
  const expenseTransactions = transactions.filter((t) => t.amount < 0);

  return (
    <div className="mt-4">
      {/* ✅ Income Section */}
      <h3 className="text-green-600 font-bold">Income</h3>
      <ul>
        {incomeTransactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between border p-2 my-1"
          >
            <span>
              {transaction.text} - {transaction.category} (Income)
            </span>
            <span className="text-green-600">₹{transaction.amount}</span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="text-red-500"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Expense Section */}
      <h3 className="text-red-600 font-bold mt-4">Expense</h3>
      <ul>
        {expenseTransactions.map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between border p-2 my-1"
          >
            <span>
              {transaction.text} - {transaction.category} (Expense)
            </span>
            <span className="text-red-600">₹{Math.abs(transaction.amount)}</span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="text-red-500"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;

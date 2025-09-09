import React, { useState } from "react";

function AddTransaction({ addTransaction }) {   // ✅ match App.jsx
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: type === "Expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount)),
      category: type === "Expense" ? category : null,
      type,
    };

    addTransaction(newTransaction); // ✅ works now
    setText("");
    setAmount("");
    setType("Income");
    setCategory("Food");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Description"
        className="border p-2"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="border p-2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2"
        disabled={type === "Income"}   
      >
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2"
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
}

export default AddTransaction;

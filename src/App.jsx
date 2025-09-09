import React, { useEffect, useState } from 'react'
import './App.css'
import AddTransaction from './components/Addtransaction'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import Chart from './components/Chart'

const App = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions")
    return savedTransactions ? JSON.parse(savedTransactions) : []
  })

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-4'>Expense Tracker</h1>
      <AddTransaction addTransaction={addTransaction}/>
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
      <Balance transactions={transactions}/>
      <Chart transactions={transactions}/>
    </div>
  )
}

export default App

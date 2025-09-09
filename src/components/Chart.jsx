import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const Chart = ({ transactions }) => {
  const categoryTotals = transactions.reduce((acc, t) => {
    const key = t.category || "Others"
    acc[key] = (acc[key] || 0) + t.amount
    return acc
  }, {})

  const data = Object.keys(categoryTotals).map(key => ({
    name: key,
    value: Math.abs(categoryTotals[key])
  }))

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#AF19FF']

  return (
    <div className='mt-6'>
      <h2 className='text-xl font-bold mb-2'>Spending by Category</h2>
      <PieChart width={400} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} fill="#8884d8" label>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default Chart

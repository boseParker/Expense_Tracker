import React from 'react'

const Balance = ({transactions}) => {
    const income=transactions.filter(data=>data.amount>0).reduce((acc,data)=>acc+data.amount,0)

    const expense=transactions.filter(data=>data.amount<0).reduce((acc,data)=>acc+data.amount,0)

    const total=income+expense
  return (
    <div className='mb-4'>
        <h2 className='text-xl'>Balance:{total}</h2>
        <p className='text-green-500'>Income:{income}</p>
        <p className='text-red-500'>Expense:{expense}</p>
    </div>
  )
}

export default Balance
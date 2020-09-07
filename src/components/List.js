import React from 'react'
import Expense from './Expense'

const List = ({ expenseslist }) => (
  <div className='gastos-realizados'>
    <h2>List</h2>
    {expenseslist.map(expense => (
      <Expense expense={expense} key={expense.id} />
    ))}
  </div>
)
export default List

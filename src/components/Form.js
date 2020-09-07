import React, { useState } from 'react'
import shortid from 'shortid'
import Error from './Error'

const Form = ({ setExpense, setCreateExpense }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false)

  const addExpense = e => {
    e.preventDefault()
    if (amount < 1 || isNaN(amount) || name.trim() === '') {
      setError(true)
      return
    }
    setError(false)

    const expenseObj = {
      name,
      amount,
      id: shortid.generate()
    }

    setExpense(expenseObj)
    setCreateExpense(true)
    setName('')
    setAmount(0)
  }

  return (
    <form onSubmit={addExpense}>
      <h2>Expenses</h2>
      {error ? <Error message='Both field are mandatory or invalid budget' /> : null}
      <div className='campo'>
        <label>Expense</label>
        <input type='text' className='u-full-width' placeholder='Ex. trasport, food, etc.' value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className='campo'>
        <label>Amount</label>
        <input type='number' className='u-full-width' placeholder='Ex. 25$' value={amount} onChange={e => setAmount(parseInt(e.target.value, 10))} />
      </div>
      <input type='submit' className='u-full-width button-primary' value='Add Expenses' />
    </form>
  )
}

export default Form

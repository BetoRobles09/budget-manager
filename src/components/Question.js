import React, { useState } from 'react'
import Error from './Error'

const Question = ({ setBudget, setRemaining, updateQuestion }) => {
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false)

  const defineBudget = e => {
    setAmount(parseInt(e.target.value, 10))
  }

  const addBudget = e => {
    e.preventDefault()

    if (amount < 1 || isNaN(amount)) {
      setError(true)
      return
    }
    setError(false)
    setBudget(amount)
    setRemaining(amount)
    updateQuestion(false)
  }

  return (
    <>
      <h2>Enter your budget</h2>
      {error ? <Error message='Budget is invalid' /> : null}
      <form onSubmit={addBudget}>
        <input type='number' className='u-full-width' placeholder='Enter your budget' onChange={defineBudget} />
        <input type='submit' className='u-full-width button-primary' value='Define budget' />
      </form>
    </>
  )
}

export default Question

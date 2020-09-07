import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import Budget from './components/Budget'

function App () {
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [showquestion, updateQuestion] = useState(true)
  const [expenseslist, setExpensesList] = useState([])
  const [expense, setExpense] = useState({})
  const [createexpense, setCreateExpense] = useState(false)

  useEffect(() => {
    if (createexpense) {
      setExpensesList([
        ...expenseslist,
        expense
      ])
      const remainingBudget = remaining - expense.amount
      setRemaining(remainingBudget)
      setCreateExpense(false)
    }
  }, [expense, createexpense, expenseslist, remaining])

  return (
    <div className='container'>
      <header>
        <h1>Weekly Expenses</h1>
        <div className='contenido-principal contenido'>
          {showquestion ? (
            <Question setBudget={setBudget} setRemaining={setRemaining} updateQuestion={updateQuestion} />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Form setExpense={setExpense} setCreateExpense={setCreateExpense} />
              </div>
              <div className='one-half column'>
                <List expenseslist={expenseslist} />
                <Budget budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App

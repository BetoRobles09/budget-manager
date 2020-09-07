import React from 'react'
import { checkBudget } from '../helpers'

const Budget = ({ budget, remaining }) => {
  return (
    <>
      <div className='alert alert-primary'>
        Budget: $ {budget}
      </div>
      <div className={checkBudget(budget, remaining)}>
        Remaining: $ {remaining}
      </div>
    </>
  )
}

export default Budget

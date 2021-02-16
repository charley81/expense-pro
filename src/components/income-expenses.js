/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useGlobalContext } from '../context/context'

const IncomeExpenses = () => {
  const { transactions } = useGlobalContext()

  const amounts = transactions.map(item => item.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2)

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin: 1rem auto;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background: var(--colorLight);
        border-radius: var(--borderRadius);

        div {
          padding: 2rem;
        }

        .income {
          border-right: 1px dashed grey;
        }

        .income p {
          color: var(--colorGreen);
        }

        .expense p {
          color: var(--colorRed);
        }
      `}
    >
      <div className="income">
        <h4>Income</h4>
        <p>+${income}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p>-${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses

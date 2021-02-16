/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const IncomeExpenses = () => {
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
        <p>+$0.00</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p>-$0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpenses

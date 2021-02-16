/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useGlobalContext } from '../context/context'
import Transaction from './transaction'

const TransactionList = () => {
  const { transactions } = useGlobalContext()

  return (
    <div
      css={css`
        margin: 2rem 0;

        h3 {
          text-align: left;
          border-bottom: 1px solid var(--colorDark);
          padding-bottom: 0.25rem;
          margin-bottom: 1rem;
        }

        li {
          display: flex;
          justify-content: space-between;
          background-color: var(--colorLight);
          margin: 0.25rem 0;
          padding: 0.5rem;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;
        }
      `}
    >
      <h3>History</h3>
      <ul>
        {transactions.map(item => {
          const { id, text, amount } = item
          return <Transaction key={id} text={text} amount={amount} />
        })}
      </ul>
    </div>
  )
}

export default TransactionList

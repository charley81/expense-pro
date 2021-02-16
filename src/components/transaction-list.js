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
      `}
    >
      <h3>History</h3>
      <ul>
        {transactions.map(item => {
          const { id, text, amount } = item
          return <Transaction key={id} text={text} amount={amount} id={id} />
        })}
      </ul>
    </div>
  )
}

export default TransactionList

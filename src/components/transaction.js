/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useGlobalContext } from '../context/context'

const Transactions = ({ text, amount, id }) => {
  const { deleteTransaction } = useGlobalContext()

  const sign = amount < 0 ? '-' : '+'

  return (
    <li
      className={amount < 0 ? 'minus' : 'plus'}
      css={css`
        display: flex;
        background-color: var(--colorLight);
        margin: 0.25rem 0;
        padding: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
          rgba(0, 0, 0, 0.24) 0px 1px 2px;

        button {
          margin-left: auto;
          background: transparent;
          border: transparent;
          font-size: 1.1rem;
          color: var(--colorPrimary);
          cursor: pointer;
        }

        span {
          margin-left: 1rem;
        }
      `}
    >
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)}>x</button>
    </li>
  )
}

export default Transactions

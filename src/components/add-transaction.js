/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/context'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useGlobalContext()

  const handleFormSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      id: new Date().getTime().toString(),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

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

        input {
          margin-bottom: 1rem;
          padding: 0.5rem;
          width: 100%;
          border-radius: var(--borderRadius);
          outline: transparent;
          border: transparent;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;
        }

        label,
        input {
          display: block;
          text-align: left;
        }

        button {
          display: block;
          width: 100%;
          border-radius: var(--borderRadius);
          padding: 0.5rem;
          background-color: var(--colorPrimary);
          color: var(--colorLight);
          border: transparent;
          font-family: var(--fontFamily);
          font-size: 1rem;
          transition: var(--transition);

          &:hover {
            background-color: transparent;
            border: 1px solid var(--colorPrimary);
            color: var(--colorDark);
          }
        }
      `}
    >
      <h3>Add new transaction</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="text">text</label>
          <input
            type="text"
            placeholder="enter text..."
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            placeholder="enter amount..."
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button>add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction

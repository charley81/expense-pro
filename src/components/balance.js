/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useGlobalContext } from '../context/context'

const Balance = () => {
  const { transactions } = useGlobalContext()

  const amounts = transactions.map(item => item.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div
      css={css`
        text-align: left;
      `}
    >
      <h4>Your Balance</h4>
      <h2>${total}</h2>
    </div>
  )
}

export default Balance

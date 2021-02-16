/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const Transactions = ({ text, amount }) => {
  const sign = amount < 0 ? '-' : '+'
  return (
    <li
      className={amount < 0 ? 'minus' : 'plus'}
      css={css`
        .minus {
          background: red;
        }

        .plus {
          background: green;
        }
      `}
    >
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
    </li>
  )
}

export default Transactions

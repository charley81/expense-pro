/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const Balance = () => {
  return (
    <div
      css={css`
        text-align: left;
      `}
    >
      <h4>Your Balance</h4>
      <h2>$0.00</h2>
    </div>
  )
}

export default Balance

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const Header = () => {
  return (
    <div
      css={css`
        margin: 3rem 0;
        border-bottom: 1px solid var(--colorDark);
        padding-bottom: 0.25rem;
      `}
    >
      <h1>expensePro</h1>
    </div>
  )
}

export default Header

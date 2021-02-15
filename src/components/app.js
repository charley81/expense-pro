/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Balance from './balance'
import Header from './header'
import IncomeExpenses from './incomeExpenses'

function App() {
  return (
    <div>
      <Header />
      <div
        css={css`
          margin: 1rem;
        `}
      >
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  )
}

export default App

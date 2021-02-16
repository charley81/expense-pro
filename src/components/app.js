/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import AddTransaction from './add-transaction'
import Balance from './balance'
import Header from './header'
import IncomeExpenses from './income-expenses'
import TransactionList from './transaction-list'

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
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App

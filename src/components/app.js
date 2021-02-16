/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import AddTransaction from './add-transaction'
import Balance from './balance'
import Header from './header'
import IncomeExpenses from './income-expenses'
import TransactionList from './transaction-list'

function App() {
  return (
    <>
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
    </>
  )
}

export default App

import React from 'react'

const Transactions = ({ text, amount }) => {
  const sign = amount < 0 ? '-' : '+'
  return (
    <li>
      {text}{' '}
      <span>
        {sign}${amount}
      </span>
    </li>
  )
}

export default Transactions

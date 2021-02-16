import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

// initial state
const initialState = {
  transactions: []
}

// create context
const GlobalContext = createContext()

// provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // actions
  const deleteTransaction = id =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })

  const addTransaction = transaction =>
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction })

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContext, GlobalProvider, useGlobalContext }

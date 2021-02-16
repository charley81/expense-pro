import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
import transactions from '../temp'

// initial state
const initialState = {
  transactions
}

// create context
const GlobalContext = createContext()

// provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContext, GlobalProvider, useGlobalContext }

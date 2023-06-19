import React from 'react'
import Header from './components/Header/Header'
import Transactions from './components/Transactions/Transactions'
import Table from './components/Table/Table'
import Navigate from './components/excel-page-navigate/Navigate'

import "./styles/styles.scss"
import Provider from './context/excelContext'

function App() {
  return (
    <Provider>
      <main>
          <Header />
          <Transactions />
          <Table />
          <Navigate />
      </main>
    </Provider>
  )
}

export default App
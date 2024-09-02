// import React, { useContext, useEffect, useState } from 'react';
import Transaction from './Transaction';
import useFetch from './useFetch';

// import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  // const { transactions } = useContext(GlobalContext);

  const url = "http://localhost:3010/transaction";
  const { transactions, loading, error } = useFetch(url);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {loading && <section>History is loading...</section>}
        {error && <section>{error.message}</section>}
        {transactions && <Transaction key={transactions.id} transactions={transactions} />}
      </ul>
    </>
  )
}

export default TransactionList

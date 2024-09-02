// import React, { useContext, useEffect, useState } from 'react';
// import { GlobalContext } from '../context/GlobalState';

import useFetch from "./useFetch";

const Balance = () => {

  // const { transactions } = useContext(GlobalContext);
  // const amounts = transactions.map(transaction => transaction.amount);
  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const url = "http://localhost:3010/transaction";

  const { transactions, loading, error } = useFetch(url);

  const amounts = transactions ? transactions.map(transaction => transaction.amount) : [];
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      {loading && <section>Balance is loading...</section>}
      {error && <section>{error.message}</section>}
      {transactions && <h1>${total}</h1>}
    </>
  )
}

export default Balance

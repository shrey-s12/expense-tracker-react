import React, { useState } from 'react'
// import { useContext } from 'react'

// import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  // const { addTransaction } = useContext(GlobalContext);

  function submitFunction(e) {
    e.preventDefault();

      fetch("http://localhost:3010/transaction", {
        'method': 'POST',
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON.stringify({ text, amount })
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error.message);
        });


    // const newTransaction = {
    //   id: Math.floor(Math.random() * 100000000),
    //   text,
    //   amount: +amount,
    // }

    // addTransaction(newTransaction);

    setText("");
    setAmount("");
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitFunction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;

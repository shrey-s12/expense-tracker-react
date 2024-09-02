// import React, { useContext } from 'react'
// import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transactions }) => {

    // const { deleteTransaction } = useContext(GlobalContext);

    async function deleteTransaction(id){
        await fetch(`http://localhost:3010/transaction/id/${id}`,{
            "method" : "DELETE"
        })
        .then((response)=>{
            console.log("History Delete");
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }


    return (
        <div>
            {transactions.map(transaction => {
                const sign = transaction.amount < 0 ? "-" : "+";
                return (
                    <li className={sign === "+" ? "plus" : "minus"}>
                        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
                    </li>
                )
            })}
        </div>
    )
}

export default Transaction;

// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
import useFetch from './useFetch';

const IncomeExpenses = () => {

    // const { transactions } = useContext(GlobalContext);
    // const amounts = transactions.map(transaction => transaction.amount);
    // const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    // const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc -= item), 0).toFixed(2);

    const url = "http://localhost:3010/transaction";
    const { transactions, loading, error } = useFetch(url);
    const amounts = transactions ? transactions.map(transaction => transaction.amount) : [];
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc -= item), 0).toFixed(2);



    return (
        <div className="inc-exp-container">
            {loading && <section>Data is loading...</section>}
            {error && <section>{error.message}</section>}
            {transactions &&
                <>
                    <div>
                        <h4>Income</h4>
                        <p className="money plus">+${income}</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p className="money minus">-${expense}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default IncomeExpenses

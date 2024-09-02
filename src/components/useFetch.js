const { useState, useEffect } = require("react");

const useFetch = (url) => {
    const [transactions, setTransactions] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw Error("Data is not fetched from the API");
                }
            })
            .then((transactions) => {
                setTransactions(transactions);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                setLoading(false);
                console.log("Error");
                setError(error);
            }, [])
    })

    return { transactions, loading, error };
}

export default useFetch;
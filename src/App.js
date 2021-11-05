import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Laptop",
        amount: 1250.33,
        date: new Date(2021, 0, 1),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 350.39,
        date: new Date(2021, 4, 9),
    },
    {
        id: "e3",
        title: "Car insurance",
        amount: 150.93,
        date: new Date(2021, 2, 15),
    },
    {
        id: "e4",
        title: "Tires",
        amount: 350.19,
        date: new Date(2021, 10, 23),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;

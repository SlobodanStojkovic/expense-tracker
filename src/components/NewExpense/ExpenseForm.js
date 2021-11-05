import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    //all states default values are STRING because when we read data from event.target value it will always return STRING VALUE

    /*  const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    }); */
    //IF WE WANT TO HAVE ONE STATE with an object

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /*  setUserInput((userInput) => {
            return {
                ...userInput, //takes an object, pulls out key value pairs and adds them to this new object
                enteredTitle: event.target.value, //this override key value pair like enteredTitle in this case
            };
        }); */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /* setUserInput((userInput) => {
            return {
                ...userInput,
                enteredAmount: event.target.value,
            };
        }); */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput((userInput) => {
            return {
                ...userInput,
                enteredDate: event.target.value,
            };
        }); */
    };

    const submitHandler = (event) => {
        event.preventDefault(); //when we click on form submit browser default behavior is to refresh page, we need to prevent this.

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle} //This is called TWO-WAY BINDING
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

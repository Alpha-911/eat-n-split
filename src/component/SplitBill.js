import {Fragment, useState} from "react";

function SplitBill({name, updateBalance, previousBalance}) {
    const[bill, setBill] = useState("");
    const[yourExpense, setYourExpense] = useState("");
    const[payee, setPayee] = useState("you")

    const friendsExpense = Number(bill) - Number(yourExpense);

    const balance = payee === 'you'? String(Number(previousBalance) + friendsExpense) : String(Number(previousBalance) - Number(yourExpense));

    return (
        <Fragment>
            <h2>SPLIT A BILL WITH {name.toUpperCase()}</h2>
            <div className={"bill-value"}>
                <p>💰 Bill value</p>
                <input type="number" onChange={(e) => setBill(e.target.value)}/>
            </div>
            <div className={"your-expense"}>
                <p>🧍️Your expense</p>
                <input type="number" onChange={(e) => setYourExpense(e.target.value)}/>
            </div>
            <div className={"others-expense"}>
                <p>👫 {name}'s expense:</p>
                <input type="number" disabled={true} value={friendsExpense}/>
            </div>
            <div className={"who-is-paying"}>
                <p>🤑 Who is paying the bill?</p>
                <select name="who-is-paying" id="who-is-paying" onChange={(e) => setPayee(e.target.value)}>
                    <option value="you">You</option>
                    <option value="other">{name}</option>
                </select>
            </div>
            <button onClick={() => updateBalance(name, balance)} >Split bill</button>
        </Fragment>
    )
}

export default SplitBill;
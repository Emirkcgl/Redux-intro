import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();

  const account = useSelector((state) => state.account);

  console.log(account);

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    if (!account.loan) return;
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Hesap işlemleriniz</h2>
      <div className="inputs">
        <div>
          <label>Para yatır</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">Amerikan Doları</option>
            <option value="EUR">Avro</option>
            <option value="GBP">İngiliz Sterlini</option>
          </select>

          <button onClick={handleDeposit}>Yatır {depositAmount}</button>
        </div>

        <div>
          <label>Para çek</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>Çek {withdrawalAmount}</button>
        </div>

        <div>
          <label>Kredi talep et</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Kredi tutarı"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Kredi amacı"
          />
          <button onClick={handleRequestLoan}>Kredi talep et</button>
        </div>

        {account.loan > 0 && (
          <div>
            <span>
              Geri ödenecek tutar: ${account.loan}
              {account.loanPurpose && `(${account.loanPurpose})`}
            </span>
            <button onClick={handlePayLoan}>Krediyi öde</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;

import { useState } from "react";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  function handleDeposit() {}

  function handleWithdrawal() {}

  function handleRequestLoan() {}

  function handlePayLoan() {}

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
          <button onClick={handleWithdrawal}>
            Çek {withdrawalAmount}
          </button>
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

        <div>
          <span>Geri ödenecek tutar: $X</span>
          <button onClick={handlePayLoan}>Krediyi öde</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;

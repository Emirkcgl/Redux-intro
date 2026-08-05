import { useState } from "react";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {}

  return (
    <div>
      <h2>Yeni müşteri oluştur</h2>
      <div className="inputs">
        <div>
          <label>Müşterinin adı soyadı</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Kimlik numarası</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Yeni müşteri oluştur</button>
      </div>
    </div>
  );
}

export default Customer;

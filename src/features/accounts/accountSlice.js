const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case "convertCurrency/pending":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}

export function deposit(amount, currency) {
  const numericAmount = Number(amount);

  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: numericAmount,
    };
  }

  return async function (dispatch, getState) {
    dispatch({ type: "convertCurrency/pending" });
    //API  call
    const res = await fetch(
      `https://api.frankfurter.dev/v2/rate/${currency}/USD`,
    );

    if (!res.ok) {
      throw new Error(`API hatası: ${res.status}`);
    }
    const data = await res.json();

    const convertedAmount = numericAmount * data.rate;
    dispatch({ type: "account/deposit", payload: convertedAmount });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
export function payLoan() {
  return { type: "account/payLoan" };
}

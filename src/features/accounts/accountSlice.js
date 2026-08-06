import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
  error: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
      state.error = "";
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    ConvertCurrencyPending(state) {
      state.isLoading = true;
      state.error = "";
    },
  },
});

export const {
  deposit: depositAction,
  withdraw,
  requestLoan,
  payLoan,
  ConvertCurrencyPending,
} = accountSlice.actions;

export function deposit(amount, currency) {
  const numericAmount = Number(amount);

  if (!numericAmount || numericAmount <= 0) return;

  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: numericAmount,
    };
  }

  return async function (dispatch) {
    dispatch({ type: "convertCurrency/pending" });

    try {
      const res = await fetch(
        `https://api.frankfurter.dev/v2/rate/${currency}/USD`,
      );

      if (!res.ok) {
        throw new Error(`API hatası: ${res.status}`);
      }

      const data = await res.json();

      const convertedAmount = numericAmount * data.rate;

      dispatch({
        type: "account/deposit",
        payload: convertedAmount,
      });
    } catch (error) {
      console.error("Döviz çevirme hatası:", error.message);

      dispatch({
        type: "convertCurrency/rejected",
        payload: error.message,
      });
    }
  };
}

export default accountSlice.reducer;

/*
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
        error: "",
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
        isLoading: true,
        error: "",
      };

    case "convertCurrency/rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

export function deposit(amount, currency) {
  const numericAmount = Number(amount);

  if (!numericAmount || numericAmount <= 0) return;

  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: numericAmount,
    };
  }

  return async function (dispatch) {
    dispatch({ type: "convertCurrency/pending" });

    try {
      const res = await fetch(
        `https://api.frankfurter.dev/v2/rate/${currency}/USD`,
      );

      if (!res.ok) {
        throw new Error(`API hatası: ${res.status}`);
      }

      const data = await res.json();

      const convertedAmount = numericAmount * data.rate;

      dispatch({
        type: "account/deposit",
        payload: convertedAmount,
      });
    } catch (error) {
      console.error("Döviz çevirme hatası:", error.message);

      dispatch({
        type: "convertCurrency/rejected",
        payload: error.message,
      });
    }
  };
}

export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: Number(amount),
  };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount: Number(amount),
      purpose,
    },
  };
}

export function payLoan() {
  return {
    type: "account/payLoan",
  };
}

*/

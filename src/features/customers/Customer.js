import { useSelector } from "react-redux";
function Customer() {
  const customer = useSelector((state) => state.customer.fullName);

  return <h2>👋 Hoş geldiniz, {customer}</h2>;
}

export default Customer;

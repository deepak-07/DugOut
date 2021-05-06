import { useCart } from "./context";

export default function CartHeader() {
  const { state } = useCart();
  return <>{/* <span>{state.itemsInCart.length}</span> */}</>;
}

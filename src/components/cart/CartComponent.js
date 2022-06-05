import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { cartState,cartActions } from "../../features/cart/cartSlice";

const CartComponent = () => {
  const { cartItems, amount, total, isLoading } = useSelector(cartState);

  console.log(cartItems, amount, total, isLoading);

  const dispatch=useDispatch();

  return (
    <>
      <div>{amount}</div>
      <ul>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
      <button onClick={()=>dispatch(cartActions.clearCart())}>remove items</button>
    </>
  );
};

export default CartComponent;

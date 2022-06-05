import React, { useEffect } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { cartState,cartActions ,getCartItems} from "../../features/cart/cartSlice";

const CartComponent = () => {
  const { cartItems, amount, total, isLoading ,error} = useSelector(cartState);

   

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCartItems())
  },[dispatch])

  if(isLoading){
    return(
      <div>
        <p>Loading..</p>
      </div>
    )
  }

  if(error){
    return(
      <div>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <div>{amount}</div>
      <ul>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <button onClick={()=>dispatch(cartActions.clearCart())}>remove items</button>
    </>
  );
};

export default CartComponent;

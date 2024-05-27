import { useSelector } from "react-redux"
import { Card } from "./Card";

export const Cart = () => {
    const cartItems = useSelector((store) => store.cart);
    console.log(cartItems);

    if(!cartItems.cart.length) {
        return (
            <>
                No items ....
            </>
        )
    }

    return (
        <>
            {
                cartItems.cart.map(item => {
                    return (
                        <Card id={item.id} details={item}/>
                    )
                })
            }
        </>
    )
}
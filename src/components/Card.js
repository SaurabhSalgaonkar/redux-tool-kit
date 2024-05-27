import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const Card = ({ details }) => {
    const dispatch = useDispatch();
    const { hotelName, foodName, ratings, price } = details || {};


    const onClickButton = (details) => {
        console.log("Card clicked")
        dispatch(addItem(details));
    }

    return (
        <div className="cards-container">
            <div>{hotelName}</div>
            <div>{foodName}</div>
            <div>{ratings}</div>
            <div>{price}</div>
            <button onClick={() => onClickButton(details)} >Add to Cart</button>
        </div>
    )
}
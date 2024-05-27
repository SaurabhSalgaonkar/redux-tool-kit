import { Card } from "./Card"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../utils/cartSlice";

export const Home = () => {

    const data = useSelector((store) => store.cart.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    // const api = async () => {
    //     const apiData = await fetch('https://run.mocky.io/v3/60503943-2ae1-4b61-8c1a-ff88ec903f56');
    //     const resp = await apiData.json();
    //     setData(resp);
    //     console.log(resp);
    // }

    // useEffect(() => {
    //     api();
    // }, []);

    if(!data?.length) {
        return (
            <>
                Loading ......
            </>
        )
    }

    return (
        <>
            {
                data?.map((item) => {
                    return (
                        <Card id={item.id} details={item}/>
                    )
                })
            }
        </>
    )
}
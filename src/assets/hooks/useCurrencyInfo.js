import { useEffect,useState } from "react";

function CurrencyInfo(currency){
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{
            res=res.json();
            return res;
        }).then((res1)=>{
            setData(res1[currency])
        })
    },[currency])
    console.log(data)
    return data;
}

export default CurrencyInfo;
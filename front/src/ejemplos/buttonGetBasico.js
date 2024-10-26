import { customFetch } from "../utils/customFetch.js";
import { useState } from "react";
// import { url } from "../utils/url.js";

export default function ButtonFetch() {
    /* const [nombreVar, nombreSetter] = useState(valorInicial) */
    const [data, setData] = useState({})

    async function handleClick() {
        setData(await customFetch("http://localhost:4000/home", "GET"))
    }

    return (
        <>
        <button onClick={handleClick}> Fetch Button Get </button>
        <p>{data.message}</p>
        </>
    );
}

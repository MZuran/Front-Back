import { customFetch } from "../utils/customFetch.js";
import { useState } from "react";
// import { url } from "../utils/url.js";

export default function RegisterComponent() {
    const [response, setResponse] = useState({})
    const [Nombre, setNombre] = useState("")
    const [Contraseña, setContraseña] = useState("")

    async function handleClick() {
        const sentData = { datos: [Nombre, Contraseña] }
        setResponse(await customFetch("http://localhost:4000/ingresoATabla/Jugadores", "POST", sentData))
        console.log(response)
    }

    return (
        <>
            <button onClick={handleClick}> Fetch Button Post </button>
            <input
                type="text"
                value={Nombre}
                onChange={(inputElement) => setNombre(inputElement.target.value)}
            />
            <input
                type="text"
                value={Contraseña}
                onChange={(inputElement) => setContraseña(inputElement.target.value)}
            />
        </>
    );
}

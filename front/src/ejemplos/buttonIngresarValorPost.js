import { customFetch } from "../utils/customFetch.js";
import { useState } from "react";
// import { url } from "../utils/url.js";

export default function ButtonIngresarValor() {
    /*
        const [nombreVar, nombreSetter] = useState(valorInicial)
    */
    const [data, setData] = useState({})
    const [mensaje, setMensaje] = useState("")

    const dataEnviada = {mensaje: "Hola soy el front end"}

    async function handleClick() {
        setData(await customFetch("http://localhost:4000/home", "POST", {mensaje: mensaje}))
    }

    return (
        <>
        <button onClick={handleClick}> Fetch Button Post </button>
        <input
                    type="text" /* Tipo del input. Se puede restringir a números, texto, etc */
                    value={mensaje}

                    /*
                        onChange activa esta función cada vez que el texto del input cambia
                        La función recibe el input como parámetro y utiliza el *SETTER* de la variable de estado name
                        esto hace que name ahora tenga guardado el texto del input cada vez que se escribe algo
                    */
                    onChange={(inputElement) => setMensaje(inputElement.target.value)}

                    /* Esto hace que el input no pueda estar vacío */
                    required={true}
                />
        </>
    );
}

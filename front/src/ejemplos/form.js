import { customFetch } from "../utils/customFetch.js";
import { useState } from 'react'; // Asegúrate de importar useState

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        // Hace que no se envíe un formulario vacío
        event.preventDefault();

        // Se arma el objeto data para mandarle al POST
        const data = {
            name: name,
            email: email
        };

        // Usamos customFetch para hacer un POST con el objeto data asociado
        const response = await customFetch('https://api.example.com/submit', 'POST', data);

        if (response) {
            console.log('Form submitted successfully:', response);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    /* Tipo del input. Se puede restringir a números, texto, etc */
                    type="text"
                    value={name}

                    /*
                        onChange activa esta función cada vez que el texto del input cambia
                        La función recibe el input como parámetro y utiliza el *SETTER* de la variable de estado name
                        esto hace que name ahora tenga guardado el texto del input cada vez que se escribe algo
                    */
                    onChange={(inputElement) => setName(inputElement.target.value)}

                    /* Esto hace que el input no pueda estar vacío */
                    required={true}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(inputElement) => setEmail(inputElement.target.value)}
                    required={true}
                />
            </div>
            {/* Botón de tipo submit para activar la validación */}
            <button type="submit">Submit</button>
        </form>
    );
}

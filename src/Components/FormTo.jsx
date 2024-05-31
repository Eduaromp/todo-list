import React, { useState } from "react";

/*
FormTo es un componente funcional que recibe una propiedad llamada handleAddItem.
El componente renderiza un formulario con un campo de texto (input) y un botón.
Cuando se envía el formulario (al hacer clic en el botón), se llama a la función handleSubmit.
En handleSubmit, se crea un nuevo elemento de la lista con una descripción (description) y un ID único basado en la fecha actual.
Luego, se llama a handleAddItem para agregar este nuevo elemento a la lista.
Finalmente, se reinicia el campo de texto (description) a una cadena vacía.
*/

const FormTo = props => {
    const { handleAddItem } = props;
    const [description, setDescription] = useState("");
    const handleSubmit = e => {
        e.preventDefault(); // (E)
        // (C-2)
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDescription(""); // (B)
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="container_list">
                <div className="file-input">
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="addBtn"
                        disabled={description ? "" : "disabled"}
                    >
                        +
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormTo;
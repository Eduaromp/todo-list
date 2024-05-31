import React, { Fragment } from "react";

/* 

Check es un componente funcional que recibe dos propiedades: onChange y data.
data es un objeto que contiene las propiedades id, description y done.
El componente renderiza un elemento label con una casilla de verificación (input) y un texto descriptivo (description).
Cuando se cambia el estado de la casilla de verificación, se llama a la función onChange.


*/

const Check = props => {
    // (A)
    const {
        onChange,
        data: { id, description, done }
    } = props;
    return (
        <Fragment>
            <label className="todo new-item">
                {/*(B) (C)*/}
                <input
                    className="todo__state"
                    name={id}
                    type="checkbox"
                    defaultChecked={done}
                    onChange={onChange}
                />
                <div className="todo__text">{description}</div>
            </label>
        </Fragment>
    );
};

export default Check;
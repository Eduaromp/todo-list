import React from "react";

/* 
TaskList es un componente funcional que recibe dos propiedades: list y setList.
El componente mapea los elementos de la lista (list) y crea un componente Check para cada uno.
Cuando se cambia el estado de una casilla de verificación, se llama a la función onChangeStatus, que actualiza el estado de la lista.
Al hacer clic en el botón “Borrar”, se llama a la función onClickRemoveItem, que filtra los elementos completados de la lista.
*/

import Check from "./Check";

const TaskList = props => {
    const { list, setList } = props;

    const onChangeStatus = e => {
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
    const chk = list.map(item => (
        <Check key={item.id} data={item} onChange={onChangeStatus} />
    ));
    return (
        <div className="container_list">
            {list.length ? chk : "Sin tarea"}
            {list.length ? (
                <p>
                    <button className="addBtn" onClick={onClickRemoveItem}>
                        Borrar
                    </button>
                </p>
            ) : null}
        </div>
    );
};

export default TaskList;
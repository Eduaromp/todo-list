import React, {useState} from "react";

import FormTo from "./FormTo";
import TaskList from "./Tasklist";

/* 
Container es un componente funcional que utiliza el hook useState para manejar una lista de elementos (list).
El componente renderiza dos subcomponentes: FormTo y TaskList.
FormTo probablemente es un componente que permite al usuario agregar elementos a la lista.
TaskList es el componente que mostraste anteriormente, que se encarga de mostrar la lista de tareas y gestionar su estado.
*/

const Container = () => {
    const [list, setList] = useState([]);
    const handleAddItem = addItem => {
        setList([...list, addItem]);
      };
    return (
        <div>
            <FormTo handleAddItem={handleAddItem} />
            <TaskList list={list} setList={setList} />
        </div>
    )
}

export default Container;
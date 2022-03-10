import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter(){
    const {total, completed} = React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter text-center">Has completado {completed} de {total} TODOs</h2>
    );
}

export { TodoCounter }
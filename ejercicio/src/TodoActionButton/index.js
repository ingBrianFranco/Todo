import React from "react";

function TodoActionButton(props) {

    if (props.action === 'complete') {
        return <i
            className={`bi-check-circle${props.completed ? '-fill' : ''}`}
            style={{ color: "green" }}
            onClick={props.actionFunction}
        ></i>;
    }
    return <i
            className={`bi-x-square${props.completed ? '-fill' : ''}`}
            style={{ color: "red" }}
            onClick={props.actionFunction}
        ></i>;

}

export { TodoActionButton };
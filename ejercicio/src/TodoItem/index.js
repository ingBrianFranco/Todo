import React from "react";
import { TodoActionButton } from "../TodoActionButton";

function TodoItem(props) {
    return (
        <li className="list-group-item">
            <TodoActionButton
                action={'complete'}
                actionFunction={props.onComplete}
                completed={props.completed}
            />
            <p className={`${props.completed ? 'text-decoration-line-through' : ''}`}>{props.text}</p>
            <TodoActionButton
                action={'delete'}
                actionFunction={props.onDelete}
                completed={props.completed}
            />
        </li>
    );
}
//style={`color:black ${props.complete && 'color: green'}`}
export { TodoItem }
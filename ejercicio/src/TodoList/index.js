import React from "react";

function TodoList(props) {
    return (
        <div className="row mt-3">
            <ul className="list-group">
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList }
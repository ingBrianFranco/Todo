import React from "react";

function TodosLoading() {
    return <ul className="list-group">
        <li className="list-group-item">
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{"width": "100%"}}></div>
            </div>
        </li>
    </ul>
        ;
}

export { TodosLoading };
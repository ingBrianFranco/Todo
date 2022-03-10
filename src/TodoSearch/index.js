import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    return (
        <div className="row mt-3">
            <div className="col text-center">
                <input
                    className="text-center"
                    placeholder="Cebolla"
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>
        </div>
    );
}

export { TodoSearch }
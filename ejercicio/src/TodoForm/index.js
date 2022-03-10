import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="modal-header">
                <h5 className="modal-title">Crear ToDo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCancel}></button>
            </div>
            <div className="modal-body">
                <div class="mb-3">
                    <label for="textarea1" className="form-label">¿Cuál será tu nueva tarea?</label>
                    <textarea className="form-control" id="textarea1" rows="3" placeholder="Cortar la cebolla para el almuerzo"
                        value={newTodoValue}
                        onChange={onChange}
                    ></textarea>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCancel}>Cerrar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    );
}

export { TodoForm };
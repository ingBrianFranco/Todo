import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6 col-sm-10 col-xs-12">
                        <TodoCounter />
                        <TodoSearch />

                        <TodoList>
                            {error && <TodosError error={error}/>}
                            {loading && <TodosLoading />}
                            {(!loading && !searchedTodos.length) && <EmptyTodos />}


                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            )
                            )}
                        </TodoList>

                        {openModal && (
                            <Modal
                                setOpenModal={setOpenModal}
                            >
                                <TodoForm />
                            </Modal>
                        )}

                        <CreateTodoButton
                            setOpenModal={setOpenModal}
                            openModal={openModal}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export { AppUI };
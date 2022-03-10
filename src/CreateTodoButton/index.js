import React from "react";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true)
  };

  return (
    <div className="row mt-3">
      <div className="col-md-12 text-center">
        <button
          className="btn btn-lg btn-success"
          onClick={ onClickButton }
        >
          +
        </button>
      </div>
    </div>
  );
}

export { CreateTodoButton }
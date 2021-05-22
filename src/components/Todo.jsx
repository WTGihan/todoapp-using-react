import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  // Events
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <li className="list-group-item">
        <div className="row align-items-start">
          <div className="col-8 justify-content-start">
            <p className={`text-center ${todo.completed ? "completed" : ""}`}>
              {text}
            </p>
          </div>

          <div className="col-2 float-right">
            {" "}
            {todo.completed ? (
              ""
            ) : (
              <button
                onClick={completeHandler}
                type="button"
                className="btn btn-success"
              >
                <i className="fas fa-check"></i>
              </button>
            )}
          </div>
          <div className="col-2 float-right">
            {" "}
            <button
              onClick={deleteHandler}
              type="button"
              className="btn btn-danger"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Todo;

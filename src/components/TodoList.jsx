import React from "react";

function TodoList() {
  return (
    <div className="container col-6">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row align-items-start">
            <div className="col justify-content-start">
              <p className="text-center">
                Left aligned text on viewports sized MD (medium) or wider.
              </p>
            </div>
            <div className="col-2 float-right">
              {" "}
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row align-items-start">
            <div className="col justify-content-start">
              <p className="text-center">
                Left aligned text on viewports sized MD (medium) or wider.
              </p>
            </div>
            <div className="col-2 float-right">
              {" "}
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row align-items-start">
            <div className="col justify-content-start">
              <p className="text-center">
                Left aligned text on viewports sized MD (medium) or wider.
              </p>
            </div>
            <div className="col-2 float-right">
              {" "}
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;

import React from "react";

function Form() {
  // Here Can write javascript code and function

  const inputTexthandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container ml-10 mr-10 mt-4 w-50">
      <form action="#" className="row">
        <div className="col-10 w-75 col-sm-8">
          <div className="row">
            <div className="col-9 mb-3 w-75">
              <input
                type="text"
                className="form-control"
                onChange={inputTexthandler}
              />
            </div>
            <div className="col-3 float-right text-center w-25">
              <button type="submit" className="btn btn-primary">
                Add Item
              </button>
            </div>
          </div>
        </div>

        <div className="col-2 w-25">
          <select className="form-select" name="todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
